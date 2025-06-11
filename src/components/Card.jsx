// Card.jsx
import React from 'react';
import './Card.css';

export default function Card({ title, text, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
