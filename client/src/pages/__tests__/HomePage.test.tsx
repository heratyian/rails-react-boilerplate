import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

test('renders hello world', () => {
  render(<HomePage />);
  const helloWorld = screen.getByText(/hello world/i);
  expect(helloWorld).toBeInTheDocument();
});
