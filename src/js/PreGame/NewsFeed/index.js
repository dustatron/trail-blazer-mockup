import React, { useState, useEffect, Fragment } from 'react';
import NewsItem from './NewsItem';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';
import '../../../scss/components/_news-feed.scss';

//API
import { ApiNewsFeed } from '../../Config/API_config';

///////  NEWS FEED INDEX //////
const Index = () => {
  const [feedData, setFeed] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  // Alert Message presented to the user when api Fails to load.
  const alertReadout = 'News feed failed to load. Enable Cores';

  const callApi = async () => {
    try {
      const response = await fetch(ApiNewsFeed())
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
    <Fragment>
      <HeaderBarTemplate title={'news feed'} />
      <div className='news-feed'>
        {alertMessage && <div className='alert-message'> {alertMessage} </div>}
        {feedData.length > 0 || alertMessage ? (
          feedData.map(({ nid, url, title, teaser, thumbnail }, i) => (
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
          ))
        ) : (
          <div className='loading'> </div>
        )}
      </div>
    </Fragment>
  );
};

export default Index;
