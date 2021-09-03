import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../style.css';
import {IoLogoTwitter, IoLogoYoutube, IoAppsOutline} from 'react-icons/io5'

const Sidebar = () => {

  const [activeOption, SetActiveOption] = useState('Overview')

  return (
    <div className="sidebar-main">
      <Link 
        to="/Analytics/Analytics/dashboard" 
        onClick={(e) => SetActiveOption(e.target.innerText)} 
        className={`dashBoardOption ${activeOption === 'Overview' ? "currentOption" : ""}`}>  
          <IoAppsOutline /> <span style={{marginLeft: '8px'}}>Overview</span>
      </Link>
      <Link 
        to="/Analytics/Analytics/twitter" 
        onClick={(e) => SetActiveOption(e.target.innerText)} 
        className={`dashBoardOption ${activeOption === 'Twitter' ? "currentOption" : ""}`}> 
          <IoLogoTwitter /><span style={{marginLeft: '8px'}}>Twitter</span>
      </Link>
      <Link 
        to="/Analytics/Analytics/youtube" 
        onClick={(e) => SetActiveOption(e.target.innerText)} 
        className={`dashBoardOption ${activeOption === 'YouTube' ? "currentOption" : ""}`}> 
          <IoLogoYoutube /><span style={{marginLeft: '8px'}}>YouTube</span>
      </Link>
    </div>
  )
}

export default Sidebar;