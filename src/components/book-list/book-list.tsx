import React, { useState, useEffect } from 'react';
import { Book } from '../../types/book'; // Adjust path if needed
import BookItem from '../book-item/book-item';
import './book-list.scss';

interface BookListProps {
    onAddToCart: (book: Book) => void;
  }

const BookList: React.FC<BookListProps> = ({onAddToCart}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://your-book-api.com/books'); 
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data); 
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []); 

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <BookItem book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;