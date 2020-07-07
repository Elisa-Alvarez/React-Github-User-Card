import React from 'react'
import GitUser from './GitUser';
import axios from 'axios'



class UserData extends React.Component{
    constructor(){
    super ();
    this.state={
      user: []
    }
    }

    componentDidMount(){
        axios.get(`https://api.github.com/users/Elisa-Alvarez`)
         .then(res =>{
             
            this.setState({
                user: res.data
                
              });
            
         })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.user !== prevState.user) {
         
        }
      }
    
    

        render() {
            return (

               
              <GitUser key={this.state.user.id} git={this.state.user} />
            
            )
        }
    }

    export default UserData