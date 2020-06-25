import React, { Fragment, useState, useEffect } from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import GameBox from './GameBox';
import MonthBar from './MonthBar';
import '../../../scss/components/_upcoming-games.scss';
const Index = () => {
  // Local component state.
  const [alertMessage, setAlertMessage] = useState(null);
  const [gameData, setGameData] = useState([]);

  // Alert Message presented to the user when api Fails to load.
  const alertReadout = 'Upcoming game data could not to load. Enable Cores';

  // Api Call for key user data.
  const callApi = async () => {
    try {
      const response = await fetch(
        'https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/teams/trail_blazers_schedule_02.json'
      )
        .then((response) => response.json())
        .then((data) => data.gscd.g);
      setGameData(
        response.reduce((obj, g) => {
          const { gdte } = g;
          const month = gdte.slice(0, 7);

          return {
            ...obj,
            [month]: obj[month] ? [...obj[month], g] : [g],
          };
        }, {})
      );
    } catch (error) {
      setAlertMessage(alertReadout);
      console.error('News Feed API FAILED: ', error.message);
    }
  };

  useEffect(() => {
    // Get data from API.
    callApi();
  }, []);
  return (
    <Fragment>
      <HeaderBarTemplate title={'upcoming games'} />
      {alertMessage && <div className='alert-message'>{alertMessage} </div>}
      <div className='upcoming-games'>
        {Object.entries(gameData).map((month) => (
          <p>
            {<MonthBar month={month[0]} />}
            {month[1].map((game) => (
              <GameBox game={game} />
            ))}
          </p>
        ))}
      </div>
    </Fragment>
  );
};

export default Index;
