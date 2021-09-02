import React, { useState } from "react";
import moment from "moment";


var YouTubeFeedTile = (props) => {
  var desc = props.postData.description;
  if(desc.length > 250) {
    desc = desc.substring(0, 250) + '...';
  }
  return (
    <div className="YT-post-tile">
      <div className="tile-img">
        <img className="YT-img" src={props.postData.thumbnails.default.url}></img>
      </div>
      <div className="tile-content">
        <i className="YT-icon fab fa-youtube"></i>
        <div className="timestamp">
          {moment(props.postData.publishedAt).startOf("hour").fromNow()}
        </div>
        <div className="title">
          <b className="prefix">Title:</b>
          {props.postData.title}
        </div>
        <div className="youtube-author">
          <b className="prefix">Channel:</b>
          {props.postData.channelTitle}
        </div>
        <br></br>
        <div className="youtube-body">{desc}</div>
      </div>
    </div>
    );
};

export default YouTubeFeedTile;
