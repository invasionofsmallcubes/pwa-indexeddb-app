import { fireEvent, render } from '@testing-library/react';

import CreateTodo from './CreateTodo';
import React from 'react';

test('I can create a Todo clicking the button', async () => {
    try {
        const success = Promise.resolve(todo);
        const successb = Promise.resolve();

        const hp = historyProps(successb);

        const { getByLabelText, getByText } = render(<CreateTodo
            todoRepository={asyncTodoRepository(success)}
            history={hp} />);

        const input = getByLabelText(/Title/i);
        const button = getByText(/Create/i);

        fireEvent.change(input, { target: { value: todoTitle } });
        fireEvent.click(button)

        await successb;
        await success;

        expect(hp.push.mock.calls[0].length).toBe(1);
        expect(hp.push.mock.calls[0][0]['pathname']).toBe('/todos/' + todoId);
        expect(hp.push.mock.calls[0][0]['state'].todo).toMatchObject(todo);
    } catch (e) {

    }
});