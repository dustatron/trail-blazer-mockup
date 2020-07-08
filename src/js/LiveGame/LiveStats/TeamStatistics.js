import React, { Fragment, useEffect, useState } from 'react';
import { v4 } from 'uuid';
// API
import { ApiTeamStats } from '../../Config/API_config';

const TeamStatistics = () => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [statData, setStatData] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    try {
      const response = await fetch(ApiTeamStats())
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
    } catch (error) {
      console.error(error.message);
      setAlertMessage('Could not load data');
    }
  };

  return (
    <Fragment>
      {alertMessage && <div className='alert-message'> {alertMessage}</div>}
      {statData.length > 1 && (
        <div className='stats-team-statistics-box'>
          {statData.map((stat) => (
            <div key={v4()} className='stats-team-statistics-item'>
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
