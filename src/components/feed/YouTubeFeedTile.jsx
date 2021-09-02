import React, { useState } from "react";
import moment from "moment";

var YouTubeFeedTile = (props) => (
  <div className="YT-post-tile">
    <div className="tile-img">
      <img className="YT-img" src={props.postData.image}></img>
    </div>
    <div className="tile-content">
      <i className="YT-icon fab fa-youtube"></i>
      <div className="timestamp">
        {moment(props.postData.createdAt).startOf("hour").fromNow()}
      </div>
      <div className="title">
        <b className="prefix">Title:</b>
        {props.postData.title}
      </div>
      <div className="youtube-author">
        <b className="prefix">Channel:</b>
        {props.postData.author}
      </div>
      <br></br>
      <div className="youtube-body">{props.postData.body}</div>
    </div>
  </div>
);

export default YouTubeFeedTile;
