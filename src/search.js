import React from 'react';   
import brand from './assets/brand.png';  

function search(props) {  
  return ( 
      
    <div className="search-box">
        <div className="header">
            <img src={brand} alt="MOGUL SG"/>
        </div> 
        <div className="search">  
            <label htmlFor="search-names"> 
            <input 
                id="search-names"
                placeholder="Search User Name ..."
                onChange = {props.handleInput}
            
            type="text"/>
            </label>
        </div>   
    </div>
  );
}

export default search;