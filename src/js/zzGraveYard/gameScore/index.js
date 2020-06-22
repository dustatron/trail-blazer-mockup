import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Test data object

import testJsonObject from './test_json_object';
import '../../../scss/zzGraveyard/_game-score.scss';

//Components
import Nav from './Nav';
import Ad from './Ad';
import PreGameOld from './PreGameOld';
import LiveGame from './LiveGame';
import PostGame from './PostGame';

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterGameDetailList: testJsonObject,
      gameData: testJsonObject[0],
    };
  }

  render() {
    return (
      <div className='index'>
        <div className='Container'>
          <Nav />
          <Ad />
          <br></br>
          <Switch>
            <Route exact path='/game-score/' component={PreGameOld} />
            <Route
              exact
              path='game-score/livegame'
              render={() => <LiveGame gameData={this.state.gameData} />}
            />
            <Route
              exact
              path='game-score/postgame'
              render={() => <PostGame gameData={this.state.gameData} />}
            />
          </Switch>
          <br></br>
        </div>
      </div>
    );
  }
}

export default index;
