import React from 'react';
import Card from './components/Card';

export default function App() {
  const cardsData = [
    {
      title: 'Millennium Park',
      text: 'Explore the famous Cloud Gate sculpture.',
      image: 'https://example.com/cloud-gate.jpg'
    },
    {
      title: 'Navy Pier',
      text: 'Enjoy attractions, restaurants, and lake views.',
      image: 'https://example.com/navy-pier.jpg'
    },
    {
      title: 'Art Institute',
      text: 'Discover masterpieces from around the world.',
      image: 'https://example.com/art-institute.jpg'
    }
  ];

  return (
    <div style={styles.layout}>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

const styles = {
  layout: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '2rem'
  }
};
