// npm install @testing-library/react @testing-library/jest-dom  react-test-renderer --save-dev

import React from 'react';
import { render } from '@testing-library/react';
import Battleships from './Battleships';

test.skip('renders learn react link', () => {
  const { getByText } = render(<Battleships />);
  const linkElement = getByText(/battleships/i);
  expect(linkElement).toBeInTheDocument();
});
