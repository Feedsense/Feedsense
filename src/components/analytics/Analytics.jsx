import React, { useState, useEffect, createContext } from 'react';
import ProtectedRoute from '../ProtectedRoute.jsx';
import config from '../../../env/config.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import TwitterDashboard from './TwitterDashboard/TwitterDashboard.jsx';
import YoutubeDashboard from './YouTubeDashboard/YoutubeDashboard.jsx';
import axios from 'axios';
import Header from '../Header.jsx'
import FakeYouTubeData from './FakeYoutubeData.js';

export const TwitterContext = React.createContext();
export const YouTubeContext = React.createContext();

const Analytics = ({ setIsGoogleSignedIn }) => {

  // const history = useHistory();

  // const {signIn} = useGoogleLogin({
  //   onSuccess: (res) => {
  //     console.log(res)
  //   },
  //   clientId: config.clientId,
  //   isSignedIn: true,
  //   onFailure: (err) => console.log(err),
  // });

  var logout = () => {
    Auth.logout(() => {
      history.push('/');
    })
  };

  //FAKE DATA START ---------------------------------------------------
  const [fakeTwitterData, SetFakeTwitterData] = useState({
    followers: 351910,
    totalImpresssions: 28230834,
    engagementRate: 0.035,
    totalTweets: 3286
  });
  const [fakeYouTubeData, SetFakeYouTubeData] = useState(FakeYouTubeData);
  //FAKE DATA END ---------------------------------------------------

  const [youtubeData, SetYoutubeData] = useState({})
  const [youtubeDataReady, SetYoutubeDataReady] = useState(false)

  var youtubeTempData = {}

  useEffect(() => {
    if (localStorage.access_token) {

      let todayDate = new Date().toISOString().slice(0, 10);

      const promise1 = axios.get(`/getYoutubeAnalytics/${localStorage.access_token}/${todayDate}`)
        .then((response) => {
          youtubeTempData.analyticsData = response.data;
        })
        .catch((err) => {
          console.error(err);
        })

      const promise2 = axios.get(`/getYoutubeChannelAnalytics/${localStorage.access_token}/${todayDate}`)
      .then((response) => {
        youtubeTempData.channelAnalytics = response.data;
      })
      .catch((err) => {
        console.error(err);
      })

      const promise3 = axios.get(`/getYoutubeChannelTotalsAndVideos/${localStorage.access_token}/${todayDate}`)
      .then((response) => {
        youtubeTempData.channelTotalsandVideos = response.data
      })
      .catch((err) => {
        console.error(err);
      })

      Promise.all([promise1, promise2, promise3])
      .then(() => {
        return SetYoutubeData(youtubeTempData)
      })
      .then(() => renderNow())
    }
  }, [])

  const renderNow = () => {
    console.log('YOUTUBE DATA', youtubeTempData)
    SetYoutubeDataReady(true)
  }

  return (
    <React.Fragment>
      <Header setIsGoogleSignedIn={setIsGoogleSignedIn} />
      <div className="analytics-head">
        {youtubeDataReady && <YouTubeContext.Provider value={youtubeData} >
        <TwitterContext.Provider value={fakeTwitterData} >
          <Router>
            <Sidebar />
            <Switch>
              <ProtectedRoute exact path="/Analytics/Analytics/dashboard" component={Dashboard}/>
              <ProtectedRoute exact path="/Analytics/Analytics/twitter" component={TwitterDashboard}/>
              <ProtectedRoute exact path="/Analytics/Analytics/youtube" component={YoutubeDashboard} />
            </Switch>
          </Router>
        </TwitterContext.Provider>
        </YouTubeContext.Provider>}
      </div>
    </React.Fragment>
  )
}

export default Analytics;