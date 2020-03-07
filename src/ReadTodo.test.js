import { fireEvent, render } from '@testing-library/react';

import React from 'react';
import ReadTodo from './ReadTodo';
import { Todo } from './TodoRepository';

test('renders learn react through id', () => {
    const id = 'id';
    const note = Todo(id, 'title');

    const noteRepository = {
        get: jest.fn((id) => note)
    };

    const { getByText } = render(<ReadTodo noteId={id} noteRepository={noteRepository} />);

    const text = getByText(/ReadTodo/i);
    expect(text.textContent).toBe('ReadTodo id title');
});

test('renders learn react through state', () => {
    const id = 'id';
    const note = Todo(id, 'title');
    const { getByText } = render(<ReadTodo noteId={id} note={note} />);

    const text = getByText(/ReadTodo/i);

    expect(text.textContent).toBe('ReadTodo id title');
});