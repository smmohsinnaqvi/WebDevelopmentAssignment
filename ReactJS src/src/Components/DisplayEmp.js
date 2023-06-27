let DisplayEmp=(ps)=>{

    return(<div>
        <h2>Employee Details : </h2>
        <table border={1}>
            <tr>
                <th>Emp ID</th>
                <th>Name</th>
                <th>Salary</th>

            </tr>
            {
                ps.emp.map(v=>{return <tr key={v.eid}><td>{v.eid}</td><td>{v.name}</td><td>{v.sal}</td></tr>})
            }
        </table>
    </div>)
}

DisplayEmp.defaultProps={emp:[{eid:101,name:"Ashwin",sal:20000}]}

export default DisplayEmp;
