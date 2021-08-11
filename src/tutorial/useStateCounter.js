import React, {useState} from 'react'

function UseStateCounter() {
    const [value, setValue] = useState(0);
    const complexIncrease = () => {
        setTimeout(() => {
            setValue((prevState) => 
            {
                return prevState +1;//passing function through set value of  use state and in place of 1 we can write 3,4,etc

            })
            // setvalue(value+5000); // passing a hardvalue through the set valueof use state and in place of 1 any number
        }, 5000)
    }
    return (
       <>
       <section style ={{margin: '4rem 0'}}>
           <h2> Aregular counter</h2>
           <h1>{value}</h1>
           <button className = 'btn' onClick={()=>setValue(value-1)}> decrease</button>
           <button className = 'btn' onClick={()=>setValue(value+1)}> increase</button>
           <button className = 'btn' onClick={()=>setValue(0)}> reset</button>
       </section>
       <section style={{margin: '4rem 0'}}>
           <h2>A more Complex counter</h2>
           <h1>{value}</h1>
           <button className = 'btn' onClick={complexIncrease}> increase Later</button>

       </section>
       </>
    )
}

export default UseStateCounter
