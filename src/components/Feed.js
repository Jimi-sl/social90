import React from 'react';
import Post from './Post';
import myData from './../rsrc/posts.json';

function PostList(myData) {
    const data = myData.data;
    const listItems = data.map((detailsInfo) =>
    <Post details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul className='profile-posts' >{listItems}</ul>
    );
}

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = myData;
    }
    
    
    render(){
       return(
        <PostList data={this.state}/>
      );
    }

  }

  export default Feed;