import React from 'react';
import { Link } from 'react-router-dom'; 
import './header.scss';

interface HeaderProps {
  cartItemCount: number; 
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <header className="header">
      <div className="container"> 
        <Link to="/" className="logo">
          Bookstore
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            {/* ... Other navigation links */}
            <li>
              <Link to="/cart" className="cart-link">
                Cart {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;