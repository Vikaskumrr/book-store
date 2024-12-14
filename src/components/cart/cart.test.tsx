import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './cart'; 
import { CartItem } from '../../types/cart-item';

test('renders cart with items and calculates total', () => {
  const testCartItems: CartItem[] = [
    { book: { id: 1, title: 'Test Book 1', author: 'Test Author 1', price: 19.99 }, quantity: 2 },
    { book: { id: 2, title: 'Test Book 2', author: 'Test Author 2', price: 9.99 }, quantity: 1 },
  ];

  render(<Cart cartItems={testCartItems} onRemoveFromCart={jest.fn()} onUpdateCartItemQuantity={jest.fn()} />); 

  expect(screen.getByText('Test Book 1')).toBeInTheDocument();
  expect(screen.getByText('Test Book 2')).toBeInTheDocument(); 
  expect(screen.getByText('Total: $49.97')).toBeInTheDocument();
});

test('renders empty cart message', () => {
  render(<Cart cartItems={[]} onRemoveFromCart={jest.fn()} onUpdateCartItemQuantity={jest.fn()} />); 
  expect(screen.getByText('Your cart is empty.')).toBeInTheDocument(); 
});