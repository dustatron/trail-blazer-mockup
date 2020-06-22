import React from 'react';
import PropTypes from 'prop-types';
import '../css/LiveGame.css';


export default function LiveGame(props) {
  return (
    <div className="liveGameMainContainer">
      <div className="container liveGameScoreContainer">
        {/* Content for desktop view only */}
        <div className="liveGameDesktopOnly">
          <div className="row liveGameHeaderRow">
            <div className="col-xs-12 liveGameHeader">
              <h2>Game Title | Info |  Arena</h2>
            </div>
          </div>
          <div className="container liveGameTeamsContainer">
            <div className="liveGameScoreBox">
              <p>Scorebox Card</p>
              <h4>101 - 98</h4>
            </div>
            <div className="row rowPadding">
              <div className="liveGameFirstTeam col-5">
                <img src={props.gameData.firstTeamLogo} alt="first team logo"></img>
                <h2>{props.gameData.firstTeam}</h2>
              </div>
              <div className="versus col-2">
                <h1>VS</h1>
              </div>
              <div className="liveGameSecondTeam col-5">
                <img src={props.gameData.secondTeamLogo} alt="second team logo"></img>
                <h2>{props.gameData.secondTeam}</h2>
              </div>
            </div>
          </div>
          <div className="container liveGameScoreFeedContainer">
            <div className="row">
              <div className="col-12">
                <p>Score Feed</p>
              </div>
              <div className="row scoreFeedBoxes">
                <div className="col">
                  <p>Game</p>
                  <p>101 - 98</p>
                </div>
                <div className="col">
                  <p>Game</p>
                  <p>101 - 98</p>
                </div>
                <div className="col">
                  <p>Game</p>
                  <p>101 - 98</p>
                </div>
                <div className="col">
                  <p>Game</p>
                  <p>101 - 98</p>
                </div>
                <div className="col">
                  <p>Game</p>
                  <p>101 - 98</p>
                </div>
                <div className="col">
                  <p>Game</p>
                  <p>101 - 98</p>
                </div>
                <div className="col noBorderRight">
                  <p>Game</p>
                  <p>101 - 98</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        {/* Content for mobile only */}
        <div className="container liveGameMobileVideo">
          <div className="row">
            <div className="col-12">
              <h3>Video Highlights</h3>
              <h1>Video</h1>
            </div>
          </div>
        </div>
        <div className="container liveGameMobileContent">
          <div className="row">
            <div className="col-12">
              <h3>Header Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
}
