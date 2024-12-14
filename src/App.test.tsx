import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders the app and header', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Check if elements from Header are rendered
  expect(screen.getByText(/Bookstore/i)).toBeInTheDocument(); // Using regex for case-insensitive match
});