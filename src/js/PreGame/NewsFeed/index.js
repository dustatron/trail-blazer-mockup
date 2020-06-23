import React, { useState, useEffect } from 'react';

///////  NEWS FEED INDEX //////
const Index = () => {
  const [feedData, setFeed] = useState([]);

  const callApi = async () => {
    try {
      const response = await fetch('https://www.nba.com/blazers/api/1.1/json')
        .then((response) => response.json())
        .then((data) => data.content);
      setFeed(response);
    } catch (error) {
      console.error('News Feed API FAILED: ', error.message);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <h1>News Feed {feedData.length}</h1>
    </div>
  );
};

export default Index;
