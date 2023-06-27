import { useState } from 'react'
import pic from '../meralogo.jpg'
let ImageCheckBox=()=>{


    const[flag,setflag]= useState(true);

    return(<div>
        
        <img src='{pic}' style={{display:flag?'block':'none'}} />

        <input type='checkbox' checked={flag} onChange={(e)=>{setflag(e.target.checked)}}></input>{flag.toString()}

    </div>)
}
export default ImageCheckBox;