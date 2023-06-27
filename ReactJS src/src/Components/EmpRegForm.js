import { useReducer, useState } from "react";

const initialState={
    empid:0,
    ename:"",
    job:"",
    deptno:0
};

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'update':
            return {...state,[action.fld]:action.value}
        case 'clear' :
            return initialState;
    }
}



let EmpRegForm=()=>
{
    const[reg,dispatch]=useReducer(reducer,initialState);
    const[msg,setMsg]=useState("...");

    let submitForm=(e)=>
    {
        e.preventDefault()
        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({empid:reg.empid, ename:reg.ename,job:reg.job,deptno:reg.deptno})
        }
    

    fetch("http://localhost:9000/insertemp",reqOptions)
    .then(resp=>resp.text())
    .then(data=>setMsg(data))
    }
    return(<div className="container">
        <h1>REGISTRATION EMPLOYEE</h1>
        <form className="row mb-3">
            Enter Employee ID :
            <input type="number" name="empid" value={reg.empid}
            onChange={(e)=>{dispatch({type:'update', fld:'empid',value:e.target.value})}}></input>

            Enter Name :
            <input type="text" name="ename" value={reg.ename} onChange={(e)=>{dispatch({type:'update', fld:'ename',value:e.target.value})}}></input>

            Enter Job :
            <input type="text" name="job" value={reg.job} onChange={(e)=>{dispatch({type:'update',fld:'job',value:e.target.value})}}></input>

            Enter Department :
            <input type="text" name="deptno" value={reg.deptno} onChange={(e)=>{dispatch({type:'update', fld:'deptno',value:e.target.value})}}></input>

            <button className=" bg-primary" type="submit" onClick={(e)=>{submitForm(e)}} >SUBMIT</button>
        </form>
        <div style={{display:'block'}}>
                {msg}
        </div>
    </div>)

}

export default EmpRegForm;