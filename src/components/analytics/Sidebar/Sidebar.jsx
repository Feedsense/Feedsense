import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <Link to="/Analytics/Analytics/dashboard" >Overview</Link>
      <Link to="/Analytics/Analytics/twitter" >Twitter</Link>
      <Link to="/Analytics/Analytics/youtube" >YouTube</Link>
    </div>
  )
}

export default Sidebar;