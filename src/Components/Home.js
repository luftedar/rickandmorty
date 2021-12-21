import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <Link to="/characters" className="home-link d-flex d-center">
        Characters
      </Link>
      <Link to="/locations" className="home-link d-flex d-center">
        Locations
      </Link>
      <Link to="/episodes" className="home-link d-flex d-center">
        Episodes
      </Link>
      <Link to="/about" className="home-link d-flex d-center">
        About Rick and Morty
      </Link>
    </div>
  );
}

export default Home;
