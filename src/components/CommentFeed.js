import React from 'react';
import Post from './Post';
//import myData from './../rsrc/postModal.json';
import axios from 'axios';

const gpUrl = 'http://localhost:8888/GitHub/middlewares90/api/getPost/';
const gcUrl = 'http://localhost:8888/GitHub/middlewares90/api/getComment/';

const grpUrl = 'http://localhost:8888/GitHub/middlewares90/api/getRepostPost/';
const grcUrl = 'http://localhost:8888/GitHub/middlewares90/api/getRepostComment/';

function PostList(myData) {
    const data = myData.data;
    console.log(data);

    /* const listItems = data.map((detailsInfo) =>
    <Post details={detailsInfo} key={detailsInfo.id} />
    ); */
    const post = data.post[0];
    const comment = data.comment[0];

    return (
    <ul className='profile-posts' >{data.post.length !== 0 && <Post details={post}/>}{data.comment.length !== 0 && <Post details={comment}/>}</ul>
    );
}

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          post: [],
          comment: [],
        };
    }
    
      async componentDidMount() {
      var inst = axios.create({withCredentials:true,
        headers:{
            'content-Type': 'application/json',
            "Accept":"/",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjIxNDFjM2IxNzc5YTY0OWJlNjVkNDYxMWQ4NDVjNjU3MjEyZTRjODMiLCJqdGkiOiIyMTQxYzNiMTc3OWE2NDliZTY1ZDQ2MTFkODQ1YzY1NzIxMmU0YzgzIiwiaXNzIjoiIiwiYXVkIjoiQ0xJRU5UX0lEIiwic3ViIjpudWxsLCJleHAiOjE1NzUyMDQ5MzYsImlhdCI6MTU3NTIwMTMzNiwidG9rZW5fdHlwZSI6ImJlYXJlciIsInNjb3BlIjpudWxsfQ.qM0uTZMebRVgiYmUf8yXYc5EyX1WNopNeHfw6-7_hXYnkqJLWEG7i_F7ts-NRg1OERMrQgbv2REa1wwuPYY_xOAVmCOprPUzor95ynm0MYgY2zcCBIi0pe0b-FiOZlsys3zsgQ9tnm8fBqS_ZN9bmqwLfLS3mlLv-CF-1XzwqKE"
        }});
        var url;
        var json;
        var Obj;
        console.log(this.props);
        if(this.props.data.post_id !== "0")
        {
            if((this.props.data.repost_id !== "0") && (this.props.data.comment_id === "0"))
            {
              url = grpUrl;
              Obj = {'repostId' : this.props.data.repost_id};
              json = JSON.stringify(Obj);
            }
            else
            {
              url = gpUrl;
              Obj = {'postId' : this.props.data.post_id};
              json = JSON.stringify(Obj);
            }
            try{
              const result = await inst.post(url, json)
              this.setState({
                post: result.data,
              });
            } catch (error) {
              this.setState({
                
            });
            }
        }

       

        if(this.props.data.comment_id !== "0")
        {
            if((this.props.data.repost_id !== "0") && (this.props.data.post_id === "0"))
            {
              url = grcUrl;
              Obj = {'repostId' : this.props.data.repost_id};
              json = JSON.stringify(Obj);
            }
            else
            {
              url = gcUrl;
              Obj = {'commentId' : this.props.data.comment_id};
              json = JSON.stringify(Obj);
            }
            try{
              const result = await inst.post(url, json)
              this.setState({
                comment: result.data,
              });
            } catch (error) {
              this.setState({
                
            });
            }
        }
        
    }
    
    render(){
       return(
        <PostList data={this.state}/>
      );
    }

  }

  export default Feed;