import React from 'react';
import IndexRouter from './../IndexRouter';
import Sidebar from './../Sidebar';
import Feed from './../components/Feed';


function Home() {
    return (
        <div>
        <div className='homePage'>
        <IndexRouter/>
        <Feed/>
    </div>
    <Sidebar/>
</div>
    );
  }

  export default Home;