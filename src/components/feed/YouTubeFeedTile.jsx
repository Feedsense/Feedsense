import React, { useState } from "react";
import moment from "moment";

var YouTubeFeedTile = (props) => {
  var desc = props.postData.snippet.description;
  if (desc.length > 250) {
    desc = desc.substring(0, 50) + "...";
  }
  var videoUrl = `https://www.youtube.com/watch?v=${props.postData.id}`;
  return (
    <div className="YT-post-tile">
      <i className="YT-icon fab fa-youtube"></i>
      <div className="timestamp">
        {moment(props.postData.snippet.publishedAt).startOf("hour").fromNow()}
      </div>
      <div className="tile-img">
        <a href={videoUrl}>
          <img
            className="YT-img"
            src={props.postData.snippet.thumbnails.default.url}
          ></img>
        </a>
      </div>
      <div className="tile-content">
        <div className="title">
          <div className="prefix">
            <b>Title:</b>
          </div>
          {props.postData.snippet.title}
        </div>
        <div className="youtube-author">
          <div className="prefix">
            <b>Channel:</b>
          </div>
          {props.postData.snippet.channelTitle}
        </div>
        <br></br>
        <div className="youtube-body">
          <b>Description:</b>
        </div>
        <div className="youtube-body">{desc}</div>
      </div>
    </div>
  );
};

export default YouTubeFeedTile;
