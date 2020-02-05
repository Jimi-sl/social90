import React from 'react';
import Post from './Post';
import Settings from './../appsettings';
import axios from 'axios';

const API =  Settings.baseUrl + Settings.endPoints.getPartnerPosts;

function PostList(myData) {
    const data = myData.data;
  
    console.log(data);

    const listItems = data.map((detailsInfo) =>
    <Post details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul className='profile-posts' >{listItems}</ul>
    );
}

class PartnerPosts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          hits: [],
          isLoading: false,
          error: null,
        };
    }
    
    async componentDidMount() {
        this.setState({ isLoading: true });
        var inst = axios.create({withCredentials:true,
          headers:{
              'content-Type': 'application/json',
              "Accept":"/",
              "Authorization": Settings.token
          }});
          console.log(this.props);
          var Obj = {
            "id" : this.props.details.id
          };
              var json = JSON.stringify(Obj);
          try {
            const result = await inst.post(API,json);
            console.log(result);
            this.setState({
              hits: result.data,
              isLoading: false
            });
          } catch (error) {
            this.setState({
              error,
              isLoading: false
            });
      }
    }
  
    
    render(){
       return(
        <PostList data={this.state.hits}/>
      );
    }

  }

  export default PartnerPosts;