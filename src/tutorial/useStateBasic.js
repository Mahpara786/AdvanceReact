import React, {useState} from 'react'


function UseStateBasic() {
    const [day,setDay]=useState("Today is a rainy day :");
    const handleClick = () => {
        if(day ==="Today is a rainy day :"){
            setDay("Today is a bright day!!") 
        }
    else {
        setDay("Today is a rainy day !!") 
    }
    };
    return (
        <div>
           <>
           <h1>{day}</h1>
           <button type ="button" className="btn" onClick={handleClick} >
            change my day
        </button>
        </>
        </div>
    )
}

export default UseStateBasic
