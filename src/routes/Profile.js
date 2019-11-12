import React from 'react';
import ProfileArea from '../components/ProfileArea';
import Sidebar from '../Sidebar';



function Profile(props) {
    return (
      <div className='content-container'>
    <ProfileArea path={props.location.pathname}/>
     <Sidebar/>
     </div>
    );
  }

  export default Profile;