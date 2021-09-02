import React, { useState, useEffect, createContext } from 'react';
import ProtectedRoute from '../ProtectedRoute.jsx';
import config from '../../../env/config.js';
import Auth from '../Auth.js';
import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import TwitterDashboard from './TwitterDashboard/TwitterDashboard.jsx';
import YoutubeDashboard from './YouTubeDashboard/YoutubeDashboard.jsx';
import axios from 'axios';

export const TwitterContext = React.createContext();
export const YouTubeContext = React.createContext();

const Analytics = ({ setIsGoogleSignedIn }) => {

  const [youtubeAnalyticsData, setYoutubeAnalyticsData] = useState([]);
  const [youtubeChannelAnalyticsData, setYoutubeChannelAnalyticsData] = useState([]);
  const [youtubeChannelTotalsAndVideos, setYoutubeChannelTotalsAndVideos] = useState({});

  const history = useHistory();

  const {signIn} = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res)
    },
    clientId: config.clientId,
    isSignedIn: true,
    onFailure: (err) => console.log(err),
  });

  var logout = () => {
    Auth.logout(() => {
      history.push('/');
    })
  };

  const [fakeTwitterData, SetFakeTwitterData] = useState({
    followers: 35910,
    totalImpresssions: 1823834,
    engagementRate: 0.035,
    totalTweets: 1286
  });
  
  const [fakeYoutubeData, SetFakeYoutubeData] = useState({
    subscribers: 192412,
    totalViews: 3902172,
    engagementRate: 0.013,
    totalVideos: 326
  });

  useEffect(() => {
    signIn()

    if (localStorage.access_token) {

      let todayDate = new Date().toISOString().slice(0, 10);

      axios.get(`/getYoutubeAnalytics/${localStorage.access_token}/${todayDate}`)
        .then((response) => {
          console.log(response)
          setYoutubeAnalyticsData(response.data);
        })
        .catch((err) => {
          console.error(err);
        })

        axios.get(`/getYoutubeChannelAnalytics/${localStorage.access_token}/${todayDate}`)
        .then((response) => {
          console.log(response)
          setYoutubeChannelAnalyticsData(response.data);
        })
        .catch((err) => {
          console.error(err);
        })

        axios.get(`/getYoutubeChannelTotalsAndVideos/${localStorage.access_token}/${todayDate}`)
        .then((response) => {
          console.log(response)
          setYoutubeChannelTotalsAndVideos(response.data);
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }, [])

  return (
    <React.Fragment>

      <a className='logout-btn' onClick={() => {
        setIsGoogleSignedIn(false);
        const auth2 = window.gapi.auth2.getAuthInstance()
        if (auth2 != null) {
          auth2.signOut().then(
            auth2.disconnect()
          ).then(localStorage.clear())
            .then(logout())
        }
      }
      }>logout</a>

      <div className="analytics-head">
        <YouTubeContext.Provider value={fakeYoutubeData} >
        <TwitterContext.Provider value={fakeTwitterData} >
          <Router>
            <Sidebar />
            <Switch>
              <ProtectedRoute exact path="/Analytics/Analytics/dashboard" component={Dashboard}/>
              <ProtectedRoute exact path="/Analytics/Analytics/twitter" component={TwitterDashboard}/>
              <ProtectedRoute exact path="/Analytics/Analytics/youtube" component={YoutubeDashboard}/>
            </Switch>
          </Router>
        </TwitterContext.Provider>
        </YouTubeContext.Provider>
      </div>

    </React.Fragment>
  )
}

export default Analytics;