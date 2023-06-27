import { useReducer, useState } from "react"

const initialState={
    empid:0,
    email:""
}

const reducer=(state,action)=>
{
    switch(action.type)
    {   
        case 'update':
        return{...state,[action.fld]:action.value}
    }
}


let UpdateEmp=()=>{
    const[emp,dispatch]=useReducer(reducer,initialState);
    const[msg,setMsg]=useState("...");
    
    let submitForm=(e)=>
    {
        e.preventDefault();

        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({empid : emp.empid, email:emp.email})
        }
        fetch("http://localhost:9000/update",reqOptions)
        .then(res=>res.text())    
        .then(data=>setMsg(data))
 
    }

    return(<div className="container">
        <h1>Update Email</h1>
        <form className="row mb-3">
            Enter Employee ID :
            <input type="number" name="empid" value={emp.empid
            } onChange={(e)=>{dispatch({type:'update', fld:'empid',value:e.target.value})}}></input>

            Enter New Email :
            <input type="text" name="email"value={emp.email}onChange={(e)=>{dispatch({type:'update',fld:'email',value:e.target.value})}}></input>
            <button className=" bg-primary" type="submit" onClick={(e)=>{submitForm(e)}} >SUBMIT</button>
            
        </form>
        <p>{msg}</p>
    </div>)
}

export default UpdateEmp;