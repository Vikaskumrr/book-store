import React from 'react';
import { render, screen } from '@testing-library/react';
import BookItem from './book-item';

test('renders book item with details', () => {
  const testBook = { 
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    price: 24.99,
  }; 

  render(<BookItem book={testBook} />);

  expect(screen.getByText('Test Book')).toBeInTheDocument(); 
  expect(screen.getByText('By: Test Author')).toBeInTheDocument();
  expect(screen.getByText('Price: $24.99')).toBeInTheDocument();
});