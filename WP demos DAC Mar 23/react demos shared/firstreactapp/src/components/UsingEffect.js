import { useEffect, useState } from "react"

export default function UsingEffect() {

    //empty - at the time of mounting
    useEffect(()=> {
        console.log("mounted"); 
        const timer = setInterval(()=>{setCurdate(new Date())} , 1000 ) 
        return ()=>{clearInterval(timer)} 
       }, [])

    //for every update
    useEffect(() => {console.log("updated")})

    //for every nm update
    //useEffect(() => {console.log("updation of nm")},[nm])

    const [cdate, setCurdate] = useState(new Date());

    return (
        <div>
            <p> Time : { cdate.getHours()+":"+cdate.getMinutes()+":"+cdate.getSeconds() } </p>
            <button onClick={()=>{ setCurdate(new Date()) }}>
                change date
            </button>
        </div>
    )
}