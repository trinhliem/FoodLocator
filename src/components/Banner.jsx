import React from 'react';
import './Banner.css';

export default function Banner({ imageUrl }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="banner-overlay">
        <h1>Find Free Food Near You</h1>
        <p>FoodLocator connects communities with nearby food banks, pantries, and free meal services.</p>
        <a href="#" className="cta-button">Search Locations</a>
      </div>
    </div>
  );
}

