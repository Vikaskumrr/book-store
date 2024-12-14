import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import BookList from './components/book-list/book-list';
import BookItem from './components/book-item/book-item';
import Cart from './components/cart/cart';
import Header from './components/header/header';
import { Book } from './types/book';
import { CartItem } from './types/cart-item';
import Card from './components/card/card'; // Import the Card component

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); 

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (book: Book) => {
    // Check if the book is already in the cart
    const existingCartItemIndex = cartItems.findIndex((item) => item.book.id === book.id);

    if (existingCartItemIndex !== -1) {
      // If the book exists, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the book doesn't exist, add it to the cart with a quantity of 1
      setCartItems([...cartItems, { book, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (bookId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.book.id !== bookId);
    setCartItems(updatedCartItems);
  };

  const handleUpdateCartItemQuantity = (bookId: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.book.id === bookId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <div className="app-container">
        <Header cartItemCount={cartItems.length} />
        <main>
          <Card title="Your Collection"> 
            {/* Example: Display a few books from the user's collection */}
            {/* In a real app, you would fetch this data */}
            <ul>
              <li>Book Title 1</li>
              <li>Book Title 2</li>
            </ul>
          </Card>

          <Card title="Explore More"> 
            {/* Example: Display links to different book categories */}
            <ul>
              <li>
                <a href="#">Fiction</a>
              </li>
              <li>
                <a href="#">Mystery</a>
              </li>
              {/* ... more links */}
            </ul>
          </Card>
          <Routes>
            <Route path="/" element={<BookList onAddToCart={handleAddToCart}/>} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  onRemoveFromCart={handleRemoveFromCart}
                  onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;