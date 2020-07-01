import React from 'react';
import '../../../scss/components/_news-feed.scss';

const NewsItem = ({ img, title, teaser, url }) => {
  const newTitle = title.length < 71 ? title : title.slice(0, 70) + '...';
  return (
    <div className='news-item'>
      <div className='news-item-left'>
        <div className='news-item-left-img'>
          <img src={img} alt='story thumbnail' />
        </div>
      </div>
      <div className='news-item-right'>
        <div className='news-item-right-title'>
          <a href={url}>{newTitle}</a>
        </div>
        <div className='news-item-right-teaser'>{teaser}</div>
      </div>
    </div>
  );
};

export default NewsItem;
