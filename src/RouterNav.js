import { Route, Switch, useLocation, Link, Redirect} from 'react-router-dom';
import React, { Suspense,lazy} from 'react';
import fakeAuth from './AuthCookie';
import Cookies from 'universal-cookie';





const Home = lazy(() => import('./routes/Home.js'));
const Chats = lazy(() => import('./routes/Chats.js'));
const Alerts = lazy(() => import('./routes/Alerts.js'));
const Settings = lazy(() => import('./routes/Settings.js'));
const Bookmarks = lazy(() => import('./routes/Bookmarks.js'));
const Profile = lazy(() => import('./routes/Profile.js'));
const Login = lazy(() => import('./routes/Login.js'));
const Events = lazy(() => import('./routes/Events.js'));
const EventDeets = lazy(() => import('./routes/EventDetails.js'));
const EventProfile = lazy(() => import('./routes/EventProfile.js'));
const Post = lazy(() => import('./routes/PostModal.js'));
const Comment = lazy(() => import('./routes/CommentModal.js'));
const LikesModal = lazy(() => import('./routes/LikesModal.js'));
const RepostsModal = lazy(() => import('./routes/RepostsModal.js'));
const Landing = lazy(() => import('./routes/LandingPage.js'));
const Register = lazy(() => import('./routes/Register.js'));
const Account = lazy(() => import('./components/Account.js'));
const Privacy = lazy(() => import('./components/Privacy.js'));
const Notifications = lazy(() => import('./components/Notifications.js'));
const Deactivation = lazy(() => import('./components/Deactivation.js'));


function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const RouterNav = (props) => {
  let location = useLocation();
  let cookies = new Cookies();
  let background = location.state && location.state.background;
  
  function handleAm(newValue){
    props.onChange(newValue);
  }
  
  return(
    <div className="routerNav">
      <Suspense fallback={<div className="loading">
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
        </div>}>
          
        <Switch location={background || location}>
        <PrivateRoute path="/Feed">
        <Home/>  
        </PrivateRoute>
        <PrivateRoute path="/Chats">
        <Chats/>  
        </PrivateRoute>
        <PrivateRoute path="/Alerts">
        <Alerts/>  
        </PrivateRoute>
        <PrivateRoute exact to path="/Settings">
        <Settings/>  
        </PrivateRoute>
        <PrivateRoute path="/Bookmarks">
        <Bookmarks/>   
        </PrivateRoute>
        <PrivateRoute path="/User-Profile/:tag">
        <Profile location={location}/> 
        </PrivateRoute>
        <PrivateRoute path="/Events">
        <Events/>   
        </PrivateRoute>
        <PrivateRoute path="/Event/Details">
        <EventDeets/>   
        </PrivateRoute>
        <PrivateRoute path="/Settings/Account">
        <Account/>   
        </PrivateRoute>
        <PrivateRoute path="/Settings/Privacy">
        <Privacy/>   
        </PrivateRoute>
        <PrivateRoute path="/Settings/Notifications">
        <Notifications/>   
        </PrivateRoute>
        <PrivateRoute path="/Settings/Deactivation">
        <Deactivation/>   
        </PrivateRoute>
        <PrivateRoute path="/Event/Profile">
        <EventProfile location={location} />    
        </PrivateRoute>
        </Switch>
        {/* Show the modal when a background page is set */}
      {background && <PrivateRoute path="/Post"><Post/></PrivateRoute>}
      {background && <PrivateRoute path="/Comment"><Comment/></PrivateRoute>}
      {background && <PrivateRoute path="/Stats/Likes"><LikesModal/></PrivateRoute>}    
      {background && <PrivateRoute path="/Stats/Reposts"><RepostsModal/></PrivateRoute>}    
      <Route path='/Login'>{
      (typeof fakeAuth.isAuthenticated) === "string" ? 
      <Redirect
            to={{
              pathname: "/Feed",
              state: { from: location }
            }}
          /> :
        <Login value={props.value} onChange={handleAm}/>
      }
      </Route>  
      <Route path='/Register'>{
      ((typeof cookies.get('register')) !== "string") ? 
      <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          /> :
       <Register/>
       }
      </Route>
      <Route exact to path='/'>
      {
      (typeof fakeAuth.isAuthenticated) === "string" ? 
      <Redirect
            to={{
              pathname: "/Feed",
              state: { from: location }
            }}
          /> :  
      <Landing/>
      }
      </Route>  
      </Suspense>
      {fakeAuth.isAuthenticated ? <Link className="post-button" to={{
    pathname: "/Post",
    state: { background: location },
  }}>Post +</Link>  : null}
  {fakeAuth.isAuthenticated ? <Link className="icon-post-button" to={{
    pathname: "/Post",
    state: { background: location },
  }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
</Link> : null}
      </div>
  )
};
  

  export default RouterNav;