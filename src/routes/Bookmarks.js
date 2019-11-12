import React from 'react';
import Sidebar from './../Sidebar';
import BookmarkList from './../components/BookmarkList';

function Bookmarks() {
    return (
      <div>
      <div className="page">
			<div className="page-title"><h1 className="active">Bookmarks</h1></div>
			<BookmarkList/>
		</div>
    <Sidebar/>
    </div>
    );
  }

  export default Bookmarks;