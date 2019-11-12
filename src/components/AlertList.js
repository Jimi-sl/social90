import React from 'react';
import myData from './../rsrc/alerts.json';
import Alert from './../components/Alert';

function AlertListGen(myData) {
    const data = myData.data;
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
        this.state = myData;
    }
    
    
    render(){
       return(
        <AlertListGen data={this.state}/>
      );
    }

  }

  export default AlertList;