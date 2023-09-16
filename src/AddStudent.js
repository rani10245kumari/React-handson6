import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Store from "./Store";
function Addstu() {
    const [received] = useContext(Store);
    const Navigation = useNavigate();

    const Obj = {
        Name: "",
        Age: "",
        Course: "",
        Batch: "",
    };
    console.log(Obj);

    const handleChange = (e) => {
        Obj[e.target.name] = e.target.value;
    };

    const handleSubmit = () => {
        received.push(Obj);
        Navigation("/Students");
    };
    return (
        <div className="studentDetail">
            <h1>ADD NEW STUDENT</h1>
            <label htmlFor="name" />
            <input
                className="form"
                type="text"
                id="name"
                name="Name"
                placeholder="Enter your name"
                onChange={handleChange}
            />
            <br></br>
            <br></br>

            <label htmlFor="age" />
            <input
                className="form"
                type="number"
                id="age"
                name="Age"
                placeholder="Enter your age"
                onChange={handleChange}
            />
            <br></br>
            <br></br>

            <label htmlFor="name" />
            <input
                className="form"
                type="text"
                id="name"
                name="Course"
                placeholder="Enter your course"
                onChange={handleChange}
            />
            <br></br>
            <br></br>

            <label htmlFor="name" />
            <input
                className="form"
                type="text"
                id="name"
                name="Batch"
                placeholder="Enter your batch"
                onChange={handleChange}
            />
            <br></br>
            <br></br>
            <div id="buttons" className="update">
                <button onClick={() => Navigation("/Students")} className="Cancel">Cancel</button>
                <button onClick={handleSubmit} className="update2">Update</button>
            </div>
        </div>
    );
}
export default Addstu;
