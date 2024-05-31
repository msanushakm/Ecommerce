import React from 'react';
import image from './ecommerce.jpg';
function Home() {

  return (
    <center>
      <div style={{display:'flex'}}>
        <div style={{width:'50%'}}>
          <br></br><br></br><br></br>
      <h1>WELCOME</h1>
      <h2>to this page</h2>
      </div>
      <div style={{width:'50%'}}>
      <img src={image} style={{height:'100%',width:'100%'}}></img>
      </div>
    </div>

    </center>
  );
}

export default Home;