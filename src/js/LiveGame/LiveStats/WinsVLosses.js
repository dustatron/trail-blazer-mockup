import React, { Fragment, useState, useEffect } from 'react';

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
            <div>{data.w} Wins</div>
            <div>{data.l} Losses</div>
          </div>
          <div> Home : {data.hr}</div>
          <div> Away : {data.ar}</div>
          <div> West : {data.cr}</div>
          <div> East : {data.dr}</div>
        </div>
      )}
    </Fragment>
  );
};

export default WinsVLosses;
