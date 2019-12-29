import React from 'react';
import Post from './Post';
import Settings from './../appsettings';
//import myData from './../rsrc/postModal.json';
import axios from 'axios';

const gpUrl = Settings.baseUrl + Settings.endPoints.getPost;
const gcUrl = Settings.baseUrl + Settings.endPoints.getComment;

const grpUrl = Settings.baseUrl + Settings.endPoints.getRepostPost;
const grcUrl = Settings.baseUrl + Settings.endPoints.getRepostComment;

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
            "Authorization": Settings.token
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