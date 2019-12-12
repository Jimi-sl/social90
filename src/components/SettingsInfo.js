import React from 'react';
import ThemeSetter from './ThemeSetter';
import './../css/Settings.css';
import {Link} from 'react-router-dom';

function SettingsInfo() {
    return (
        <div className="settings-container">
        <h2><Link to='/Settings/Account'>Account<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></Link></h2>  
        <h2><Link to='/Settings/Privacy'>Privacy<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></Link></h2> 
        <h2><Link to='/Settings/Notifications'>Notifications<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></Link></h2>
        <h2><Link to='/Settings/Deactivation'>Deactivating Account<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></Link></h2>
        <h2>Your theme? <ThemeSetter/></h2>
       </div>
    );
  }

  export default SettingsInfo;