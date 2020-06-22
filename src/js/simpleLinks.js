import React from 'react';
import { Link } from 'react-router-dom';
const simpleLinks = () => {
  return (
    <div>
      <h1>Hello from App</h1>
      <p>
        <Link to='/key-players-stats'>Key Players stats</Link>
      </p>
      <p>
        <Link to='/news-feed'>News Feed</Link>
      </p>
    </div>
  );
};

export default simpleLinks;
