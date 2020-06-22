import React from 'react';

import testJsonObject from './test_json_object.js';
import '../../../scss/zzGraveyard/_NewsFeedControl.scss';

//Components

import NewsFeedMain from './NewsFeedMain';
import NewsFeedSideBar from './NewsFeedSideBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterNewsList: testJsonObject,
      newsFeedMainData: testJsonObject[0],
      newsFeedbackSideBarData: [testJsonObject[1], testJsonObject[2]],
    };
  }

  //insert div to put newsFeedback sidebar components inside so they stack correctly

  render() {
    return (
      <div className='App'>
        <div className='Container'>
          <NewsFeedMain newsFeedMainData={this.state.newsFeedMainData} />
          <div className='newsFeedSidebarContainer'>
            <NewsFeedSideBar
              newsFeedbackSideBarData={this.state.newsFeedbackSideBarData[0]}
            />
            <NewsFeedSideBar
              newsFeedbackSideBarData={this.state.newsFeedbackSideBarData[1]}
            />
            <NewsFeedSideBar
              newsFeedbackSideBarData={this.state.newsFeedbackSideBarData[1]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
