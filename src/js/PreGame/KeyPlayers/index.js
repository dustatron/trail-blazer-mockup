import React, { useEffect, useState } from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';

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
      <HeaderBarTemplate title={'Key Players'} />
      <h1>Key Players {playerData[0]}</h1>
    </div>
  );
};

export default Index;
