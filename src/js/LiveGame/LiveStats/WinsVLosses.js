import React, { Fragment, useState, useEffect } from 'react';
import WVLChart from './WVLChart';

//API
import { ApiWinLosses } from '../../Config/API_config';

const WinsVLosses = () => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [data, setData] = useState({});
  useEffect(() => {
    callAPI();
  }, []);
  const callAPI = async () => {
    try {
      const response = await fetch(ApiWinLosses())
        .then((res) => res.json())
        .then((data) => data.sta.co[1].di[0].t[3]); //crazy string to trail blazers data.
      setData(response);
    } catch (error) {
      console.error(error.message);
      setAlertMessage('Could Not Load Data');
    }
  };
  return (
    <Fragment>
      {alertMessage && <div className='alert-message'> {alertMessage}</div>}
      {data.w ? (
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
      ) : (
        <div className='loading'> </div>
      )}
    </Fragment>
  );
};

export default WinsVLosses;
