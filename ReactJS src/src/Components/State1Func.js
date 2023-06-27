import { useState } from "react";

export default function State1Func()
{
    const[message,setmessage]=useState("Welcome");

    return(
        <div>
            <p>{message}</p>
            <button onClick={()=>{if(message=='Welcome')setmessage("Hello"); else setmessage('Welcome')}}>Click Here</button>
        </div>
    )
}