import React from 'react';
import SettingsInfo from './../components/SettingsInfo';
import Sidebar from './../Sidebar';

function Settings() {
    return (
      <div>
      <div className="page">
			<div className="page-title"><h1 className="active">Settings</h1></div>
			<SettingsInfo/>
		</div>
    <Sidebar/>
    </div>
    );
  }

  export default Settings;