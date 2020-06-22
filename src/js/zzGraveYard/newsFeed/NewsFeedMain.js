import React from 'react';
import PropTypes from 'prop-types';
import '../../../scss/zzGraveyard/_NewsFeedMain.scss';
import '../../../scss/zzGraveyard/_NewsFeedMobileStyle.scss';

export default function NewsFeedMain(props) {
  //Function to limit char length of content. This will keep the div from becoming huge in the event of a long article.

  function capContentLength(string) {
    let displayString = '';

    if (string.length >= 500) {
      displayString = string.slice(0, 500);
      return displayString + '...';
    }
  }

  return (
    <div className='newsFeedMainContainer'>
      <h3 className='newsFeedMainHeader'>{props.newsFeedMainData.newsFeed}</h3>
      <div className='newsFeedImageMainContainer'>
        <img
          className='newsFeedMainImage'
          src='https://via.placeholder.com/1000x300'
          alt='350x150 image'></img>
      </div>
      <h5 className='newsFeedMainSubHeader'>
        {props.newsFeedMainData.subHeader}
      </h5>
      <p className='newsFeedMainContent'>
        {capContentLength(props.newsFeedMainData.content)}
      </p>
      <div className='newsFeedMainLinkContainer'>
        <a
          className='newsFeedMainLink'
          href={props.newsFeedMainData.articleLink}>
          Link for more
        </a>
      </div>
    </div>
  );
}
