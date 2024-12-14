import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from './book-list';

// Mock fetch to control the API response in tests
beforeEach(() => {
  globalThis.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, title: 'Test Book', author: 'Test Author', price: 19.99 }]), 
      ok: true,
    })
  ) as jest.Mock; 
});

test('renders book list with items', async () => {
  render(<BookList onAddToCart={() => void {}} />);
  // Check for loading state first
  expect(screen.getByText('Loading books...')).toBeInTheDocument();

  // Wait for the books to load 
  // Use screen.findBy... or waitFor for asynchronous operations
  await screen.findByText('Test Book');

  // Assertions after data has loaded
  expect(screen.getByText('Test Book')).toBeInTheDocument(); 
});