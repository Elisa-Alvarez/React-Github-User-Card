import React from 'react'
import Bootstrap from 'bootstrap'
import { Button} from 'react-bootstrap'
import axios from 'axios'


const Follower = props =>{
    
      
          return(
          <div className="card">
               
                <img class="card-img-top" src={props.follow.avatar_url} />
       
            <div class="card-body">
                <h2 class="card-title">{props.follow.login}</h2>
                <button class='btn btn-primary'><a href={props.follow.html_url}>Follow ME!</a></button>
            </div>

          </div>
          )
      
}

export default Follower