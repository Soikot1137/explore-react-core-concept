import { useState } from "react"

export default function Counter(){
    const [count, setCount]=useState(0);
    const handleAdd=()=>{
        const newCpount=count+1;
        setCount(newCpount)
    }
    const handleRemove=()=>{
        const newCount=count-1;
        setCount(newCount)


    }
    // console.log(abc);
    return(
        <div style={{border:'3px solid tomato' ,borderRadius:'10px',padding:'20px'}}>
            <h3>counter:{count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove} style={{marginLeft:'10px'}}>Reduce</button>
        </div>
    )
}