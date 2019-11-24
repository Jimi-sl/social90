import React,{useState} from 'react';
import './../css/Post.css';
import defaultPhoto from './../img/default-pic.png';
import {Link,useLocation} from 'react-router-dom';


function ImgRender(props) {
    const hasImg = props.hasImg;
    if(hasImg){
        return <div></div>;  
    }
    return ""; 
}

var Post = (props) => {
    let location = useLocation();


    const [like, setLike] = useState();
    const [repost, setRepost] = useState();
    const [showMenu,setShowMenuState] = useState(false);

    function hideDropdownMenu(){
        setShowMenuState(false);
        document.removeEventListener('click',hideDropdownMenu);
    }   

    function showDropdownMenu(){
        setShowMenuState(true);
        document.addEventListener('click',hideDropdownMenu);
    }

    
        return (<li className={props.details.type}>
            <svg onClick={() => showDropdownMenu()} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                <ul className={"post-menu " + (showMenu === true ? "show-menu" : "")}>
                <li>copy link to post</li>
                <li>unlync user</li>
                <li>mute user</li>
                <li>block user</li>
                <li>report user</li>
                </ul>
                <div className="user-info">
                <Link to={'/User-Profile/Jimi'}>
                <div><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                <span>{props.details.tag}</span>
                <span>{props.details.time}</span>
                </Link>
                </div>
                <div className="content">
                <p>{props.details.text}</p>
                <ImgRender hasImg={props.details.img}/>
                </div>
                <div className="action-btn">
                <svg onClick={() => setLike(like === true ? false : true)} className={like === true ? "liked" : ""} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <svg onClick={() => setRepost(repost === true ? false : true)} className={repost === true ? "reposted" : ""} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
                <Link to={{
    pathname: "/Comment",
    state: { background: location },
  }}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9l6 6-6 6"/><path d="M4 4v7a4 4 0 0 0 4 4h11"/></svg></Link>
                <Link to={{
    pathname: "/Stats/Likes",
    state: { background: location },
  }}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg></Link>               
                </div>
            </li>);

    

}
export default Post;