import React from 'react';
import WordCard from './WordCard';
import myData from './../rsrc/word.json';
 

function WordListGen(myData) {
    const data = myData.data;
    const listItems = data.map((detailsInfo) =>
    <WordCard details={detailsInfo} key={detailsInfo.id} />
    );
    return (
      <ul className='profile-posts' >{listItems}</ul>
    );
}

class WordList extends React.Component{
    constructor(props){
        super(props);
        this.state = myData;
    }
    
    
    render(){
       return(
        <WordListGen data={this.state}/>
      );
    }

  }

  export default WordList;