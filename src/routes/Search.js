import React,{useState,useEffect} from "react";
import {useLocation} from "react-router-dom";
import {NavLink,useRouteMatch} from 'react-router-dom';
import "./../css/search.css";
import Post from './../components/Post.js'
import Sidebar from "./../Sidebar";
import defaultPhoto from './../img/default-pic.png';
import EventPoster from './../components/EventPoster.js';
import axios from 'axios';
import Settings from './../appsettings';




function useQuery() {
    /* var url = new URL("http://localhost:3001" + useLocation().pathname);
    let query = new URLSearchParams(url.search);
    console.log(url);
    console.log(query.has("q"));
    //return new URLSearchParams(url.search); */
    return new URLSearchParams(useLocation().search);
  }

  function All({name}){
    let {url} = useRouteMatch();
    let [posts,setPosts] = useState([]);
    let [partners,setPartners] = useState([]);
    let [people,setPeople] = useState([]);
    let [events,setEvents] = useState([]);

    url += "?q=" + name;
    /* let variable = {
      "Type" : "Post",
      "repost_id" : "0",
      "comment_id" : "0",
      "Tag" : "Jimi",
      "date" : "2s",
      "text" : "I love this game"
    }
    let varid = {
      "id" : "1"
    } */

    useEffect(() => {
      
      let getPosts = async () => {
          var inst = axios.create({withCredentials:true,
          headers:{
              'content-Type': 'application/json',
              "Accept":"/",
              "Authorization": Settings.token
          }});
          var Obj = {
              "limit" : 2,
            "text" : name
          };
              var json = JSON.stringify(Obj);
              const AP = Settings.baseUrl + Settings.endPoints.getPostsSearch;
              try {
              const result = await inst.post(AP,json);
              setPosts(result.data);
          } catch (error) {
              console.log(error);
          }
      }
      let getPeople = async () => {
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
            "limit" : 2,
          "text" : name
        };
            var json = JSON.stringify(Obj);
            const AP = Settings.baseUrl + Settings.endPoints.getPeopleSearch;
            try {
            const result = await inst.post(AP,json);
            setPeople(result.data);
        } catch (error) {
            console.log(error);
        }
      }
      
      let getPartner = async () => {
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
            "limit" : 2,
          "text" : name
        };
            var json = JSON.stringify(Obj);
            const AP = Settings.baseUrl + Settings.endPoints.getPartnerSearch;
            try {
            const result = await inst.post(AP,json);
            setPartners(result.data);
        } catch (error) {
            console.log(error);
        }
      }

      let getEvents = async () => {
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
            "limit" : 2,
          "text" : name
        };
            var json = JSON.stringify(Obj);
            const AP = Settings.baseUrl + Settings.endPoints.getEventsSearch;
            try {
            const result = await inst.post(AP,json);
            setEvents(result.data);
        } catch (error) {
            console.log(error);
        }
      }

      getPosts();
      getPeople();
      getPartner();
      getEvents();
  },[name]);

    const listPost = posts.map((detailsInfo) =>
    <Post details={detailsInfo} key={detailsInfo.id} />
    );

    const listPeople = people.map((detailsInfo) =>
    <UserComp details={detailsInfo} key={detailsInfo.id} />
    );

    const listPartner = partners.map((detailsInfo) =>
    <PartnerComp details={detailsInfo} key={detailsInfo.id} />
    );

    const listEvents = events.map((detailsInfo) =>
    <EventPoster details={detailsInfo} key={detailsInfo.id} />
    );

    return(
        
    <div className="searchContent">
      {listPeople.length !== 0 && <div className="people">
          <ul>
              {/* <UserComp/>
              <UserComp/> */}
              {listPeople}
          </ul>
          <p><NavLink to={`${url}&for=people`}>See more people</NavLink></p>
      </div>}
      {listPost.length !== 0 && <div className="posts">
          <ul>
             {/* <Post details={variable}/>
             <Post details={variable}/> */}
             {listPost}        
          </ul>
          <p><NavLink to={`${url}&for=posts`}>See more posts</NavLink></p>
      </div>}
      {listPartner.length !== 0 && <div className="partners">
          <ul>
         {/*  <PartnerComp/>
          <PartnerComp/> */}
          {listPartner}
          </ul>
          <p><NavLink to={`${url}&for=partners`}>See more partners</NavLink></p>
      </div>}
      {listEvents.length !== 0 && <div className="events">
          <ul>
             {/*  <EventPoster details={varid}/>
              <EventPoster details={varid}/> */}
              {listEvents}
          </ul>
          <p><NavLink to={`${url}&for=events`}>See more events</NavLink></p>
      </div>}
      </div>
        );
  }

  function PostSearch({name}){
    let [posts,setPosts] = useState([]);

   /*  let variable = {
      "Type" : "Post",
      "repost_id" : "0",
      "comment_id" : "0",
      "Tag" : "Jimi",
      "date" : "2s",
      "text" : "I love this game"
    } */

    useEffect(() => {
      
      let getPosts = async () => {
          var inst = axios.create({withCredentials:true,
          headers:{
              'content-Type': 'application/json',
              "Accept":"/",
              "Authorization": Settings.token
          }});
          var Obj = {
              "limit" : 10,
            "text" : name
          };
              var json = JSON.stringify(Obj);
              const AP = Settings.baseUrl + Settings.endPoints.getPostsSearch;
              try {
              const result = await inst.post(AP,json);
              setPosts(result.data);
          } catch (error) {
              console.log(error);
          }
      }

      getPosts();
    },[name]);
    
    const listPost = posts.map((detailsInfo) =>
    <Post details={detailsInfo} key={detailsInfo.id} />
    );

    return(
        
    <div className="searchContent">
      
      <div className="posts">
          <ul>
             {/* <Post details={variable}/>
             <Post details={variable}/> */}
             {listPost}
          </ul>
      </div>
      </div>
        );
  }

  function UserComp(props){
    
    return(
      <li>
      <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
            <div className="profile-names"> 
            <span>{props.details.Name}</span>
            <span>{props.details.Tag}</span>
            </div>
            <p>{props.details.bio}</p>
            <button>Lync</button>
      </li>
    );
  }

  function PartnerComp(props){
    return(
      <li>
      <div className="profile-pic"><img  alt="logo"  className="mob" src={defaultPhoto}/></div>
            <div className="profile-names"> 
            <span>{props.details.name}</span>
            <span>{props.details.type}</span>
            </div>
            <p>{props.details.bio}</p>
            <button>Plug</button>
      </li>
    );
  }
  
  function PeopleSearch({name}){

    let [people,setPeople] = useState([]);


    useEffect(() => {
      
      let getPeople = async () => {
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
            "limit" : 10,
          "text" : name
        };
            var json = JSON.stringify(Obj);
            const AP = Settings.baseUrl + Settings.endPoints.getPeopleSearch;
            try {
            const result = await inst.post(AP,json);
            setPeople(result.data);
        } catch (error) {
            console.log(error);
        }
      }

      getPeople();
    },[name]);

    const listPeople = people.map((detailsInfo) =>
    <UserComp details={detailsInfo} key={detailsInfo.id} />
    );


    return(
        
    <div className="searchContent">
      <div className="people">
          <ul>
             {/*  <UserComp/>
              <UserComp/> */}
              {listPeople}
          </ul>
      </div>
      </div>
        );
  }
  
  function PartnerSearch({name}){
    let [partners,setPartners] = useState([]);

    useEffect(() => {
      
      let getPartner = async () => {
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
            "limit" : 10,
          "text" : name
        };
            var json = JSON.stringify(Obj);
            const AP = Settings.baseUrl + Settings.endPoints.getPartnerSearch;
            try {
            const result = await inst.post(AP,json);
            setPartners(result.data);
        } catch (error) {
            console.log(error);
        }
      }

      getPartner();
    },[name]);

    const listPartner = partners.map((detailsInfo) =>
    <PartnerComp details={detailsInfo} key={detailsInfo.id} />
    );

    return(
        
    <div className="searchContent">
      <div className="partners">
          <ul>
         {/*  <PartnerComp/>
              <PartnerComp/> */}
              {listPartner}
          </ul>
      </div>
   </div>
        );
  }
  
  function EventSearch({name}){

    let [events,setEvents] = useState([]);
  
    /* let varid = {
      "id" : "1"
    } */

    useEffect(() => {
      
      let getEvents = async () => {
        var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": Settings.token
        }});
        var Obj = {
            "limit" : 10,
          "text" : name
        };
            var json = JSON.stringify(Obj);
            const AP = Settings.baseUrl + Settings.endPoints.getEventsSearch;
            try {
            const result = await inst.post(AP,json);
            setEvents(result.data);
        } catch (error) {
            console.log(error);
        }
      }

      getEvents();
    },[name]);

    const listEvents = events.map((detailsInfo) =>
    <EventPoster details={detailsInfo} key={detailsInfo.id} />
    );

    return(
        
    <div className="searchContent">
     <div className="events">
          <ul>
              {/* <EventPoster details={varid}/>
              <EventPoster details={varid}/> */}
              {listEvents}
          </ul>
      </div>
      </div>
        );
  }

  function ChildComp({ name,field }){

    if(field===null)
    return <All name={name}/>
    else if(field==="people")
    return <PeopleSearch name={name}/>
    else if(field==="posts")
    return <PostSearch name={name}/>
    else if(field==="partners")
    return <PartnerSearch name={name}/>
    else if(field==="events")
    return <EventSearch name={name}/>
    else
    return null;

}


  function Child({ name,field }) {
    let {url} = useRouteMatch();
    url += "?q=" + name;

    return (
            
      <div>
          <div className="homePage">
      <div className="routeNav"><h1 className="active">Search</h1></div>
      <ul className="searchNav"><li><NavLink exact to={`${url}`} activeClassName={field === null?"active": null}>All</NavLink></li><li><NavLink to={`${url}&for=people`} activeClassName={field === "people"?"active": null}>People</NavLink></li><li><NavLink to={`${url}&for=posts`} activeClassName={field === "posts"?"active": null}>Posts</NavLink></li><li><NavLink to={`${url}&for=partners`} activeClassName={field === "partners"?"active": null}>Partners</NavLink></li><li><NavLink to={`${url}&for=events`} activeClassName={field === "events"?"active": null}>Events</NavLink></li></ul>
    

        <ChildComp field={field} name={name}/>
        </div>
        <Sidebar/>
      </div>
    );
  }
  
  function Search() {
    let query = useQuery();
    return (<Child name={query.get("q")} field={query.has("for")?query.get("for"): null} />);
  }

export default Search;

  