import React, { Fragment, useState, useEffect } from 'react';
import WVLChart from './WVLChart';

const WinsVLosses = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    callAPI();
  }, []);
  const callAPI = async () => {
    const response = await fetch(
      'https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/00_standings.json'
    )
      .then((res) => res.json())
      .then((data) => data.sta.co[1].di[0].t[3]); //crazy string to trail blazers data.
    setData(response);
  };
  return (
    <Fragment>
      {data.w && (
        <div className='stats-team-win-n-lose-box'>
          <div className='stats-team-win-n-lose-box-top'>
            <div>
              {data.w}
              <span>Wins</span>
            </div>
            <div>
              {data.l}
              <span>Losses</span>
            </div>
          </div>
          <div className='stats-team-win-n-lose-box-bottom'>
            <div className='stats-team-win-n-lose-box-bottom-item'>
              <div className='stats-team-win-n-lose-box-bottom-item-title'>
                HOME
              </div>
              <WVLChart stat={data.hr} />
            </div>
            <div className='stats-team-win-n-lose-box-bottom-item'>
              <div className='stats-team-win-n-lose-box-bottom-item-title'>
                Away
              </div>
              <WVLChart stat={data.ar} />
            </div>
            <div className='stats-team-win-n-lose-box-bottom-item'>
              <div className='stats-team-win-n-lose-box-bottom-item-title'>
                West
              </div>
              <WVLChart stat={data.cr} />
            </div>
            <div className='stats-team-win-n-lose-box-bottom-item'>
              <div className='stats-team-win-n-lose-box-bottom-item-title'>
                East
              </div>
              <WVLChart stat={data.dr} />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default WinsVLosses;
