import React, { useState } from 'react';
import moment from 'moment';


var TwitterFeedTile = (props) => {

  return (
    <div className="post-tile">
      <img src="" className="post-img"></img>
      <div className="timestamp">{props.postData.createdAt}</div>
      <div className="twitter-author">{props.postData.author}</div>
      <div className="twitter-body">{props.postData.body}</div>
      <div className="twitter-media">{props.postData.media}</div>
    </div>
  );
};

export default TwitterFeedTile;