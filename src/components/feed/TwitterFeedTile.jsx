import React from 'react';
import moment from 'moment';

var TwitterFeedTile = (props) => {
  return (
    <div className="TW-post-tile">
      <i className="TW-icon fab fa-twitter"></i>
      <div className="timestamp">{moment(props.postData.createdAt).startOf('hour').fromNow()}</div>
      <div className="twitter-author"><b>@{props.postData.author}</b></div>
      <br></br>
      <div className="twitter-body">{props.postData.body}</div>
      <div className="twitter-media">{props.postData.media}</div>
    </div>
  );
};

export default TwitterFeedTile;