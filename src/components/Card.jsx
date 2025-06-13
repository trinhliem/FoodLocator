import React from 'react';
import './Card.css';

export default function Card({ title, text, image, link }) {
  return (
    <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </a>
  );
}
