import axios from 'axios'; 

const API_URL = 'https://your-book-api.com';

// Example using a type for book data:
export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    imageUrl?: string; 
}

const getBooks = async (): Promise<Book[]> => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
};

// ... Other functions for fetching, adding to cart, updating cart, etc.

export default { getBooks, /* ... */ };