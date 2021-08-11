import React, {useState} from 'react'

function UseStateObject() {
   const[person, setPerson]= useState({
       name: "Star Lord",
       age: 50,
       message: "I am a god",
   });
   const [name,setName] = useState(
       "Tony Stark")
    const [age, setAge] = useState(45)
    const [message,setMessage] = useState("I am IronMan")


   const changeMessage = () => {
       setPerson({...person, message:"not anymore"});
       setMessage("HelloWorld");
   }
    return (
        <div>
        
        <>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{message}</h3>
        <button className="btn" onClick={changeMessage}> chnge my message</button>
        </>    
        </div>
    )
}

export default UseStateObject
