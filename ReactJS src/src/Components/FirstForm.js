import { useReducer, useState } from "react";

const initialState = {
    uname: "",
    pwd: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value };
        case 'reset':
            return initialState;
    }
}


export default function FirstForm() {
    const [user, dispatch] = useReducer(reducer, initialState);
    const[flag,setFlag]=useState(false);
    
    return (
        <div>
            <h1>LOGIN</h1>
            <form className="row mb-3">
                Enter Username :
                <input type="text" name="uname" value={user.uname} onFocus={()=>{setFlag(false)}}
                    onChange={(e) => { dispatch({ type: 'update', fld: 'uname', value: e.target.value }) }}
                ></input>
                <br />
                Enter Password :
                <input type="text" name="pwd" value={user.pwd}
                    onChange={(e) => { dispatch({ type: 'update', fld: 'pwd', value: e.target.value }) }}></input>
                <button className="btn bg-primary" type="button" onClick={(e)=>{setFlag(true)}}>LOGIN</button>
            </form>

            <h1 style={{display:flag?'block':'none'}}>Welcome ,{user.uname}</h1>
        </div>
    )
}