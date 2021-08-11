import React, {useState, useEffect} from "react"


function UseEffectBasic() {
    const [value, setValue]=useState(0);
    useEffect(() => {
        console.log('call useEffect');
        if(value>=1) {
        
            document.title=`new Message(${value})`;
        }
    },[value]);
    console.log('render componenet')
    return (
        <>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value +1)}>
            click me
        </button>
       
    </>
    )
}

export default UseEffectBasic
