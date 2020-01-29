import React from 'react';
// import myData from './../rsrc/alerts.json';
import Settings from './../appsettings';
import Alert from './../components/Alert';
import axios from 'axios';

const API =  Settings.baseUrl + Settings.endPoints.getAlerts;

function AlertListGen(myData) {
    const data = myData.data;
    console.log(data);
    const listItems = data.map((detailsInfo) =>
    <Alert details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul>{listItems}</ul>
    );
}

class AlertList extends React.Component{
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
          }});var Obj = {
            "id" : sessionStorage.getItem("id"),
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
        <AlertListGen data={this.state.hits}/>
      );
    }

  }

  export default AlertList;