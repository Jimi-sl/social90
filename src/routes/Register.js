import React from 'react';
import defaultPhoto from './../img/social90.png';
import './../css/Login.css';
import {useHistory} from 'react-router-dom';
import Cookies from 'universal-cookie';




function Register(props) {

	let history = useHistory();
	let cookies = new Cookies();

	
	let login = (e) => {
		e.preventDefault();
		cookies.remove('register');
		history.push("/Login");
	};

	

    return (
		<div className="backColor">
      <div className="login">
			<div className="form register">
				<img src={defaultPhoto} alt="logo"/>
			<form>
				<input type="text" name="name" placeholder="Name"/>
				<input type="password" name="tag" placeholder="Tag"/>
				<input type="password" name="password" placeholder="Password"/>
				<input type="email" name="email" placeholder="Email"/>
				<div className="divForm">
					<div>D.O.B.
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>	
					</div>
					<div>Gender
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>                
					</div>
				</div>
        <a href="/" value={props.value} onClick={(e) => {login(e);}}>Register</a>

			</form>
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

  export default Register;