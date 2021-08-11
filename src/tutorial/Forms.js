import React, {useState} from 'react'

function Forms() {
    const [firstName, setFirstName]= useState(" ");
    const [email, setEmail]=useState("");
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(firstName && email) {
            console.log('submit the value');    
            const person = {firstName:firstName, email:email};
        //console.log(person);
        setPeople((people) => {
            return  [...people, person];
        });
        setFirstName('');
        setEmail('');
    }
    else {
        console.log('empty value');
    }
    }
    return (
        <>

        <article>
            <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor ="firstName"> Name</label>
                <input type ="text" id="firstName" name='firstName' value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>

            </div>
            <div className='form-control'>
                <label htmlFor ="email"> Email:</label>
                <input type ="text" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    
        </article>
    </>
    )

}

export default Forms