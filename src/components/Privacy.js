import React from 'react';
import Sidebar from './../Sidebar';
import './../css/SubSettings.css';

var Account = () =>{

    return(<div>
        <div className="page">
              <div className="page-title set"><h1 className="active"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>Settings : Privacy</h1></div>
              <div className="set-cont">
                <h2>Protect your posts?</h2>
                <div className="select-option">
                <select>
                    <option>No</option>
                    <option>Yes</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>                
                </div>
                <p>Default setting is No.</p>
                <input type="button" value="Save"/>
            </div>
          </div>
      <Sidebar/>
      </div>
    );
}

export default Account;