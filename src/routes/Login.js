import React from 'react';
import defaultPhoto from './../img/social90.png';
import './../css/Login.css';
import {useHistory,useLocation} from 'react-router-dom';
import fakeAuth from './../AuthCookie';



function Login(props) {

	let history = useHistory();
	let location = useLocation();
	
	let { from } = location.state || { from: { pathname: "/Feed" } };
	let login = (e) => {
		e.preventDefault();
		fakeAuth.authenticate(() => {
		history.replace(from);
		
		});
	};

	function handleAm(){
		props.onChange(fakeAuth.isAuthenticated);

	}


    return (
		<div className="backColor">
      <div className="login">
			<div className="form">
				<img src={defaultPhoto} alt="logo"/>
			<form>
				<input type="text" name="tag" placeholder="Tag"/>
				<input type="password" name="tag" placeholder="Password"/>
        <a href="/" value={props.value} onClick={(e) => {login(e);handleAm();}}>Login</a>

			</form>
			<span>Forgot password? Click <a href="/">here</a></span>
			<span>Not registered? Find your code and Enter <a href="/">here</a></span>
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
		</div>
    );
  }

  export default Login;