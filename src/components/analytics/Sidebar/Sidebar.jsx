import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../style.css';
import {IoLogoTwitter, IoLogoYoutube, IoAppsOutline} from 'react-icons/io5'

const Sidebar = () => {

  const [activeOption, SetActiveOption] = useState('Overview')

  return (
    <div className="sidebar-main">
      <div className="inline-row" onClick={(e) => SetActiveOption(e.target.innerText)} className={`dashBoardOption ${activeOption === 'Overview' ? "currentOption" : ""}`}>
        <IoAppsOutline />
        <Link to="/Analytics/Analytics/dashboard" onClick={(e) => SetActiveOption(e.target.innerText)} className={`dashBoardOption ${activeOption === 'Overview' ? "currentOption" : ""}`}>Overview</Link>
      </div>
      <div className="inline-row" onClick={(e) => SetActiveOption(e.target.innerText)} className={`dashBoardOption ${activeOption === 'Twitter' ? "currentOption" : ""}`}>
        <IoLogoTwitter />
        <Link to="/Analytics/Analytics/twitter" onClick={(e) => SetActiveOption(e.target.innerText)} className={`dashBoardOption ${activeOption === 'Twitter' ? "currentOption" : ""}`}>Twitter</Link>
      </div>
      <div className="inline-row" onClick={(e) => SetActiveOption(e.target.innerText)} className={`dashBoardOption ${activeOption === 'YouTube' ? "currentOption" : ""}`}>
        <IoLogoYoutube />
        <Link to="/Analytics/Analytics/youtube" onClick={(e) => SetActiveOption(e.target.innerText)} className={`dashBoardOption ${activeOption === 'YouTube' ? "currentOption" : ""}`}>YouTube</Link>
      </div>
    </div>
  )
}

export default Sidebar;