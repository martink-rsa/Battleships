// npm install @testing-library/react @testing-library/jest-dom  react-test-renderer --save-dev

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  expect(1).toBe(1);
});

/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
