import React, { Fragment, useEffect, useState } from 'react';

// API
import { ApiTeamLeaders } from '../../Config/API_config';

const TeamLeaders = () => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [leadersData, setLeadersData] = useState({
    pts: null,
    ast: null,
    reb: null,
    blk: null,
  });
  const { pts, ast, reb, blk } = leadersData;

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    try {
      const response = await fetch(ApiTeamLeaders())
        .then((response) => response.json())
        .then((data) => data.tle);
      const { pts, ast, reb, blk } = response;
      setLeadersData({ pts, ast, reb, blk });
    } catch (error) {
      console.error(error.message);
      setAlertMessage('Could not load data');
    }
  };
  return (
    <Fragment>
      {alertMessage && <div className='alert-message'> {alertMessage}</div>}
      {leadersData.pts !== null && (
        <div className='stats-team-leaders-box'>
          <div className='stats-team-leaders-list-item'>
            <div className='stats-team-leaders-list-item-row'>
              <div className='stats-team-leaders-list-item-left'>
                <div className='stats-team-leaders-list-item-left-title'>
                  Points Per Game
                </div>
                <div className='stats-team-leaders-list-item-left-name'>
                  {pts.fn + ' ' + pts.ln}
                </div>
              </div>
              <div className='stats-team-leaders-list-item-right'>
                {pts.val}
              </div>
            </div>
          </div>
          <div className='stats-team-leaders-list-item'>
            <div className='stats-team-leaders-list-item-row'>
              <div className='stats-team-leaders-list-item-left'>
                <div className='stats-team-leaders-list-item-left-title'>
                  Rebounds Per Game
                </div>
                <div className='stats-team-leaders-list-item-left-name'>
                  {reb.fn + ' ' + reb.ln}
                </div>
              </div>
              <div className='stats-team-leaders-list-item-right'>
                {reb.val}
              </div>
            </div>
          </div>
          <div className='stats-team-leaders-list-item'>
            <div className='stats-team-leaders-list-item-row'>
              <div className='stats-team-leaders-list-item-left'>
                <div className='stats-team-leaders-list-item-left-title'>
                  Assists Per Game
                </div>
                <div className='stats-team-leaders-list-item-left-name'>
                  {ast.fn + ' ' + ast.ln}
                </div>
              </div>
              <div className='stats-team-leaders-list-item-right'>
                {ast.val}
              </div>
            </div>
          </div>
          <div className='stats-team-leaders-list-item'>
            <div className='stats-team-leaders-list-item-row'>
              <div className='stats-team-leaders-list-item-left'>
                <div className='stats-team-leaders-list-item-left-title'>
                  Blocks Per Game
                </div>
                <div className='stats-team-leaders-list-item-left-name'>
                  {blk.fn + ' ' + blk.ln}
                </div>
              </div>
              <div className='stats-team-leaders-list-item-right'>
                {blk.val}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default TeamLeaders;
