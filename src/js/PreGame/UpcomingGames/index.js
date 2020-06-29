import React, { Fragment, useState, useEffect } from 'react';
// Components
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import GameBox from './GameBox';
import MonthBar from './MonthBar';
import { v4 } from 'uuid';
import fetchJsonp from 'fetch-jsonp';
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

      const priceData = await fetchJsonp(
        'https://buyblazertickets.com/includes/jsonp.php'
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => data.blazers);

      // Sort Data by month
      // Add keys to objects that are human readable
      // Removes games where Portland is the visiting team.
      /*

        gameId,
        team name / short,
        team name with city,
        day, month, day number,
        Game time,
        price,
        ticket link,
        hot,
        value,
        sold,
      */
      const SortedResponse = priceData.games.reduce((obj, game) => {
        const {
          gameNumber,
          schedSort,
          schedDay,
          schedDate,
          schedTime,
          monthClass,
          priceLow,
          priceMid,
          priceHigh,
          sold,
          opponentShort,
          opponent,
          giveaway,
          value,
          hot,
          url,
          dateTbd,
        } = game;

        const pruned = {
          gameId: schedSort,
          gameCode: gameNumber,
          wholeDate: schedDate,
          dayNumber: schedDate.split(' ')[1].substr(0, 2),
          day: schedDay,
          time: schedTime,
          month: monthClass,
          price: [priceLow, priceMid, priceHigh],
          sold: sold,
          nameShort: opponentShort,
          nameLong: opponent,
          value,
          hot,
          giveaway,
          link: url,
          dateIsTBD: dateTbd,
        };

        const currentMonth = schedDate.split(' ')[0];

        const newObj = {
          ...obj,
          [currentMonth]: obj[currentMonth]
            ? [...obj[currentMonth], pruned]
            : [pruned],
        };
        return newObj;
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
