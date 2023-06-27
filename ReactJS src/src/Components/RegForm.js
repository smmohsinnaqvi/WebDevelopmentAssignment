import { useReducer } from "react";

const initialState={
    eid :"",
    pwd:"",
    gender:"",
    city:"",
    flag:false
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

let Regform=()=>
{
    const[reg,dispatch]=useReducer(reducer,initialState);

    let submitForm=(e)=>
    {
        e.preventDefault()
        if(reg.flag==true)
        console.log(JSON.stringify(reg));
        else
        console.log("Information can't be shown here")
    }
    
    return(<div className="container">
        <h1>REGISTRATION FORM</h1>
        <form className="row mb-3">
            Enter E-Mail :
            <input type="email" name="eid" value={reg.eid}
            onChange={(e)=>{dispatch({type:'update', fld:'eid',value:e.target.value})}}></input>

            Enter Password :
            <input type="text" name="pwd" value={reg.pwd} onChange={(e)=>{dispatch({type:'update', fld:'pwd',value:e.target.value})}}></input>

            Enter Gender :
            <select name="gender" onChange={(e)=>{dispatch({type:'update',fld:'gender',value:e.target.value})}}>
                <option value={reg.gender}>Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>

            Enter City :
            <input type="text" name="city" value={reg.city} onChange={(e)=>{dispatch({type:'update', fld:'city',value:e.target.value})}}></input>

            <div>

            <input type="checkbox" name="flag" checked={reg.flag} onChange={(e)=>{dispatch({type:'update',fld:'flag',value:e.target.checked})}}></input>I agree to the Form
            </div>

            <button className=" bg-primary" type="submit" onClick={(e)=>{submitForm(e)}} >SUBMIT</button>
        </form>
    </div>)

}

export default Regform;