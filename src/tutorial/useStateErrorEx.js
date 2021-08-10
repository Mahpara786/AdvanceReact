import React, {useState} from 'react'

function UseStateErrorEx() {
    let title ="random title";
    const handleClick = () => {
        console.log(title);
        
       title = "My name is Obama";
    }
    return ( <React.Fragment>
        <h2>{title}</h2>
        <button type ="button" className="btn" onClick={handleClick} >
            change title
        </button>
    </React.Fragment>
        
    )
}

export default UseStateErrorEx
