import { useEffect, useState } from "react";

export default function GetEmp() {
    const [emp, setemp] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/getemps")
            .then(resp => resp.json())
            .then(emp => setemp(emp))
    }, []);

    return (
        <div>
            <h1>EMPLOYEES : </h1>
            <table className="table table-bordered table-hover">

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Manager</th>
                    <th>Salary</th>
                    <th>Department</th>

                </tr>
                {
                    emp.map(v => {
                        return (
                            <tbody>

                                <tr>
                                    <td>{v.EMPNO}</td>
                                    <td>{v.ENAME}</td>
                                    <td>{v.JOB}</td>
                                    <td>{v.MGR}</td>
                                    <td>{v.SAL}</td>
                                    <td>{v.DEPTNO}</td>

                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}