import React, { Fragment, useState, useEffect } from 'react';
// Components
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import GameBox from './GameBox';
import MonthBar from './MonthBar';
import { v4 } from 'uuid';
// Style
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
      const gameData = await fetch(
        'https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/teams/trail_blazers_schedule_02.json'
      )
        .then((response) => response.json())
        .then((data) => data.gscd.g);

      // const priceData = await fetch(
      //   'https://buyblazertickets.com/includes/jsonp.php'
      // )
      //   .then((response) => {
      //     console.log(response);
      //     return response.json();
      //   })
      //   .then((data) => data.blazers);

      // Sort Data by month
      // Add keys to objects that are human readable
      // Removes games where Portland is the visiting team.
      const SortedResponse = gameData.reduce((obj, g) => {
        const { gdte } = g;
        const month = gdte.slice(0, 7);
        const pruned = {
          gameId: g.gid,
          gameCode: g.gcode,
          date: gdte,
          dayNumber: gdte.split('-'),
          hour: g.etm.split('T'),
          city: g.ac,
          state: g.as,
          arena: g.an,
          homeTeam: g.h,
          visitorTeam: g.v,
        };
        if (pruned.visitorTeam.ta == 'POR') {
          return { ...obj };
        } else {
          return {
            ...obj,
            [month]: obj[month] ? [...obj[month], pruned] : [pruned],
          };
        }
      }, {});
      setGameData(SortedResponse);
    } catch (error) {
      setAlertMessage(alertReadout);
      console.error('Upcoming games API FAILED: ', error.message);
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
          <Fragment key={v4()}>
            {<MonthBar month={month[0]} />}
            <div className='game-box-container'>
              {month[1].map((game) => (
                <GameBox key={v4()} game={game} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default Index;
