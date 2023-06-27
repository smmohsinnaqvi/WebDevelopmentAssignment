import {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';

export default function CountIncDec(){
    let dispatch=useDispatch();
    let myState= useSelector((state)=>state.myFun);

    return (
        <div>
            <h1>Increment/Decrement Counter</h1>
            <a name="inc" >+</a>
            <input type="number" name="data" value={myState}/>
            <a name="inc" >+</a>
        </div>
    )

}
