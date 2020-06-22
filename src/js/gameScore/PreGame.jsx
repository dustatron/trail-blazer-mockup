import React from 'react';
import PropTypes from 'prop-types';
import '../css/PreGame.css';


export default function PreGame(props) {
  return (
    <div className="preGameMainContainer">
      <div className="container preGameScoreContainer">
        <div className="row preGameHeaderRow">
          <div className="col-8 preGameHeader">
            <h2>Game Title | Info |  Arena</h2>
          </div>
          <div className="col-4">
            <button>Add to Calendar</button>
            <button>Download PDF</button>
          </div>
        </div>
        <div className="container preGameContainer">
          <div className="row">
            <div className="col-6 col-12">
              <h3>Header Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              {/* Header for mobile only */}
              <h4 className="preGameMobileHeader">Game Hero Name</h4>
              {/* end */}
              <button>See Tickets</button>
            </div>
          </div>
        </div>
        <div className="container gamePreviewContainer">
          <div className="row">
            <div className="videoPreview col-8">
              <h1>Video</h1>
            </div>
            <div className="contentBoxRight col-4">
              <h3>Game Preview</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="preGameContent col-12">
              <h3>Header Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

