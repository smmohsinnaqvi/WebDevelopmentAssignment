import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./loggedslice";
import LogoutComp from "./LogoutComp";

export default function LoginComp () {

    let dispatch = useDispatch();
    let mystate = useSelector((state)=>state.logged)

    //const [msg, setMsg] = useState()

    return (
        <div>
            <div>
                <h1> Login Form </h1>
                <form style={{display: mystate.loggedIn?"none":"block"}}>
                    Uid  : 
                    <input type="text" name="uid"  />
                    <br/>
                    Pwd : 
                    <input type="password" name="pwd"  /> <br/>
                    <input type="button" value="Login"
                    onClick={()=>{dispatch(login())}} />
                </form>
            </div>

            <div style={{display: mystate.loggedIn?"block":"none"}}>
                <LogoutComp />
            </div>

            <p> Logged in status : {mystate.loggedIn.toString()} </p>
        </div>
    )
}