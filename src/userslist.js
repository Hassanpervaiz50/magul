import React from 'react';    
import User from './user';

function userListfn (props) {  
    let Users = props.filterdUsers.map((user , i ) => {
        //console.log(user.usersJson);
        return <User key={i} name = {user.name} about = {user.about} picture={user.picture}
        /* tweet = { user.tweets.map((twt,j) => {
            return (
                <div className="user-details" key={j}>
                    <p>{twt.message}</p>
                    <span> {twt.date} </span>
                </div>
             ) ;
        } )  } */
        
         /> 
    });
  return (    
      <div className="users-list"> 
          {Users}    
      </div>
  )
}

export default userListfn;