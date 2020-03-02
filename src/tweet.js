import React from 'react';   

function tweet({name,message}) {  
  return ( 
    <div className="styTweet">
        <h2>{name} </h2>
        <p>{message}</p>
        <span>Detials ...</span>

    </div>   
  );
}

export default tweet;
