import React, { useEffect, useState } from 'react';

///////  KEY PLAYER INDEX //////
const index = () => {
  const [playerData, setPlayerData] = useState([]);
  useEffect(() => {
    //Get from API
    setPlayerData([]);
  }, []);
  return (
    <div>
      <h1>Key Players</h1>
    </div>
  );
};

export default index;
