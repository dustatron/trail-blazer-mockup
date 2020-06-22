import React from 'react';
import '../../scss/_keyPlayersStats.scss';
import testJsonObject from './test_json_object';

function KeyPlayersStats() {
  const roster = testJsonObject;
  const playerOne = roster[4];
  const playerTwo = roster[0];
  const bigPlayers = [playerOne, playerTwo];
  const playerThree = roster[1];
  const playerFour = roster[9];
  const playerFive = roster[6];
  const miniPlayers = [playerThree, playerFour, playerFive];

  console.log('roster= ', roster);

  // link for full body image
  // https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${player.id}.png

  //link for head shot
  // http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/${player.id}.png

  return (
    <div className='kpsWrapper '>
      <h1 className='kpsTitle'>Key Players Stats - Home</h1>
      <div className='cardRow'>
        {bigPlayers.map((playerOne, index) => (
          <div className='kpsComponent'>
            <div className='playerCard'>
              <div className='playerInfo '>
                <p className='playerNumber'>{playerOne.number}</p>
                <p className='firstName'>{playerOne.firstName}</p>
                <p className='lastName'>{playerOne.lastName}</p>
                <div className='playerStats'>
                  <p className='statsTitle'>Key Stats</p>
                  <p>Points Per Game: {playerOne.pointsPerGame}</p>
                  <p>Rebounds Per Game: {playerOne.reboundsPerGame}</p>
                  <p>Assits Per Game: {playerOne.assistsPerGame}</p>
                  <p>Field Goal: {playerOne.fieldGoalPercent}</p>
                </div>
              </div>
              <div className='imageWrapper '>
                <img
                  className='playerPic'
                  src={`https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${playerOne.id}.png`}
                />
              </div>
            </div>
            <div className='miniRow'>
              {miniPlayers.map((miniPlayer, index) => (
                <div className='miniPlayerCard'>
                  <div className='miniPlayerStats'>
                    <p className='miniNumber'>{miniPlayer.number}</p>
                    <div className='miniNames'>
                      <p>{miniPlayer.firstName}</p>
                      <p className='miniLast'>{miniPlayer.lastName}</p>
                    </div>
                  </div>
                  <div className='miniPicWrapper'>
                    <img
                      className='miniPlayerPic'
                      src={`http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/${miniPlayer.id}.png`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default KeyPlayersStats;
