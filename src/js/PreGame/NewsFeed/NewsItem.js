import React from 'react';
import '../../../scss/components/_news-feed.scss';

const NewsItem = ({ img, title, teaser, url }) => {
  return (
    <div className='news-item'>
      <div className='news-item-left'>
        <div className='news-item-left-img'>
          <img src={img} alt='story thumbnail' />
        </div>
      </div>
      <div className='news-item-right'>
        <div className='news-item-right-title'>
          <a href={url}>{title}</a>
        </div>
        <div className='news-item-right-teaser'>{teaser}</div>
      </div>
    </div>
  );
};

export default NewsItem;
