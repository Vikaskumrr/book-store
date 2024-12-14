// src/components/Card/Card.tsx
import React from 'react';
import './card.scss';

interface CardProps {
  title: string;
  children: React.ReactNode; // To render content within the card
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card"> 
      <h2 className="card-title">{title}</h2> 
      <div className="card-content"> 
        {children}
      </div>
    </div>
  );
};

export default Card;