import { fireEvent, render } from '@testing-library/react';

import Main from './Main';
import React from 'react';

test('renders learn react link', () => {
  const { getByText } = render(<Main />);
  const linkElement = getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});

test('when I click on create new, I go on the component where I can create a note', () => {

  const historyProps = {
    push: jest.fn(({ pathname }) => { })
  }

  const { getByText } = render(<Main history={historyProps} />);
  const linkElement = getByText(/Create New ToDo/i);
  fireEvent.click(linkElement);
  expect(historyProps.push.mock.calls.length).toBe(1);
  expect(historyProps.push.mock.calls[0][0].pathname).toBe('/notes/new');
})