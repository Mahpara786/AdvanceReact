import React, {useState} from 'react'

function UseStateCounter() {
    const [value, setValue] = useState(0);
    const complexIncrease = () => {
        setTimeout(() => {
            setValue(value+1);
        }, 2000)
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
