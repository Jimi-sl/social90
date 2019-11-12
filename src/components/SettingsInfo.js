import React from 'react';
import ThemeSetter from './ThemeSetter';
import './../css/Settings.css'

function SettingsInfo() {
    return (
        <form>
        <h2>Account</h2>
        <div>
            <h3>Change tag</h3>
            <p>jimi_sl</p>
        </div>
        <h2>Privacy</h2>
        <div>
            <h3>Post privacy</h3>
            <p>Make your posts and comment private</p>
        </div>
        <div>
            <h3>Chat privacy</h3>
            <p>Receive chat from only lyncs</p>
        </div>
        <h2>Notifications</h2>
        <div>
            <h3>Email notifications</h3>
            <p>Turn off email notifications</p>
        </div>
        <h2>Blocking and Muting</h2>
        <div>
            <h3>Muted Accounts</h3>
            <p>ydobyna</p>
        </div>
        <div>
            <h3>Muted Words</h3>
            <p>beyonce</p>
        </div>
        <div>
            <h3>Blocked Accounts</h3>
            <p>None</p>
        </div>

        <h2>Deactivating Account</h2>
        <div>
            <h3>Do you want to deactivate your account</h3>
            <p>Yes     No</p>
        </div>
        <h2>Set your theme</h2>
        <ThemeSetter/>
        <button>Save</button>
    </form>
    );
  }

  export default SettingsInfo;