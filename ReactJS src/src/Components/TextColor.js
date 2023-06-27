import { useState } from "react"

let TextColor=()=>{

    const[col,setcol]=useState('red');


    let changecol=()=>{
        if(col=='red')
         setcol('blue');
        else
         setcol('red');
    }

    return(<div>
        <p style={{color:col}} onClick={changecol}>hello how are you ?</p>

    </div>)
}

export default TextColor;