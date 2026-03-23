import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { files } from './data';

test('renders the home page heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /SCP Foundation Database/i });
  expect(headingElement).toBeDefined();
});

test('renders links for all known subjects', () => {
  render(<App />);

  files.forEach((file) => {
    const subjectLink = screen.getByRole('link', { name: file.Subject });
    expect(subjectLink).toBeDefined();
  });
});
