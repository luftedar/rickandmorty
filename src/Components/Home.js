import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/characters">
        Characters
      </Link>
      <Link to="/locations">
        Locations
      </Link>
      <Link to="/Episodes">
        Episodes
      </Link>
    </div>
  );
}

export default Home;
