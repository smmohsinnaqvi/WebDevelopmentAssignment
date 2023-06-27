import { useState } from "react";



export default function(){
    const[state,setState]= useState("");
    const[flag,setFlag]=useState(false);
    let check=()=>
    {
            var y=Date.year;
            if(y>=21 || y<=25)
           { setFlag("true") }
            else
            {setFlag("false")}

    }
    let submit =(e)=>{
          if(flag==true)
          {setState("Data submitted sucessfully")}
          else
          { setState("invalid data entered")}
    }
    let check1 =()=>{
        if(this.target.value=12)
        {
           setFlag("true")
        }
        else
        {
            setFlag("false")
        }

    }
    let check2 =()=>{
        if(this.target.value=12)
        {
           setFlag("true")
        }
        else
        {
            setFlag("false")
        }

    }
   
    return(
        <div>   
               
               Enter Birth date :
               <input type="Date" onChange={check}/> <br/>
               Enter PRN :
               <input type="number" name="no" onChange={check1} required/> 
               <br/>
               Enter Aadhar no :
               <input type="number" name="no" onChange={check1}  required/>
               <br/>
                
              <button onClick={submit} > Register </button>
              <p>{state}</p>

              
              
                
        </div>


    )

}