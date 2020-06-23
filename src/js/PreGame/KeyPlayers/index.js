import React, { useEffect, useState } from 'react';

import '../../../scss/components/_key-players.scss';
import coloredLine from '../../../media/coloredLine.svg';

///////  KEY PLAYER INDEX //////
const Index = () => {
  const [playerData, setPlayerData] = useState([1]);
  useEffect(() => {
    //Get from API
    setPlayerData([2]);
  }, []);
  return (
    <div>
      <h1>Key Players {playerData[0]}</h1>
      <img src={coloredLine} alt='separator' />
    </div>
  );
};

export default Index;
