import React from 'react';
import './../css/LyncCard.css';
import defaultPhoto from './../img/default-pic.png';


class PlugCard extends React.Component{

    render(){
        return (
            <li className="profile-deets">
                <div>
                <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                <div>
                    <span className="name">{this.props.details.name}</span>
                    <span className="tag">{this.props.details.bio}</span>
                </div>
                </div>
                    
                    <p>{this.props.details.bio}</p>
                    <button>Plugged</button>

                    
                </li>
                );
            
    }
    

}
export default PlugCard;