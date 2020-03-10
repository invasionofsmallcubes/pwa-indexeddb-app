import { fireEvent, render } from '@testing-library/react';

import React from 'react';
import ReadTodo from './ReadTodo';

test('renders learn react through id', async (done) => {
    const { getByText } = render(<ReadTodo todoId={todoId} todoRepository={asyncNodeRepository} />);

    setTimeout(() => {
        const div = getByText(/ReadTodo/i);
        expect(div.textContent).toBe('ReadTodo id my title');
        done();
    });
});

test('renders learn react through state', () => {
    const { getByText } = render(<ReadTodo todo={todo} />);

    const text = getByText(/ReadTodo/i);

    expect(text.textContent).toBe('ReadTodo id my title');
});