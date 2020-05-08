import React from "react";

function ResultTable(props) {
    return (
        <div className="container">
            <table className="table table-bordered table-dark shadow">
                <thead>
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col"><button className="badge badge-primary" name="first"  value={props.results} onClick={props.sortColumn}>First</button></th>
                        <th scope="col"><button className="badge badge-primary" name="last"  value={props.results} onClick={props.sortColumn}>Last</button></th>
                        <th scope="col"><button className="badge badge-primary" name="email"  value={props.results} onClick={props.sortColumn}>Email</button></th>
                        <th scope="col"><button className="badge badge-primary" name="location" value={props.results} onClick={props.sortColumn}>Location</button></th>

                    </tr>
                </thead>
                <tbody>



                    {props.results.map(result => (
                        <tr key={result.login.uuid}>
                            <td><img alt="employee" src={result.picture.thumbnail}></img></td>
                            <td>{result.name.first}</td>
                            <td>{result.name.last}</td>
                            <td>{result.email}</td>
                            <td>{result.location.country}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;
