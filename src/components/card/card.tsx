import React from 'react';
import './Card.scss'; // Import SCSS for styling

interface CardProps {
    title: string;
    children?: React.ReactNode; // Allow content within the card
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="card-content">{children}</div>
        </div>
    );
};

export default Card;