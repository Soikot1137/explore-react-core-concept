import { useState } from "react"

export default function Team(){
    const[team,setTeam]=useState(11);
    const handleAdd=()=>{
       const  newPlayer=team+1;
        setTeam(newPlayer)
    }
    const handleRemove=()=>{
        setTeam(team-1 )
    }

    const teamStyle={
        border:'3px solid yellow',
        marginBottom:'20px',
        borderRadius:'10px',
        padding:'20px'
    }
    return(
        <div style={teamStyle}>
            <h3 >Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}