import React from 'react';
import Sidebar from './../Sidebar';
import './../css/SubSettings.css';

var Account = () =>{

    return(<div>
        <div className="page">
              <div className="page-title set"><h1 className="active"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>Settings : Account</h1></div>
              <div className="set-cont">
                <h2>Change Tag</h2>
                <input type="text" placeholder="Enter your tag name"/>
                <h2>Add Phone Number</h2>
                <input type="text" placeholder="Enter your phone number"/>
                <h2>Change Password</h2>
                <input type="text" placeholder="Enter your new password"/>
                <input type="text" placeholder="Re-enter your new password"/>
                <input type="button" value="Save"/>
            </div>
          </div>
      <Sidebar/>
      </div>
    );
}

export default Account;