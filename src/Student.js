import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Store from "./Store";

export default function Students() {
    const [Receive] = useContext(Store);
    const Navigate = useNavigate();
    console.log(Receive);

    function Navigat() {
        Navigate("/AddStudent");
    }

    return (
        <>
            <p className="Stname">Students Details</p>
            <buton onClick={Navigat} className="btn1">Add New Student</buton>
            <table border={3} className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {Receive.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td>
                                <NavLink to="/EditStudent" state={{ index }}>
                                    Edit
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
