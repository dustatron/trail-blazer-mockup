import React, { useEffect, useState, Fragment } from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import Player from './Player';
// Styling.
import '../../../scss/components/_key-players.scss';
// Temp Data for mockup.
import { tempData } from './tempData';
import { v4 } from 'uuid';

///////  KEY PLAYER INDEX //////
const Index = ({ links }) => {
  // Local component state.
  const [alertMessage, setAlertMessage] = useState(null);
  const [playerData, setPlayerData] = useState({
    home: [],
    visiting: [],
  });
  const { home, visiting } = playerData;
  // Alert Message presented to the user when api Fails to load.
  const alertReadout = 'Key Players data could not to load. Enable Cores';

  // Api Call for key user data.
  // !!Currently awaiting correct end point link.
  const callApi = async () => {
    try {
      const response = await fetch('need end point!!')
        .then((response) => response.json())
        .then((data) => data.content);
      setPlayerData(response);
    } catch (error) {
      setAlertMessage(alertReadout);
      console.error('News Feed API FAILED: ', error.message);
    }
  };

  useEffect(() => {
    // Get data from API.
    // When ready uncomment this CallApi.
    // callApi();

    // Currently importing fake data.
    // When ready delete the line below.
    setPlayerData(tempData);
  }, []);
  return (
    <Fragment>
      <span className='header-key-players'>
        <HeaderBarTemplate title={'Key Players'} showLinks={links} />
      </span>
      <span className='header-home'>
        <HeaderBarTemplate className='header-key-players' title={'Home'} />
      </span>
      {alertMessage && <div className='alert-message'> {alertMessage} </div>}
      <div className='key-players'>
        <div className='key-players-home'>
          {home.map((player) => (
            <Player player={player} />
          ))}
        </div>
        <span className='header-away'>
          <HeaderBarTemplate className='header-key-players' title={'Away'} />
        </span>
        <div className='key-players-visiting'>
          {visiting.map((player) => (
            <Player player={player} key={v4()} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
