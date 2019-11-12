import React from 'react';
import './../css/WordCard.css';
import defaultPhoto from './../img/default-pic.png';


class WordCard extends React.Component{

    render(){
        return (
            <li className="profile-deets">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>                
                <div>
                <div className="party-title">
                    <span className="name">{this.props.details.name}</span>
                    <span className="date">{this.props.details.date}</span>
                </div>
                <div className="party-user-details">
                <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                <span className="tag">{this.props.details.tag}</span>
                <div className="emoji"></div>
                </div>
                </div>               
                    <p>{this.props.details.comment}</p> 
                </li>
                );
            
    }
    

}
export default WordCard;