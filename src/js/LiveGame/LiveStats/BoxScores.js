import React, { Fragment, useEffect, useState } from 'react';

const BoxScores = () => {
  const [boxData, setBoxData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  useEffect(() => {
    callAPI();
  }, []);

  const currentGameId = '0021900804'; // away game
  // const currentGameId = '0021900125'; // home game

  const callAPI = async () => {
    try {
      const response = await fetch(
        `https://data.nba.com/data/v2015/json/mobile_teams/nba/2019/scores/gamedetail/${currentGameId}_gamedetail.json`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.g.vls.ta === 'POR') {
            return data.g.vls.pstsg;
          }
          return data.g.hls.pstsg;
        });

      const activePlayers = response
        .reduce((returnArr, player) => {
          if (player.min > 0) {
            return [...returnArr, player];
          }
          return [...returnArr];
        }, [])
        .sort((a, b) => {
          return b.min - a.min;
        });

      setBoxData(activePlayers);
    } catch (err) {
      console.error(err.message);
      setAlertMessage('Stats Failed to load');
    }
  };

  return (
    <Fragment>
      <div className='stats-box-scores-card'>
        <div className='stats-box-scores-card-top-bar'>
          <span className='stats-box-scores-card-title stats-box-scores-card-player-readout'>
            players
          </span>
          <span className='stats-box-scores-card-title'>min</span>
          <span className='stats-box-scores-card-title'>fg</span>
          <span className='stats-box-scores-card-title'>3fg</span>
          <span className='stats-box-scores-card-title'>ft</span>
          <span className='stats-box-scores-card-title'>+/-</span>
          <span className='stats-box-scores-card-title'>off</span>
          <span className='stats-box-scores-card-title'>def</span>
          <span className='stats-box-scores-card-title'>reb</span>
          <span className='stats-box-scores-card-title'>ast</span>
          <span className='stats-box-scores-card-title'>stl</span>
          <span className='stats-box-scores-card-title'>blk</span>
          <span className='stats-box-scores-card-title'>to</span>
          <span className='stats-box-scores-card-title'>pf</span>
          <span className='stats-box-scores-card-title'>pts</span>
        </div>
        {alertMessage && <div className='alert-message'> {alertMessage} </div>}
        {boxData.map(
          ({
            pid,
            fn,
            ln,
            min,
            fga,
            fgm,
            tpa,
            tpm,
            fta,
            ftm,
            pm,
            oreb,
            dreb,
            reb,
            ast,
            stl,
            blk,
            tov,
            pf,
            pts,
          }) => (
            <div key={pid} className='stats-box-scores-card-stat-item'>
              <span className='stats-box-scores-card-player-readout'>
                <a
                  href={`https://www.nba.com/blazers/roster/${fn.toLowerCase()}-${ln.toLowerCase()}/${pid}`}>
                  {ln}
                </a>
              </span>
              <span className='stats-box-scores-card-title'>{min}</span>
              <span className='stats-box-scores-card-title'>
                {fgm}-{fga}
              </span>
              <span className='stats-box-scores-card-title'>
                {tpm}-{tpa}
              </span>
              <span className='stats-box-scores-card-title'>
                {fta}-{ftm}
              </span>
              <span className='stats-box-scores-card-title'>{pm}</span>
              <span className='stats-box-scores-card-title'>{oreb}</span>
              <span className='stats-box-scores-card-title'>{dreb}</span>
              <span className='stats-box-scores-card-title'>{reb}</span>
              <span className='stats-box-scores-card-title'>{ast}</span>
              <span className='stats-box-scores-card-title'>{stl}</span>
              <span className='stats-box-scores-card-title'>{blk}</span>
              <span className='stats-box-scores-card-title'>{tov}</span>
              <span className='stats-box-scores-card-title'>{pf}</span>
              <span className='stats-box-scores-card-title'>{pts}</span>
            </div>
          )
        )}
      </div>
    </Fragment>
  );
};

export default BoxScores;
