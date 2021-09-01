import React, {useState, useEffect, createContext} from 'react';
import Auth from '../Auth';
import Dashboard from './Dashboard/Dashboard.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import '../../style.css';

export const TwitterContext = createContext();
export const YouTubeContext = createContext();

const Analytics = (props) => {
  var logout = () => {
    Auth.logout(() => {
      props.history.push('/');
    })
  }

  const [fakeTwitterData, SetFakeTwitterData] = useState({followers: 35910,
    subscriberGrowth: [14032, 15284, 19284, 19894, 20183, 22013, 26019, 27194, 27519, 29475, 34913, 35910],
    monthlyComments: [1943, 1039, 1834, 1092, 2894, 4928, 5993, 5193, 5419, 5219, 7019, 7192],
    runningMonthImpressionsAvg: 106,
    runningMonthLikesAvg: 97,
    runningMonthRetweetsAvg: 6
  })

  const [fakeYoutubeData, SetFakeYoutubeData] = useState({subscribers: 192412,
    subscriberGrowth: [24119, 25001, 26991, 27102, 87029, 98192, 109205, 127952, 146295, 169300, 183183, 192412],
    monthlyComments: [8135, 8175, 9105, 10284, 10829, 12890, 19825, 25981, 17280, 19283, 18395, 24993],
    runningMonthlyPerVideoViewsAvg: 81920,
    runningMonthlyPerVideoLikesAvg: 19170,
    runningMonthlyPerVideoCommentsAvg: 2190
  })


  return (
    <React.Fragment>
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