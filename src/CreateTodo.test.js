import { fireEvent, render } from '@testing-library/react';

import CreateTodo from './CreateTodo';
import React from 'react';
import { Todo } from './TodoRepository'

test('I can create a Todo clicking the button', async (done) => {
    const title = 'my title';
    const id = 'id';
    const note = Todo(id);

    const noteRepository = {
        async create(title) { return note }
    };

    const historyProps = {
        push: jest.fn(({ pathname, state }) => { })
    }

    const { getByLabelText, getByText } = render(<CreateTodo
        noteRepository={noteRepository}
        history={historyProps} />);

    const input = getByLabelText(/Title/i);
    const button = getByText(/Create/i);

    fireEvent.change(input, { target: { value: title } });
    fireEvent.click(button)

    setTimeout(() => {
        try {
            expect(historyProps.push.mock.calls[0].length).toBe(1);
            expect(historyProps.push.mock.calls[0][0]['pathname']).toBe('/notes/' + id);
            expect(historyProps.push.mock.calls[0][0]['state'].note).toBe(note);

            expect(input).toBeInTheDocument();
        } catch (e) {
            done(e);
        }
        done();
    });

});