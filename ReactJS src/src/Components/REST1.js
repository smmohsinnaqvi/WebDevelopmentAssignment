import { useEffect, useState } from "react";

export default function REST1() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json())
            .then(users => setUsers(users))
    }, []);

    return (
        <div>
            <h1>USERS : </h1>
            <table className="table table-bordered table-hover">

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>E-mail</th>
                    <th>City</th>
                    <th>ZipCode</th>

                </tr>
                {
                    users.map(v => {
                        return (
                            <tbody>

                            <tr>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.username}</td>
                                <td>{v.email}</td>
                                <td>{v.address.city}</td>
                                <td>{v.address.zipcode}</td>

                            </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}