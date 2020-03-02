import React ,{Component} from 'react';   
import "./App.css";
import SearchBox from './search'; 
import Userlist from './userslist';
import UserData from './data/generated.json';

// import user1 from "./assets/user1.png";
// import user2 from "./assets/user2.png";
// import user3 from "./assets/user3.png";
//import Tweet from './tweet.js';  


class App extends Component {   
  constructor (props) {
    super(props);
    this.state = {  
      searchUser : '' 
    }
  }
  componentWillMount() {
    this.setState({usersJson:UserData }) 
   }
  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({searchUser : e.target.value})
  }

  render() {
    let filterdUsers = this.state.usersJson.filter((user) => {
      return user.name.toLowerCase().includes(this.state.searchUser.toLowerCase()) 
    })
   // console.log(filterdUsers);
    return (
    <div className="app">  
        <SearchBox handleInput = {this.handleInput} / >
 
         {/*
         <ul className="users-list">
          <li> 
              <div className="avatar">
                <img src={user1} alt={user1}/>
              </div>
              <h3>
                user name 1 
              </h3> 
              
          </li> 
        </ul>

       <ul className="user-details">
          <li>    
              <p>Details one goes here... </p>
              <span> 07:39pm - 29 Feb 2020</span>
          </li> 
        </ul>*/} 
        <Userlist filterdUsers={filterdUsers} /> 
      
    </div>
  );
  } 
  
}

export default App;
