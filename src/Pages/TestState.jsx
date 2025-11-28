import React, {useState} from 'react';
 
const TestState = () => {

    const [Name , setName] = useState("click to show name");
    const [id , setId] = useState("click to show id");

    const test = () =>
    {
        setName("jailan");
        console.log(Name)

    };

    const number = () =>

    {
        setId(22101179);
        console.log(id)

    }

    return ( 
        <>
        
                
        <button onClick={test}>
            {Name}
        </button>
                 
        <button onClick={number}>
            {id}
        </button>
        
        
        </>
     );
}
 
export default TestState;