import React  from 'react';    
 


function User (props) {   

  return (  
      
    <div className="user"> 
        <div className="avatar"> <img src={props.picture} alt={props.picture}/> </div>
        <div className="info">
            <h4>  {props.name} </h4>
            <div>  {props.about} </div> 
          {/*  <div className="tweets"> {props.tweet} </div> */ }
        </div>    

    </div>

  )
}

export default User;