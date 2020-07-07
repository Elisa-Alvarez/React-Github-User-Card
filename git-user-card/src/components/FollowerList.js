import React from 'react'
import Follower from './Follower'
import axios from 'axios'


class FollowerList extends React.Component{
    state ={
        
        follower: []
    }

    componentDidMount(){
        axios.get(`https://api.github.com/users/Elisa-Alvarez/followers`)
         .then(res =>{
             console.log(res.data)
            this.setState({
                follower: res.data
                
              });
            
         })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.follower !== prevState.follower) {
          
        }
      }
      render(){
          return(
          <div className='follow-container'>
           {this.state.follower.map( person =>(
           <Follower  key={person.id} follow={person} />
           ))}
          </div>
          )
      }
}

export default FollowerList