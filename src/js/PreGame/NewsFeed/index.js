import React, { useState, useEffect, Fragment } from 'react';
import NewsItem from './NewsItem';
import pageheaderbar from '../../../media/pageheaderbar.png';
import '../../../scss/components/_news-feed.scss';

///////  NEWS FEED INDEX //////
const Index = () => {
  const [feedData, setFeed] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const alertReadout = 'News feed failed to load. Enable Cores';

  const callApi = async () => {
    try {
      const response = await fetch('https://www.nba.com/blazers/api/1.1/json')
        .then((response) => response.json())
        .then((data) => data.content);
      setFeed(response);
    } catch (error) {
      setAlertMessage(alertReadout);
      console.error('News Feed API FAILED: ', error.message);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className='news-feed'>
      <div className='news-feed-header'>
        <div className='news-feed-header-title'>
          <h1>News Feed</h1>
        </div>
        <img className='news-feed-header-bar' src={pageheaderbar} alt='' />
      </div>
      {alertMessage && (
        <div className='news-feed-alert-message'> {alertMessage} </div>
      )}
      {feedData.map(({ nid, url, title, teaser, thumbnail }, i) => (
        <Fragment>
          {i < 4 && (
            <NewsItem
              key={nid}
              img={thumbnail}
              title={title}
              url={url}
              teaser={teaser}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Index;
