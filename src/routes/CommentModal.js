import React,{useState} from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import Feed from './../components/CommentFeed';
import axios from 'axios';



const CommentModal = () => {
  let history = useHistory();
  let location = useLocation();
  const [formValue, setText] = useState({ text: ''});
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:8888/GitHub/middlewares90/api/postFtn/comment/";


  let back = e => {
    e.stopPropagation();
    history.goBack();
  };
  const saveProduct = (e) => {
    setShowLoading(true);
    e.preventDefault();
    var Obj = {"text" : formValue.text, "postId" : location.state.post_id };
    var json = JSON.stringify(Obj);
    var inst = axios.create({withCredentials:true,
    headers:{
        'content-Type': 'application/json',
        "Accept":"/",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjIxNDFjM2IxNzc5YTY0OWJlNjVkNDYxMWQ4NDVjNjU3MjEyZTRjODMiLCJqdGkiOiIyMTQxYzNiMTc3OWE2NDliZTY1ZDQ2MTFkODQ1YzY1NzIxMmU0YzgzIiwiaXNzIjoiIiwiYXVkIjoiQ0xJRU5UX0lEIiwic3ViIjpudWxsLCJleHAiOjE1NzUyMDQ5MzYsImlhdCI6MTU3NTIwMTMzNiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjpudWxsfQ.qM0uTZMebRVgiYmUf8yXYc5EyX1WNopNeHfw6-7_hXYnkqJLWEG7i_F7ts-NRg1OERMrQgbv2REa1wwuPYY_xOAVmCOprPUzor95ynm0MYgY2zcCBIi0pe0b-FiOZlsys3zsgQ9tnm8fBqS_ZN9bmqwLfLS3mlLv-CF-1XzwqKE"
    }});
    inst.post(apiUrl, json)
    .then((result) => {
        setShowLoading(false);
        history.goBack();
    }).catch((error) => {setShowLoading(false);console.log(error)});
  };

  const onChange = (e) => {
    e.persist();
    setText({...formValue,[e.target.name]: e.target.value});
  }

  return (
    <div className="modal commentModalbox" onClick={back}>
      <div className="modalPost" onClick={e => {e.stopPropagation();return false;}}>
      <div className="modalTitle"><span>Post Up! ..still</span> <svg onClick={back} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
      <div className="postCommentBox">
      <Feed data={location.state}/>
      </div>
      {showLoading && <div className="loading">
        <div>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
    <rect x="0" y="0" width="4" height="7" fill="inherit">
      <animateTransform  attributeType="xml"
        attributeName="transform" type="scale"
        values="1,1; 1,3; 1,1"
        begin="0s" dur="0.6s" repeatCount="indefinite" />       
    </rect>

    <rect x="10" y="0" width="4" height="7" fill="inherit">
      <animateTransform  attributeType="xml"
        attributeName="transform" type="scale"
        values="1,1; 1,3; 1,1"
        begin="0.2s" dur="0.6s" repeatCount="indefinite" />       
    </rect>
    <rect x="20" y="0" width="4" height="7" fill="inherit">
      <animateTransform  attributeType="xml"
        attributeName="transform" type="scale"
        values="1,1; 1,3; 1,1"
        begin="0.4s" dur="0.6s" repeatCount="indefinite" />       
    </rect>
  </svg>      
        </div>
        </div>}
      <form onSubmit={saveProduct}>
        <textarea placeholder="Say something... I'm giving up on you.." name="text" value={formValue.text} onChange={onChange}></textarea>
        <input type="submit" value="Post"/>
      </form>
      </div>
    </div>
  );
  };

  export default CommentModal;