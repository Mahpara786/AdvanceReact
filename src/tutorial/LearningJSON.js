import React from 'react'
import axios from 'axios'

function LearningJSON() {
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/users",{
            name: "Bony" },{
                headers: {
                    ['content-type']: 'application/json'
                }}
                 )
        promise.then(response => {
            console.log(response) // this is used to console log our response from server
        })
        promise.catch(error => {
            console.error(error); // this is used to console our error in case we get
        })
        let c = b;
        console.log(c); // this is used to push our data first commit

    }
    const getUser = () => 
    {
        axios.get("http://localhost:4000/users").then(users => {
           
            console.log(users); // we are getting data from our json server and then storing it in user and then storing in the array of the object
        })
    }
   
    return (
        <>
          <h2>learning Json</h2>  
          <button type="button" className="btn" onClick={handleClick}> 
              post Users
          </button>
          <button type="button" className="btn" onClick={getUser}>
              get Users
          </button>
        </>
    )
}

export default LearningJSON
