import React from 'react';
import './../css/EventCard.css';
import {Link} from 'react-router-dom';


class EventDetailsCard extends React.Component{
	  

	  

    render(){
       return(
        <div class="ex-event">
					<div class="event-info">
					<div></div>
					<span><Link to={'/so/' + this.props.details.pname}>{this.props.details.pname}</Link></span>
					<span>{this.props.details.date}</span>
					</div>
					<div class="event-type-info">
					<h3>{this.props.details.name}</h3>
					<span>{this.props.details.location}</span>
					<span>{this.props.details.price}</span>
					</div>
					<div class="event-content">
					<div></div>
					<p>{this.props.details.details}</p>
					<span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> {this.props.details.date}</span>
					<span><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {this.props.details.start_time + " - " + this.props.details.end_time}</span>
					</div>
					<div class="event-footer">
						<span>{this.props.details.ticket_count + "/" + this.props.details.ticket_limit} tickets left</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
					</div>
				</div>
      );
    }

  }

  export default EventDetailsCard;
