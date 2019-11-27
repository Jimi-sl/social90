import React from 'react';
import defaultPhoto from './../img/social90.png';
import './../css/Login.css';
import {useHistory,useLocation} from 'react-router-dom';
import fakeAuth from './../AuthCookie';
import axios from 'axios';

const API = 'http://localhost:8888/GitHub/middlewares90/api/login/';

function Login(props) {

	let history = useHistory();
	let location = useLocation();
	
	let { from } = location.state || { from: { pathname: "/Feed" } };
	let login = async (e) => {
		e.preventDefault();		
		var Obj = {
			"tag" : document.getElementById('tag').value,
			"password" : document.getElementById('password').value,
		};
        var json = JSON.stringify(Obj);
            var inst = axios.create({withCredentials:true,
                                    headers:{
                                        'content-Type': 'application/json',
                                        "Accept":"/",
                                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjUxNTVkYTMxNGY0NjViYTRmM2FjOWE1NDAyNjk0MjA4NDVlNTAzMDciLCJqdGkiOiI1MTU1ZGEzMTRmNDY1YmE0ZjNhYzlhNTQwMjY5NDIwODQ1ZTUwMzA3IiwiaXNzIjoiIiwiYXVkIjoiQ0xJRU5UX0lEIiwic3ViIjpudWxsLCJleHAiOjE1NzQ2MDAzMzIsImlhdCI6MTU3NDU5NjczMiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjpudWxsfQ.subZFEYogpNwhqBiybH_Qs5QncRZl-FLE7rPonPeLo95CcDQgL8RUiUNOsA_GskdNKomQOXvEF9dT4nx-C2WbEprg-nn6q__SmO7XDciNaW9QG_vuq4p83sUNTtrC1JvO7MPKJ40_bnqKxXlvew0pXvNktbc7MDIvgmfX7MFXBQ"
                                    }});
            await inst.post(API,json)
            .then(
                response => {console.log(response.data);fakeAuth.authenticate(() => {history.replace(from);});handleAm();}
            )
            .catch(
                error => {console.log(error);}
            );
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
				<input type="text" name="tag" placeholder="Tag" id="tag"/>
				<input type="password" name="tag" placeholder="Password" id="password"/>
        <a href="/" value={props.value} onClick={(e) => {login(e);}}>Login</a>

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