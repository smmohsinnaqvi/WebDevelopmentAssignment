import { useState } from "react"

let IncDecCount =()=>{

    const[count,setcount]=useState(0);

    return(<div>
        <h2>COUNT : {count}</h2>
        <button onClick={()=>{setcount(count+1)}}>INCREMENT</button>
        <button onClick={()=>{setcount(count-1)}}>DECREMENT</button>

    </div>)
}

export default IncDecCount;