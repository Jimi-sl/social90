import React from 'react';
import LyncCard from './LyncCard';
//import myData from './../rsrc/lyncs.json';
import Settings from './../appsettings';
import axios from 'axios';

const API =  Settings.baseUrl + Settings.endPoints.getProfileLyncs;
 

function LyncListGen(myData) {
    const data = myData.data;
    const listItems = data.map((detailsInfo) =>
    <LyncCard details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul className='profile-posts' >{listItems}</ul>
    );
}

class LyncsList extends React.Component{
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
          var Obj = {
            "id" : this.props.location.state !== undefined ? this.props.location.state.id : this.props.id,
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
        <LyncListGen data={this.state.hits}/>
      );
    }

  }

  export default LyncsList;