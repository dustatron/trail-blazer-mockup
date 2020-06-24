import React, { useEffect, useState, Fragment } from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import { tempData } from './tempData';
// Styling
import '../../../scss/components/_key-players.scss';

///////  KEY PLAYER INDEX //////
const Index = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [playerData, setPlayerData] = useState({
    home: [],
    visiting: [],
  });
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
      <HeaderBarTemplate title={'Key Players'} />
      {alertMessage && <div className='alert-message'> {alertMessage} </div>}
      <div className='key-players'>Key players</div>
    </Fragment>
  );
};

export default Index;
