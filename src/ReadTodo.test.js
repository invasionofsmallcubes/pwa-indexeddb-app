import { fireEvent, render } from '@testing-library/react';

import React from 'react';
import ReadTodo from './ReadTodo';

test('renders learn react through id', () => {
    const { getByText } = render(<ReadTodo noteId={todoId} noteRepository={asyncNodeRepository} />);

    const div = getByText(/ReadTodo/i);
    expect(div.textContent).toBe('ReadTodo id my title');
});

test('renders learn react through state', () => {
    const { getByText } = render(<ReadTodo note={todo} />);

    const text = getByText(/ReadTodo/i);

    expect(text.textContent).toBe('ReadTodo id my title');
});