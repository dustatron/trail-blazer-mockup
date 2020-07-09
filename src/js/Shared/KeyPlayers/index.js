import React, { useEffect, useState, Fragment } from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import Player from './Player';
// Styling.
import '../../../scss/components/_key-players.scss';
// Temp Data for mockup.
// import { tempData } from './tempData';
import { v4 } from 'uuid';
// API
import { ApiKeyPlayers } from '../../Config/API_config';

///////  KEY PLAYER INDEX //////
const Index = ({ links }) => {
  // Local component state.
  const [alertMessage, setAlertMessage] = useState(null);
  const [playerData, setPlayerData] = useState([]);
  // const { home, visiting } = playerData;
  // Alert Message presented to the user when api Fails to load.
  const alertReadout = 'Key Players data could not be load. Enable Cores';

  // Api Call for key user data.
  // !!Currently awaiting correct end point link.
  const callApi = async () => {
    try {
      const response = await fetch(ApiKeyPlayers())
        .then((response) => response.json())
        .then((data) => data.tle);
      // eslint-disable-next-line
      const { min, pts, ast, reb, fgp, ftp, tpp, blk, stl, tov } = response;

      const prunedResponse = [
        // { ...min, title: 'Minutes', key: 'min' },
        { ...pts, title: 'Points', key: 'pts' },
        // { ...ast, title: 'Assists', key: 'ast' },
        { ...reb, title: 'Rebounds', key: 'reb' },
        { ...fgp, title: 'Field Goals', key: 'fgp' },
        { ...ftp, title: 'Free Throws', key: 'ftp' },
        // { ...tpp, title: 'Three Pont', key: 'tpp' },
        // { ...blk, title: 'Blocks', key: 'blk' },
        // { ...stl, title: 'Steals', key: 'stl' },
        // { ...tov, title: 'Turnovers', key: 'tov' },
      ];

      setPlayerData(prunedResponse);
    } catch (error) {
      setAlertMessage(alertReadout);
      console.error('Key Player API FAILED: ', error.message);
    }
  };

  useEffect(() => {
    callApi();

    // Currently importing fake data.
    // When ready delete the line below.
    // setPlayerData(tempData);
  }, []);
  return (
    <Fragment>
      <span className='header-key-players'>
        <HeaderBarTemplate title={'Key Players'} showLinks={links} />
      </span>
      <span className='header-home'>
        <HeaderBarTemplate
          className='header-key-players'
          title={'Home'}
          showLinks={links}
        />
      </span>
      {alertMessage && <div className='alert-message'> {alertMessage} </div>}
      <div className='key-players'>
        {/* <div className='key-players-home'> */}
        {playerData.map((player) => (
          <Player key={v4()} thisPlayer={player} />
        ))}
        {/* </div> */}
        {/* ////// away section ////// */}
        {/* ////// Commented out for now ////// */}
        {/* <span className='header-away'>
          <HeaderBarTemplate className='header-key-players' title={'Away'} />
        </span> */}
        {/* <div className='key-players-visiting'>
          {visiting.map((player) => (
            <Player player={player} key={v4()} />
          ))}
        </div> */}
      </div>
    </Fragment>
  );
};

export default Index;
