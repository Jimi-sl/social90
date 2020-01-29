import React from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import './css/Nav.css';


import logoDesk from './img/social90.png';
import logoMob from './img/90.png';
import Cookies from 'universal-cookie';
import fakeAuth from './AuthCookie';
import axios from 'axios';
import Settings from './appsettings';


function Logout(props){
    function handleAm(){
		props.onChange(fakeAuth.isAuthenticated);
    }
    
    let history = useHistory();
    return(
        <a href='/Login' value={fakeAuth.isAuthenticated} onClick={(e) =>{e.preventDefault();sessionStorage.removeItem('id');
        fakeAuth.signout(() => history.push("/Login"));handleAm();}}>Logout</a>
    );
}
function ProfileLink({ to }) {
    
  
    return (
      <li>
        <NavLink to={{pathname : '/9o/' + to, state : {id : sessionStorage.getItem('id')}}} activeClassName="active-nav">My Profile</NavLink>
      </li>
    );
}

class Nav extends React.Component {
    
    constructor(props) {
        super(props);
        this.navToggle = this.navToggle.bind(this);
        this.state = {width : window.innerWidth, tag: ''};
        this.closePopUp = this.closePopUp.bind(this);
        this.handleAm = this.handleAm.bind(this);
        this.cookies = new Cookies();
    }

    handleAm = (newValue) => {
        // Here, we invoke the callback with the new value
        this.props.onChange(newValue);
      }
    
    navToggle(){
        var val = document.getElementsByClassName("pop-up-nav")[0];
        if(val.classList.contains("show"))
               val.classList.remove("show");
           else
               val.classList.add("show");
    }

    closePopUp = () => {
        var links = document.getElementsByTagName("A");
        var i;
        var val = document.getElementsByClassName("pop-up-nav")[0];
        for(i = 0;i < links.length;i++){
            links[i].addEventListener('click',function(){
                    val.classList.remove("show");
            });
        }

      };

    updateDimensions = () => {
        this.setState({ width: window.innerWidth});
    };
      async componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        var inst = axios.create({withCredentials:true,
            headers:{
                'content-Type': 'application/json',
                "Accept":"/",
                "Authorization": Settings.token
            }});var Obj = {
              "id" : sessionStorage.getItem("id"),
            };
                var json = JSON.stringify(Obj);
                const API = Settings.baseUrl + Settings.endPoints.getUserInfo;
                try {
              const result = await inst.post(API,json);
              console.log(result.data[0].Tag);
              this.setState({
                tag: result.data[0].Tag,
              }); 
            } catch (error) {
                console.log(error);
            }
        
        this.closePopUp();
    }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    
    render(){
        return (
            <header>
                <NavLink to={'/Feed'}>
                <img src={this.state.width < 801 ? logoMob : logoDesk} alt="logo" className="mob" />
                </NavLink>
                <input type="search" name="" placeholder="Search" className="mob"/> <div className="nav"><ul><li><NavLink exact to={'/Feed'} activeClassName="active-nav"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span>Home</span></NavLink></li><li><NavLink to={'/Chats'} activeClassName="active-nav"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>

                <span>Chat</span></NavLink></li><li><NavLink to={'/Alerts'} activeClassName="active-nav"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                <span>Alert</span></NavLink></li></ul><span></span><div className="nav-toggle" onClick={(e) => this.navToggle(e)}>
                <div><div></div><span>{this.state.tag}</span></div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8">
                    <path stroke="none" fill="inherit" fillRule="nonzero" d="M13.828.307a.846.846 0 0 0-.619-.261H.881a.846.846 0 0 0-.62.261.847.847 0 0 0-.261.62c0 .238.087.444.261.619L6.426 7.71c.174.174.38.262.619.262a.846.846 0 0 0 .619-.262l6.164-6.164a.847.847 0 0 0 .262-.62.848.848 0 0 0-.262-.619z" opacity=".48"/>
                </svg>
                </div>
                </div>
                <div className="mobile-nav nav-toggle" onClick={(e) => this.navToggle(e)}>
                <svg className="menu-option" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>
                <ul className="pop-up-nav">
                    <li className="mobile">
                    <ul><li><NavLink exact to={'/Feed'} activeClassName="active-nav"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                <span>Home</span></NavLink></li><li><NavLink to={'/Chats'} activeClassName="active-nav"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <span>Chat</span></NavLink></li><li><NavLink to={'/Alerts'} activeClassName="active-nav"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                <span>Alert</span></NavLink></li></ul>
                </li>
                <ProfileLink to={this.state.tag}/>
                <li><NavLink to={'/Bookmarks'} activeClassName="active-nav">Bookmarks</NavLink></li>	
                <li><NavLink to={'/Settings'} activeClassName="active-nav">Settings</NavLink></li>	
                <li><Logout value={this.props.value} onChange={this.handleAm}/></li>	
                </ul>
            </header>
            );
        }
  }

export default Nav;
