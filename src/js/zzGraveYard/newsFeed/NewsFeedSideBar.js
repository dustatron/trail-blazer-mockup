import React from 'react';
import PropTypes from 'prop-types';
import '../../../scss/zzGraveyard/_NewsFeedSideBar.scss';
import '../../../scss/zzGraveyard/_NewsFeedMobileStyle.scss';

export default function NewsFeedSideBar(props) {
  //write function to cut off text at certain char limit. This way it won't overflow and break div

  function capContentLengthSideBar(string) {
    let displayString = '';

    if (string.length >= 150) {
      displayString = string.slice(0, 150);
      return displayString + '...';
    }
  }

  return (
    <div className='newsFeedSideBarArticle'>
      <h1 className='newsFeedSideBarHeader'>
        {props.newsFeedbackSideBarData.newsFeed}
      </h1>
      <div className='newsFeedSideBarImageContainer'>
        <img
          className='newsFeedSideBarImage'
          src='https://via.placeholder.com/300x175'
          alt='350x175 image'></img>
      </div>
      <p className='newsFeedSideBarContent'>
        {capContentLengthSideBar(props.newsFeedbackSideBarData.content)}
      </p>
    </div>
  );
}

NewsFeedSideBar.propTypes = {
  newsFeedbackSideBarData: PropTypes.object,
};
