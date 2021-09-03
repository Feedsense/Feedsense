import React, { useState, useEffect } from "react";
import config from "../../../env/config.js";
import Auth from "../Auth.js";
import { Switch, Link } from "react-router-dom";
import feedExampleData from "./feed-example-data.js";
import TwitterFeedTile from "./TwitterFeedTile.jsx";
import YouTubeFeedTile from "./YouTubeFeedTile.jsx";
import "../../feedStyle.css";
import { useHistory } from "react-router-dom";
import { useGoogleLogin } from "react-google-login";
import "../../style.css";
import Modal from "../modals/Modal.jsx";
import ModalViewer from "../modals/useModal.jsx";
import axios from "axios";

var Feed = ({ setIsGoogleSignedIn }) => {
  const { isShowing, toggle } = ModalViewer();

  const [exampleData, setExampleData] = useState(feedExampleData);
  const [socialMediaData, setSocialMediaData] = useState([]);

  const history = useHistory();

  const { signIn } = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res);
    },
    clientId: config.clientId,
    isSignedIn: true,
    onFailure: (err) => console.log(err),
  });

  var logout = () => {
    Auth.logout(() => {
      history.push("/");
    });
  };

  useEffect(() => {
    signIn();
    setIsGoogleSignedIn(true);

    if (localStorage.access_token) {
      axios
        .get(`/getYoutube/${localStorage.access_token}`)
        .then((data) => {
          setSocialMediaData(data.data);
        })
        .catch((err) => {
          console.error("ERROR RETRIEVING DATA: ", err.stack);
        });
    }
  }, []);

  var sortedSocialmedia = [];

  if (socialMediaData.length > 0) {
    for (var i = 0; i < socialMediaData.length; i++) {
      if (sortedSocialmedia.length === 0) {
        sortedSocialmedia.push(socialMediaData[i]);
      } else {
        for (var j = 0; j < sortedSocialmedia.length; j++) {
          if (
            socialMediaData[i].snippet.publishedAt >
            sortedSocialmedia[j].snippet.publishedAt
          ) {
            sortedSocialmedia.splice(j, 0, socialMediaData[i]);
            break;
          }
          if (j === sortedSocialmedia.length - 1) {
            sortedSocialmedia.push(socialMediaData[i]);
            break;
          }
        }
      }
    }
  }

  var sortedSocialmedia2D = [];
  var arr = [];

  for (var i = 0; i < sortedSocialmedia.length; i++) {
    if (arr.length === 5) {
      sortedSocialmedia2D.push(arr);
      arr = [];
    } else {
      arr.push(sortedSocialmedia[i]);
    }
  }
  console.log(sortedSocialmedia2D);

  return (
    <div>
      <div className="header">
        <div>
          <h1>Feedsense</h1>
        </div>
        <div className="navButtonContainer">
          <Link to="/Analytics/Analytics/dashboard">Analytics</Link>
          <button onClick={toggle}>Post a Video</button>
          <Modal isShowing={isShowing} hide={toggle} />
          <a
            className="logout-btn"
            onClick={() => {
              setIsGoogleSignedIn(false);
              const auth2 = window.gapi.auth2.getAuthInstance();
              if (auth2 != null) {
                auth2.signOut().then(auth2.disconnect());
              }
              localStorage.clear();
              logout();
            }}
          >
            logout
          </a>
        </div>
      </div>

      <div className="tile-container">
        {sortedSocialmedia2D.map((post, index) => {
          if (index === 0) {
            return (
              <div className="tile-group">
                <YouTubeFeedTile postData={post[0]} />
                <YouTubeFeedTile  postData={post[1]} />
                <YouTubeFeedTile  postData={post[2]} />
                <YouTubeFeedTile  postData={post[3]} />
                <YouTubeFeedTile postData={post[4]} />
              </div>
            );
          }
          if (index === 1) {
            return (
              <div className="tile-group">
                <YouTubeFeedTile  postData={post[0]} />
                <YouTubeFeedTile  postData={post[1]} />
                <YouTubeFeedTile  postData={post[2]} />
                <YouTubeFeedTile  postData={post[3]} />
                <YouTubeFeedTile  postData={post[4]} />
              </div>
            );
          }
          if (index === 2) {
            return (
              <div className="tile-group">
                <YouTubeFeedTile postData={post[0]} />
                <YouTubeFeedTile postData={post[1]} />
                <YouTubeFeedTile postData={post[2]} />
                <YouTubeFeedTile postData={post[3]} />
                <YouTubeFeedTile postData={post[4]} />
              </div>
            );
          }
          if (index === 3) {
            return (
              <div className="tile-group">
                <YouTubeFeedTile postData={post[0]} />
                <YouTubeFeedTile postData={post[1]} />
                <YouTubeFeedTile postData={post[2]} />
                <YouTubeFeedTile postData={post[3]} />
                <YouTubeFeedTile postData={post[4]} />
              </div>
            );
          }
          if (index === 4) {
            return (
              <div className="tile-group">
                <YouTubeFeedTile postData={post[0]} />
                <YouTubeFeedTile postData={post[1]} />
                <YouTubeFeedTile postData={post[2]} />
                <YouTubeFeedTile postData={post[3]} />
                <YouTubeFeedTile postData={post[4]} />
              </div>
            );
          }
          if (index === 5) {
            return (
              <div className="tile-group">
                <YouTubeFeedTile postData={post[0]} />
                <YouTubeFeedTile postData={post[1]} />
                <YouTubeFeedTile postData={post[2]} />
                <YouTubeFeedTile postData={post[3]} />
                <YouTubeFeedTile postData={post[4]} />
              </div>
            );
          }
          if (index === 6) {
            return (
              <div className="tile-group">
                <YouTubeFeedTile postData={post[0]} />
                <YouTubeFeedTile postData={post[1]} />
                <YouTubeFeedTile postData={post[2]} />
                <YouTubeFeedTile postData={post[3]} />
                <YouTubeFeedTile postData={post[4]} />
              </div>
            );
          }
          if (index === 7) {
            return (
              <div className="tile-group">
                <YouTubeFeedTile postData={post[0]} />
                <YouTubeFeedTile postData={post[1]} />
                <YouTubeFeedTile postData={post[2]} />
                <YouTubeFeedTile postData={post[3]} />
                <YouTubeFeedTile postData={post[4]} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Feed;
