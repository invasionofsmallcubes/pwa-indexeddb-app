import { fireEvent, render } from '@testing-library/react';

import CreateTodo from './CreateTodo';
import React from 'react';

test('I can create a Todo clicking the button', async () => {

    const success = Promise.resolve(todo);
    const historyResolve = Promise.resolve();
    const historyProps = historyProps2(historyResolve);

    const { getByLabelText, getByText } = render(<CreateTodo
        todoRepository={asyncTodoRepository(success)}
        history={historyProps} />);

    const input = getByLabelText(/Title/i);
    const button = getByText(/Create/i);

    fireEvent.change(input, { target: { value: todoTitle } });
    fireEvent.click(button)

    await success;
    await historyResolve;

    expect(historyProps.push.mock.calls[0].length).toBe(1);
    expect(historyProps.push.mock.calls[0][0]['pathname']).toBe('/todos/' + todoId);
    expect(historyProps.push.mock.calls[0][0]['state'].todo).toMatchObject(todo);
});