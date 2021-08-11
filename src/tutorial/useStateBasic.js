import React, {useState} from 'react'


function UseStateBasic() {
    const [day,setDay]=useState("Today is a rainy day :");
    const handleClick = () => {
        setDay("Tpday is a bright day!!")
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
