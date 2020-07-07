import React from 'react'


const GitUser = props =>{

    return(
        <div className="card main-user">
           
            <img class="card-img-top" src={props.git.avatar_url} />  
            <div class="card-body">
               <h1 class="card-title"> {props.git.name}</h1>
               <p class="card-text">Followers: {props.git.followers}</p>
               <p class="card-text">Following: {props.git.following}</p>
               
            </div>
            <button class='btn btn-primary'><a href={props.git.html_url}>Learn More!</a></button>
        </div>
    )
}

export default GitUser