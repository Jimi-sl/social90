import React from 'react';
import Sidebar from './../Sidebar';
import AlertList from './../components/AlertList';

function Alerts() {
    return (
      <div>
      <div className="page">
			<div className="page-title"><h1 className="active">Alerts</h1></div>
			<AlertList/>
		</div>
    <Sidebar/>
    </div>
    );
  }

  export default Alerts;