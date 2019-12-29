import React,{useState,useEffect} from 'react';
import './../css/Post.css';
import Settings from './../appsettings';
import defaultPhoto from './../img/default-pic.png';
import {Link,useLocation} from 'react-router-dom';
import axios from 'axios';

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
    const lApiUrl = Settings.baseUrl + Settings.endPoints.lApiUrl;
    const rpApiUrl = Settings.baseUrl + Settings.endPoints.rpApiUrl;

    const iLApiUrl = Settings.baseUrl + Settings.endPoints.iLApiUrl;
    const iRpApiUrl = Settings.baseUrl + Settings.endPoints.iRpApiUrl;
    const notifyUrl = Settings.baseUrl + Settings.endPoints.notifyUrl;


    function hideDropdownMenu(){
        setShowMenuState(false);
        document.removeEventListener('click',hideDropdownMenu);
    }   

    function showDropdownMenu(){
        setShowMenuState(true);
        document.addEventListener('click',hideDropdownMenu);
    }


    useEffect(() => {
        isLiked();
        isReposted();
      });
    

    const likeToggle = () => {
        var Obj = {'postId' : props.details.post_id, 'commentId': props.details.comment_id};
        var json = JSON.stringify(Obj);
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        inst.post(lApiUrl, json)
        .then((result) => {
            setLike(like === true ? false : true);
        }).catch((error) => {console.log(error)});
      };

      const isLiked = () => {
        var Obj = {'postId' : props.details.post_id, 'commentId': props.details.comment_id};
        var json = JSON.stringify(Obj);
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjIxNDFjM2IxNzc5YTY0OWJlNjVkNDYxMWQ4NDVjNjU3MjEyZTRjODMiLCJqdGkiOiIyMTQxYzNiMTc3OWE2NDliZTY1ZDQ2MTFkODQ1YzY1NzIxMmU0YzgzIiwiaXNzIjoiIiwiYXVkIjoiQ0xJRU5UX0lEIiwic3ViIjpudWxsLCJleHAiOjE1NzUyMDQ5MzYsImlhdCI6MTU3NTIwMTMzNiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjpudWxsfQ.qM0uTZMebRVgiYmUf8yXYc5EyX1WNopNeHfw6-7_hXYnkqJLWEG7i_F7ts-NRg1OERMrQgbv2REa1wwuPYY_xOAVmCOprPUzor95ynm0MYgY2zcCBIi0pe0b-FiOZlsys3zsgQ9tnm8fBqS_ZN9bmqwLfLS3mlLv-CF-1XzwqKE"
        }});
        inst.post(iLApiUrl, json)
        .then((result) => {
            setLike(result.data === 1 ? true : false);
        }).catch((error) => {console.log(error)});
      };
    
      const repostToggle = () => {
        var Obj = {'postId' : props.details.post_id, 'commentId': props.details.comment_id};
        var json = JSON.stringify(Obj);
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjIxNDFjM2IxNzc5YTY0OWJlNjVkNDYxMWQ4NDVjNjU3MjEyZTRjODMiLCJqdGkiOiIyMTQxYzNiMTc3OWE2NDliZTY1ZDQ2MTFkODQ1YzY1NzIxMmU0YzgzIiwiaXNzIjoiIiwiYXVkIjoiQ0xJRU5UX0lEIiwic3ViIjpudWxsLCJleHAiOjE1NzUyMDQ5MzYsImlhdCI6MTU3NTIwMTMzNiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjpudWxsfQ.qM0uTZMebRVgiYmUf8yXYc5EyX1WNopNeHfw6-7_hXYnkqJLWEG7i_F7ts-NRg1OERMrQgbv2REa1wwuPYY_xOAVmCOprPUzor95ynm0MYgY2zcCBIi0pe0b-FiOZlsys3zsgQ9tnm8fBqS_ZN9bmqwLfLS3mlLv-CF-1XzwqKE"
        }});
        inst.post(rpApiUrl, json)
        .then((result) => {
            setRepost(repost === true ? false : true);
        }).catch((error) => {console.log(error)});
      };

      const isReposted = () => {
        var Obj = {'postId' : props.details.post_id, 'commentId': props.details.comment_id};
        var json = JSON.stringify(Obj);
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjIxNDFjM2IxNzc5YTY0OWJlNjVkNDYxMWQ4NDVjNjU3MjEyZTRjODMiLCJqdGkiOiIyMTQxYzNiMTc3OWE2NDliZTY1ZDQ2MTFkODQ1YzY1NzIxMmU0YzgzIiwiaXNzIjoiIiwiYXVkIjoiQ0xJRU5UX0lEIiwic3ViIjpudWxsLCJleHAiOjE1NzUyMDQ5MzYsImlhdCI6MTU3NTIwMTMzNiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjpudWxsfQ.qM0uTZMebRVgiYmUf8yXYc5EyX1WNopNeHfw6-7_hXYnkqJLWEG7i_F7ts-NRg1OERMrQgbv2REa1wwuPYY_xOAVmCOprPUzor95ynm0MYgY2zcCBIi0pe0b-FiOZlsys3zsgQ9tnm8fBqS_ZN9bmqwLfLS3mlLv-CF-1XzwqKE"
        }});
        inst.post(iRpApiUrl, json)
        .then((result) => {
            setRepost(result.data === 1 ? true : false);
        }).catch((error) => {console.log(error)});
      };
      const notify = (action) => {
        var Obj = {'postId' : props.details.post_id, 'commentId': props.details.comment_id,'repostId' : props.details.repost_id, 'action': action};
        var json = JSON.stringify(Obj);
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjIxNDFjM2IxNzc5YTY0OWJlNjVkNDYxMWQ4NDVjNjU3MjEyZTRjODMiLCJqdGkiOiIyMTQxYzNiMTc3OWE2NDliZTY1ZDQ2MTFkODQ1YzY1NzIxMmU0YzgzIiwiaXNzIjoiIiwiYXVkIjoiQ0xJRU5UX0lEIiwic3ViIjpudWxsLCJleHAiOjE1NzUyMDQ5MzYsImlhdCI6MTU3NTIwMTMzNiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjpudWxsfQ.qM0uTZMebRVgiYmUf8yXYc5EyX1WNopNeHfw6-7_hXYnkqJLWEG7i_F7ts-NRg1OERMrQgbv2REa1wwuPYY_xOAVmCOprPUzor95ynm0MYgY2zcCBIi0pe0b-FiOZlsys3zsgQ9tnm8fBqS_ZN9bmqwLfLS3mlLv-CF-1XzwqKE"
        }});
        inst.post(notifyUrl, json)
        .then((result) => {
        }).catch((error) => {console.log(error)});
      };
    
        return (<li className={props.details.Type}>
            <svg onClick={() => showDropdownMenu()} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                <ul className={"post-menu " + (showMenu === true ? "show-menu" : "")}>
                <li>copy link to post</li>
                <li>unlync user</li>
                <li>mute user</li>
                <li>block user</li>
                <li>report user</li>
                </ul>
                {props.details.repost_id !== "0" ?<p className="repost-info">Repost by <span>{props.details.RepostTag}</span></p> : null}
                <div className="user-info">
                <Link to={'/User-Profile/Jimi'}>
                <div><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
                <span>{props.details.Tag}</span>
                <span>{props.details.date}</span>
                </Link>
                </div>
                {props.details.comment_id !== "0" ?<p className="replying">Reply to <br/><span>{props.details.CommentTag}</span></p> : null}
                <div className="content">
                <p>{props.details.text}</p>
                <ImgRender hasImg={props.details.img}/>
                </div>
                <div className="action-btn">
                <svg onClick={() => {likeToggle();notify(1);}} className={like === true ? "liked" : ""} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <svg onClick={() => {repostToggle();notify(2)}} className={repost === true ? "reposted" : ""} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
                <Link to={{
    pathname: "/Comment",
    state: { background: location, post_id : props.details.post_id, comment_id : props.details.comment_id, repost_id : props.details.repost_id},
  }}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9l6 6-6 6"/><path d="M4 4v7a4 4 0 0 0 4 4h11"/></svg></Link>
                <Link to={{
    pathname: "/Stats/Likes",
    state: { background: location, post_id : props.details.post_id, comment_id : props.details.comment_id, repost_id : props.details.repost_id},
  }}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg></Link>               
                </div>
            </li>);

    

}
export default Post;