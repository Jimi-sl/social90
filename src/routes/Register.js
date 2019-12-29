import React,{useState} from 'react';
import defaultPhoto from './../img/social90.png';
import './../css/Login.css';
import {useHistory} from 'react-router-dom';
import Cookies from 'universal-cookie';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import Settings from './../appsettings';


const API = Settings.baseUrl + Settings.endPoints.register;

function Register(props) {

	let history = useHistory();
	let cookies = new Cookies();
	const [startDate, setStartDate] = useState(null);


	
	let login = async (e) => {
		e.preventDefault();	
		var date = new Intl.DateTimeFormat('en-GB', { 
			year: '2-digit', 
			month: '2-digit', 
			day: '2-digit' 
		  }).format(startDate);
		var Obj = {
			"name" : document.getElementById('name').value,
			"tag" : document.getElementById('tag').value,
			"password" : document.getElementById('password').value,
			"email" : document.getElementById('email').value,
			"dob" : date,	
			"gender" : document.getElementById('gender').value,
		
		};
        var json = JSON.stringify(Obj);
            var inst = axios.create({withCredentials:true,
                                    headers:{
                                        'content-Type': 'application/json',
                                        "Accept":"/",
                                        "Authorization": Settings.token
                                    }});
            await inst.post(API,json)
            .then(
                response => {console.log(response.data);cookies.remove('register');history.push("/Login");}
            )
            .catch(
                error => {console.log(error);}
            );
	};

	

    return (
		<div className="backColor">
      <div className="login">
			<div className="form register">
				<img src={defaultPhoto} alt="logo"/>
			<form>
				<input type="text" name="name" placeholder="Name" id="name"/>
				<div className="taggy">
				<input type="text" name="tag" placeholder="Tag" id="tag"/>
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>
				</div>
				<input type="password" name="password" placeholder="Password" id="password"/>
				<input type="email" name="email" placeholder="Email" id="email"/>
				<div className="divForm">
					{/* <div>D.O.B.
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>	
					</div> */}
					<div className="no-padding">
					<DatePicker
      showPopperArrow={false}
	  selected={startDate}
	  placeholderText="D.O.B."
	  popperClassName="poppy"
	  popperPlacement="top-end"
	  popperModifiers={{
        offset: {
          enabled: true,
          offset: "0px, 10px"
        }
      }}
	  onChange={date => setStartDate(date)}
    />
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>	
	</div>
					<div className="gender">
						<select id="gender">
							<option>Gender</option>
							<option value="1">Male</option>
							<option value="0">Female</option>
						</select>
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