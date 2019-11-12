import React from 'react';
import './../css/Alert.css';

function IconType(data) {
    var prop = data.data;
    if(prop === 'Like')
    return (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>);
    else if(prop === 'Repost')
    return (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>);
    else if(prop === 'Comment')
    return (<svg xmlns="http://www.w3.org/2000/svg" className="comment" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9l6 6-6 6"/><path d="M4 4v7a4 4 0 0 0 4 4h11"/></svg>);
}

class Alert extends React.Component{

    render(){
        return (
            <li className={"alert " + (this.props.details.seen === false ? "unseen" : "")}>
            <div className="alert-info">
                <div>
                    <div class="profile-pic"></div>
                    <span>{this.props.details.tag}</span>
                    <span>{this.props.details.action}</span>
                </div>
                <div class="action-icon">
                <IconType data={this.props.details.iconType} />
                </div>
            <span>{this.props.details.time}</span>
            </div>
        </li>);
            
    }
    

}
export default Alert;