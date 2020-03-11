import { render, waitForElement } from '@testing-library/react';

import React from 'react';
import ReadTodo from './ReadTodo';

test('renders learn react through id', async () => {
    const success = Promise.resolve(todo);
    const { getByText } = render(<ReadTodo
        todoId={todoId}
        todoRepository={asyncTodoRepository(success)} />);

    await success;
    const div = await waitForElement(() => getByText(/ReadTodo/i));
    expect(div.textContent).toBe('ReadTodo id my title');
});

test('renders learn react through state', () => {
    const { getByText } = render(<ReadTodo todo={todo} />);

    const text = getByText(/ReadTodo/i);

    expect(text.textContent).toBe('ReadTodo id my title');
});