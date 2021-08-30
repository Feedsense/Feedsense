import React, {useState, useEffect, useContext} from 'react';
import Auth from '../Auth';
import Dashboard from './Dashboard/Dashboard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

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
        <Sidebar />
        <Dashboard />
      </div>
    </React.Fragment>
  )
}

export default Analytics;