import { useNavigate } from "react-router-dom";

function HelloFunComp () {


    let navigate = useNavigate();

    return (
        <div>
       <h1> Hello from fun component </h1>
       <button onClick={()=>{ navigate('/dystyling') }}>Move to Dynamic styling</button>
       </div>
    )

}

export default HelloFunComp;