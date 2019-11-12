import React from 'react';
import './css/sidebar.css';
import defaultPhoto from './img/default-pic.png';


function Sidebar() {
    return (
        <div className="side-bar">
        <div className="to-lync">
            <h3>Who to Lync</h3>
            <ul>
                <li>
                    <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                    <span>Flakey</span>
                    <button>Lync</button>
                </li>
                <li>
                    <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                    <span>Flooker</span>
                    <button>Lync</button>
                </li>
                <li>
                    <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                    <span>Flaka</span>
                    <button>Lync</button>
                </li>
            </ul>
            <h3 className="bottom">Show more</h3>
        </div>
        <div className="plugs">
            <h3>Plugs</h3>
            <ul>
                <li>
                    <div className="profile-pic"></div>
                    <div>
                        <span>s90</span>
                        <span>2k gbese</span>
                    </div>
                    <div>
                        <span>1.12:50:50</span>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="profile-pic"></div>
                    <div>
                        <span>Block Party</span>
                        <span>Island Way</span>
                    </div>
                    <div>
                        <span>1.12:50:50</span>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="profile-pic"></div>
                    <div>
                        <span>FOMO!</span>
                        <span>Brunchy Fest</span>
                    </div>
                    <div>
                        <span>1.12:50:50</span>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </div>
                    </div>
                </li>
            </ul>
            <h3 className="bottom">Go to Cart</h3>
        </div>
        <div className="cart-list">
        <h3>Nothing in Cart</h3>	
        </div>
        <div className="footer">
            <ul>
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
            <h4>JimiDidIt &#9400; 2019</h4>
        </div>
    </div>
    );
  }

  export default Sidebar;