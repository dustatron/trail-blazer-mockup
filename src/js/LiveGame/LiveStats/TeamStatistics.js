import React, { Fragment, useEffect, useState } from 'react';

const TeamStatistics = () => {
  const [statData, setStatData] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    const response = await fetch(
      'https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/teams/statistics/trail_blazers/teamstats_02.json'
    )
      .then((response) => response.json())
      .then((data) => data.sta);
    const { pts, fgp, ftp, tpp, reb, ast, blk, stl, tov, pf } = response;
    setStatData([
      { ...pts, title: 'PTS' },
      { ...fgp, title: 'FG%' },
      { ...tpp, title: '3P%' },
      { ...ftp, title: 'FT%' },
      { ...reb, title: 'REB' },
      { ...ast, title: 'AST' },
      { ...blk, title: 'BLK' },
      { ...stl, title: 'STL' },
      { ...tov, title: 'TOV' },
      { ...pf, title: 'PF' },
    ]);
  };

  return (
    <Fragment>
      {statData.length > 1 && (
        <div className='stats-team-statistics-box'>
          {statData.map((stat) => (
            <div className='stats-team-statistics-item'>
              <div className='stats-team-statistics-item-left'>
                <span className='stats-team-statistics-item-left-title'>
                  {stat.title}:
                </span>
                <span className='stats-team-statistics-item-left-number'>
                  {stat.lr}th
                </span>
                <span className='stats-team-statistics-item-left-overall'>
                  Overall
                </span>
              </div>
              <div className='stats-team-statistics-item-right'>
                {stat.val < 1
                  ? (stat.val * 100).toFixed(1) + '%'
                  : stat.val.toFixed(1)}
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default TeamStatistics;
