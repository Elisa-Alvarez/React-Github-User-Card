import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserData from './components/UserData'
import FollowerList from './components/FollowerList'
import './App.css';

class App extends React.Component{
  
  render(){
  return (
    <div className="App">
      <UserData /> 
      
      <div className="followers">
        <FollowerList />
        </div>
    </div>
    
  );
  }
}

export default App;
