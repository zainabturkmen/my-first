import React from 'react';
import poster from "../assets/react.svg"

const Main = () => {
  return (
    <div className='body'>
      <img  src={poster} />
      <h1>Online Experince</h1>
      <h2>Online Experince Online Experince let's learn online and enjois the session</h2>
        <div className='cards'>
            <div className='card'>
                <img src={poster} />
                <h3>
                    <img src={poster} /> 5.0 
                </h3>
            </div>

        </div>
    </div>
  );
}

export default Main;
