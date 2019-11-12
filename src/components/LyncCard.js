import React from 'react';
import './../css/LyncCard.css';
import defaultPhoto from './../img/default-pic.png';


class LyncCard extends React.Component{

    render(){
        return (
            <li className="profile-deets">
                <div>
                <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                <div>
                    <span className="name">{this.props.details.name}</span>
                    <span className="tag">{this.props.details.tag}</span>
                </div>
                </div>
                {this.props.details.lynced === true?<span>Mutual</span> :null}
                    
                    <p>{this.props.details.bio}</p>
                    <button>Lynced</button>

                    
                </li>
                );
            
    }
    

}
export default LyncCard;