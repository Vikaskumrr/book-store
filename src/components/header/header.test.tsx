import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // For testing Link components
import Header from './header';

test('renders header with cart item count', () => {
  render(
    <MemoryRouter>
      <Header cartItemCount={3} />
    </MemoryRouter>
  );

  expect(screen.getByText('Bookstore')).toBeInTheDocument();
  expect(screen.getByText('Cart 3')).toBeInTheDocument(); 
});