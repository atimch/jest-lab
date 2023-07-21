import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders input and button', () => {
  render(<App />);

  const inputField = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /enter/i });

  expect(inputField).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});