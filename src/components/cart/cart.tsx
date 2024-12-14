import React from 'react';
import { CartItem } from '../../types/cart-item'; // Import your CartItem type
import './cart.scss';

interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (itemId: number) => void;
  onUpdateCartItemQuantity: (itemId: number, newQuantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart, onUpdateCartItemQuantity }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.book.price * item.quantity, 0); 
  }; 

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.book.id}>
              <div>
                <h4>{item.book.title}</h4>
                <p>Price: ${item.book.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => onRemoveFromCart(item.book.id)}>Remove</button>

                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value, 10) || 1; 
                    onUpdateCartItemQuantity(item.book.id, newQuantity);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="total">
        <h3>Total: ${calculateTotalPrice().toFixed(2)}</h3>
        <button disabled={cartItems.length === 0}>Checkout</button> 
      </div>
    </div>
  );
};

export default Cart;