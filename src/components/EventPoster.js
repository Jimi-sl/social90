import React from 'react';
import './../css/EventPoster.css';
import {Link} from 'react-router-dom';


class EventPoster extends React.Component{

    constructor(props){
        super(props);
        this.state = {bookmark : false, add : false};
    }

    render(){
        return (
            <li class="demo-ev">
					<div class="info-event"><span><Link to={'/Event/Details'}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg></Link></span><span class="tickets">12 tixs left!</span></div>
					<div class="event-action">
                    <svg onClick={() => this.setState({bookmark : (this.state.bookmark === true ? false : true)})} className={this.state.bookmark === true ? "bookmark" : ""} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                    <svg onClick={() => this.setState({add : (this.state.add === true ? false : true)})} className={this.state.add === true ? "add" : ""} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </div>
				</li>);
            
    }
    

}
export default EventPoster;