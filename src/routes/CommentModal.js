import React from 'react';
import {useHistory} from 'react-router-dom';
import Feed from './../components/CommentFeed';




const CommentModal = () => {
  let history = useHistory();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="modal commentModalbox" onClick={back}>
      <div className="modalPost" onClick={e => {e.stopPropagation();return false;}}>
      <div className="modalTitle"><span>Post Up! ..still</span> <svg onClick={back} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
      <div className="postCommentBox">
      <Feed/>
      </div>
      <form>
        <textarea placeholder="Say something... I'm giving up on you.."></textarea>
        <input type="submit" value="Post"/>
      </form>
      </div>
    </div>
  );
  };

  export default CommentModal;