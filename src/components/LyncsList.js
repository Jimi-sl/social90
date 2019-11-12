import React from 'react';
import LyncCard from './LyncCard';
import myData from './../rsrc/lyncs.json';
 

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
        this.state = myData;
    }
    
    
    render(){
       return(
        <LyncListGen data={this.state}/>
      );
    }

  }

  export default LyncsList;