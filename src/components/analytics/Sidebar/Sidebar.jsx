import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../style.css';

const Sidebar = () => {

  const [activeOption, SetActiveOption] = useState('Overview')

  return (
    <div className="sidebar-main">
        <Link to="/Analytics/Analytics/dashboard" onClick={(e) => SetActiveOption(e.target.innerText)} className={`dashBoardOption ${activeOption === 'Overview' ? "currentOption" : ""}`}>Overview</Link>
        <Link to="/Analytics/Analytics/twitter" onClick={(e) => SetActiveOption(e.target.innerText)} className={`dashBoardOption ${activeOption === 'Twitter' ? "currentOption" : ""}`}>Twitter</Link>
        <Link to="/Analytics/Analytics/youtube" onClick={(e) => SetActiveOption(e.target.innerText)} className={`dashBoardOption ${activeOption === 'YouTube' ? "currentOption" : ""}`}>YouTube</Link>
    </div>
  )
}

export default Sidebar;