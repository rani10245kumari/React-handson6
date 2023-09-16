import React from "react";
import Students from "./Student";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Store from "./Store";
import Addstu from "./AddStudent";
import EditStu from "./EditStudent";
const Display = () => {
    const [StdData, setStdData] = useState([

        { id: 1, Name: "PIHU", Age: 32, Course: "Mern", Batch: "October", Change: "Edit" },
        { id: 2, Name: "MOMO", Age: 14, Course: "Mern", Batch: "February", Change: "Edit" },
        { id: 3, Name: "Priyanka", Age: 22, Course: "Mern", Batch: "March", Change: "Edit" },
        { id: 4, Name: "RANI", Age: 16, Course: "Mern", Batch: "APRIL", Change: "Edit", },
        { id: 5, Name: "RAHUL", Age: 26, Course: "Mern", Batch: "April", Change: "Edit" },
        { id: 6, Name: "Priti", Age: 23, Course: "Mern", Batch: "March", Change: "Edit" },
        { id: 7, Name: "HONEY", Age: 24, Course: "Mern", Batch: "March", Change: "Edit" },
        { id: 8, Name: "SONU", Age: 18, Course: "Mern", Batch: "March", Change: "Edit" },
    ]);

    return (
        <div className="Nav">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Students" element={<Store.Provider value={[StdData, setStdData]}><Students /></Store.Provider>}></Route>
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/EditStudent" element={<Store.Provider value={[StdData]}><EditStu /></Store.Provider>}></Route>
                    <Route path="/Addstudent" element={<Store.Provider value={[StdData]}><Addstu />  </Store.Provider>}></Route>
                </Routes>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/Students">Students</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </Router>
        </div>
    );
}
export default Display
