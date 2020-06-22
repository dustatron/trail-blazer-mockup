import React from 'react';
import PropTypes from 'prop-types';
import '../css/PostGame.css';


export default function PostGame(props) {
  return (
    <div className="postGameMainContainer">
      <div className="container postGameScoreContainer">
        {/* Content for desktop view only */}
        <div className="postGameDesktopOnly">
          <div className="row postGameHeaderRow">
            <div className="col-12 postGameHeader">
              <h2>Game Title | Info |  Arena</h2>
            </div>
          </div>
          <div className="row finalRow">
            <div className="col-12 final">
              <h5>Final</h5>
            </div>
          </div>
          <div className="container postGameTeamsContainer">
            <div className="row postGameRowPadding">
              <div className="postGameFirstTeam col-5">
                <img src={props.gameData.firstTeamLogo} alt="first team logo"></img>
                <h2>{props.gameData.firstTeam}</h2>
              </div>
              <div className="versus col-2">
                <h1>VS</h1>
              </div>
              <div className="postGameSecondTeam col-5">
                <img src={props.gameData.secondTeamLogo} alt="second team logo"></img>
                <h2>{props.gameData.secondTeam}</h2>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        {/* Content for mobile view only */}
        <div className="container postGameMobileVideo">
          <div className="row">
            <div className="col-12">
              <h3>Video Highlights</h3>
              <h1>Video</h1>
            </div>
          </div>
        </div>
        {/* end */}
        <div>
          <div className="col-12 quarters">
            <h3>Q1 - Q2 - Q3 - Q4</h3>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
