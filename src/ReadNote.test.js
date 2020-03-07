import { fireEvent, render } from '@testing-library/react';

import { Note } from './NoteRepository';
import React from 'react';
import ReadNote from './ReadNote';

test('renders learn react through id', () => {
    const id = 'id';
    const note = Note(id, 'title');

    const noteRepository = {
        get: jest.fn((id) => note)
    };

    const { getByText } = render(<ReadNote noteId={id} noteRepository={noteRepository} />);

    const text = getByText(/ReadNote/i);
    expect(text.textContent).toBe('ReadNote id title');
});

test('renders learn react through state', () => {
    const id = 'id';
    const note = Note(id, 'title');
    const { getByText } = render(<ReadNote noteId={id} note={note} />);

    const text = getByText(/ReadNote/i);

    expect(text.textContent).toBe('ReadNote id title');
});