import React from 'react';
import {useHistory,NavLink,useLocation} from 'react-router-dom';
import LyncsList from './../components/LyncsList';




const StatModal = () => {
  let history = useHistory();
  let location = useLocation();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="modal commentModalbox" onClick={back}>
      <div className="modalPost" onClick={e => {e.stopPropagation();return false;}}>
      <div className="modalTitle"><span><NavLink to={{ pathname: "/Stats/Likes",state: { background: location }, }} activeClassName="active">Likes</NavLink></span><span className="RepostTab"><NavLink to={{ pathname: "/Stats/Reposts",state: { background: location }, }} activeClassName="active">Reposts</NavLink></span> <svg onClick={back} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
      <div className="postCommentBox stats">
      <LyncsList/>
      </div>
      </div>
    </div>
  );
  };

  export default StatModal;