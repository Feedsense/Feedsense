import React, {useState, useEffect, createContext} from 'react';
import Auth from '../Auth';
import Dashboard from './Dashboard/Dashboard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

export const TwitterContext = createContext();
export const YouTubeContext = createContext();

const Analytics = (props) => {
  var logout = () => {
    Auth.logout(() => {
      props.history.push('/');
    })
  }

  const [fakeTwitterData, SetFakeTwitterData] = useState({followers: 35910})
  const [fakeYoutubeData, SetFakeYoutubeData] = useState({subscribers: 192412})

  //useeffect to fetch Twitter and YT data upon render. Use context to pass this data down to children



  return (
    <React.Fragment>
      You are now in Analytics
      <button onClick={logout}>Logout</button>

      <div className="analytics-head">
        <YouTubeContext.Provider value={fakeYoutubeData} >
        <TwitterContext.Provider value={fakeTwitterData} >
          <Sidebar />
          <Dashboard />
        </TwitterContext.Provider>
        </YouTubeContext.Provider>
      </div>
    </React.Fragment>
  )
}

export default Analytics;