import React, { Fragment } from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import TeamLeaders from './TeamLeaders';
import TeamStatistics from './TeamStatistics';
import WinsVLosses from './WinsVLosses';
import BoxScores from './BoxScores';

import '../../../scss/components/_live-stats.scss';

///// Live Stats \\\\\\
const Index = () => {
  return (
    <Fragment>
      <HeaderBarTemplate title={'live stats'} showLinks={true} />
      <div className='stats'>
        <div className='stats-box-scores'>
          <div className='stats-box-scores-title'>Box Scores</div>
          <BoxScores />
        </div>
        {/* End Box Scores   */}
        <div className='stats-team'>
          <div className='stats-team-statistics'>
            <div className='stats-team-title'>Team Statistics</div>
            <div className='stats-team-sub-title'>2019-20 Regular season</div>
            <TeamStatistics />
            <div className='end-title'>View Full Team Stats</div>
          </div>
          <div className='stats-team-leaders'>
            <div className='stats-team-title'>TEAM LEADERS</div>
            <div className='stats-team-sub-title'>2019-20 Regular season</div>
            <TeamLeaders />
            <div className='end-title'>View Full Team Leaders Stats</div>
          </div>
          <div className='stats-team-win-n-lose'>
            <div className='stats-team-title'>Wins VS Losses</div>
            <div className='stats-team-sub-title'>2019-20 Regular season</div>
            <WinsVLosses />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
