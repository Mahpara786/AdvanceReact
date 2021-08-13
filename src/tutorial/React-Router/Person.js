import React, {useState} from 'react'
 import {data} from "../data";
 import People from './People';

function Person() {
    const [people,setPeople] = useState(data);
    return (
        <div>
           <h1>Details of the users</h1> 
           <div>
           {people.map((person) => {
               return (
                   <div key={person.id} className="item">
                   <h4>{person.name}</h4>
                   <h4>{person.age}</h4>

                   </div>
               );
           })}
        </div>
        </div>
    )
}

export default Person
