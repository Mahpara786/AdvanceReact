import React, { useState, useContext } from 'react'
import { data } from "./data";
//it will fix our issue that we found with prop drilling that is we have to pass the component tree
// to access it into another component we there a number of component between them.
//context type ApI, Redux now redux is for bigger application for similar ones we can use usecontext hooks


const PersonContext = React.createContext();
// this will return us two component
//1stn it will give us provider and then a consumer

function ContextAPI() {
    const [people,setPeople] = useState(data);
    const removePerson = (id) => 
    {
        setPeople((people) =>
        {
            return people.filter((person) => person.id !== id)
        })
    }
    return (
        <>
        <PersonContext.Provider value = {{removePerson}}>
            <h3>ContextAPI</h3>
            <List people = {people} />
        </PersonContext.Provider>
       
       </>
    )
}
const List = ({people, removePerson}) => {
    return <>
    {
        people.map((person) => {
            return <SinglePerson key={person.id} { ...person}/>
        })
    }
    </>
}
const SinglePerson = ({id,name}) => {
    const {removePerson} = useContext(PersonContext);
    return <div className = "item">
        <h4>{name}</h4>
        <button onClick = { () => removePerson(id)}>remove</button>
    </div>
}

export default ContextAPI
