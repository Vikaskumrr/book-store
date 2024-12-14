import React from 'react';
import { Book } from '../../types/book';
import './book-item.scss';

interface BookItemProps {
  book: Book;
  onAddToCart?: (book: Book) => void; 
}

const BookItem: React.FC<BookItemProps> = ({ book, onAddToCart }) => {
  return (
    <div className="book-item">
      {/* Replace with actual image URLs if available */}
      <img src={book.imageUrl || 'placeholder-image.jpg'} alt={book.title} /> 
      <div>
        <h3>{book.title}</h3>
        <p>By: {book.author}</p>
        <p>Price: ${book.price.toFixed(2)}</p> 
        {onAddToCart && <button onClick={() => onAddToCart(book)}>Add to Cart</button>}
      </div>
    </div>
  );
};

export default BookItem;