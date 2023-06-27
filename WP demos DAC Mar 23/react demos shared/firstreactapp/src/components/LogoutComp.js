import { useDispatch } from "react-redux"
import { logout } from "./loggedslice"

export default function LogoutComp () {

    let dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>{dispatch(logout()) }}> Logout </button>
        </div>
    )
}