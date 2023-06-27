
function Timer()
{
    var t = new Date();
    return(<div>
         <h1>Date & Time :{t.getDate()}-{t.getMonth()+1}-{t.getFullYear()}</h1>
         <h1>Time : {t.getHours()+1}:{t.getMinutes()+1}:{t.getSeconds()+1}</h1>
    </div>)
}
export default Timer;