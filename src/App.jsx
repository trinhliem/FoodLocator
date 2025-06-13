import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import bannerImage from './assets/banner.jpg';


export default function App() {
const cardsData = [
  {
    title: 'How to Store Milk and Make it Last',
    text: 'Keep your milk fresher longer with these simple storage tips.',
    image: '/assets/milk-article.jpg',
    link: '#'
  },
  {
    title: 'Orange County Community Food Bank Guide',
    text: 'Find contact info, open hours, and eligibility for top food banks.',
    image: '/assets/foodbank3.jpg',
    link: '#'
  },
  {
    title: 'Smart Ways to Store Fresh Produce',
    text: 'Learn how to extend the life of fruits and vegetables.',
    image: '/assets/produce.jpg',
    link: '#'
  },
  {
    title: 'Where to Get Free Meals This Week',
    text: 'A weekly roundup of free meal distributions across the city.',
    image: '/assets/freemeal.jpg',
    link: '#'
  },
  {
    title: 'Huntington Beach Pier Pop-Up Pantry',
    text: 'Mobile food pantry event serving hundreds of families every month.',
    image: 'assets/huntingbeachpier.jpg',
    link: '#'
  },
  {
    title: 'Beginner’s Guide to Food Assistance Programs',
    text: 'SNAP, WIC, and local options—explained simply.',
    image: 'assets/snapebt.jpg',
    link: '#'
  },
  {
    title: 'Tips to Reduce Food Waste at Home',
    text: 'Save money and help the planet with these food-saving strategies.',
    image: 'assets/foodwaste.jpg',
    link: '#'
  },
  {
    title: 'New Pantry Locations Updated 6/12/2025',
    text: 'New updates made to our interactive map to help you find the food you need',
    image: 'assets/mapupdate.png',
    link: '#'
  },
  {
    title: 'Volunteering at Your Local Pantry',
    text: 'Learn how you can help your community by volunteering.',
    image: 'assets/volunteering.jpg',
    link: '#'
  },
  {
    title: 'Understanding Expiration vs. Best-By Dates',
    text: 'When is it actually safe to eat that can of beans?',
    image: 'assets/expdate.jpg',
    link: '#'
  }
];


  return (
    <>
      <Navbar />
      <Banner imageUrl={bannerImage}/>
      <div style={{ marginTop: '5rem' }}> {/* Prevent overlap with fixed navbar */}
        <div style={styles.layout}>
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  layout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
    justifyContent: 'start',  
    maxWidth: '1000px',
    margin: '0 auto'
  }
};
