import { fireEvent, render } from '@testing-library/react';

import CreateNote from './CreateNote';
import React from 'react';

test('renders learn react link', () => {
    const { getByLabelText, getByText } = render(<CreateNote />);
    const input = getByLabelText(/Title/i);
    const button = getByText(/Create/i);

    expect(fireEvent.change(input,
        { target: { value: 'my title' } })).toBeTruthy();

    expect(fireEvent.click(button)).toBeTruthy();

    expect(input).toBeInTheDocument();
});