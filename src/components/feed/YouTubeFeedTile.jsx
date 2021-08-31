import React, { useState } from 'react';


var YouTubeFeedTile = (props) => {

  return (
    <div className="post-tile">
      <img src="" className="post-img"></img>
      <div className="timestamp">{props.postData.createdAt}</div>
      <div className="title">{props.postData.title}</div>
      <div className="youtube-author">{props.postData.author}</div>
      <div className="youtube-body">{props.postData.body}</div>
      <div className="youtube-media">{props.postData.video}</div>
    </div>
  );
};

export default YouTubeFeedTile;