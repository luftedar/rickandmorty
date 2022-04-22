import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <Link to="/characters" className="home-link d-flex d-center">
        Characters
      </Link>
    </div>
  );
}

export default Home;
