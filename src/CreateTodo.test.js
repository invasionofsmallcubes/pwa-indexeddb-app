import { fireEvent, render } from '@testing-library/react';

import CreateTodo from './CreateTodo';
import React from 'react';
import { Todo } from './TodoRepository'

test('renders learn react link', () => {

    const title = 'my title';
    const id = 'id';
    const note = Todo(id);

    const noteRepository = {
        create: jest.fn((title) => note)
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

    expect(noteRepository.create.mock.calls[0].length).toBe(1);
    expect(noteRepository.create.mock.calls[0][0]).toBe(title);
    expect(historyProps.push.mock.calls[0].length).toBe(1);
    expect(historyProps.push.mock.calls[0][0]['pathname']).toBe('/notes/' + id);
    expect(historyProps.push.mock.calls[0][0]['state'].note).toBe(note);

    expect(input).toBeInTheDocument();
});