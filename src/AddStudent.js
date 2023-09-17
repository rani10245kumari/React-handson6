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

            <fieldset className="form">
                <legend>NAME</legend>
                <label htmlFor="name" />
                <input
                    type="text"
                    id="name"
                    name="Name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                />
            </fieldset>
            <br></br>
            <br></br>

            <fieldset className="form">
                <legend>AGE</legend>
                <label htmlFor="age" />
                <input
                    type="number"
                    id="age"
                    name="Age"
                    placeholder="Enter your age"
                    onChange={handleChange}
                />
            </fieldset>
            <br></br>
            <br></br>
            <fieldset className="form">
                <legend>COURSE</legend>
                <label htmlFor="name" />
                <input

                    type="text"
                    id="name"
                    name="Course"
                    placeholder="Enter your course"
                    onChange={handleChange}
                />
            </fieldset>
            <br></br>
            <br></br>

            <fieldset className="form">
                <legend>BATCH</legend>
                <label htmlFor="name" />
                <input
                    type="text"
                    id="name"
                    name="Batch"
                    placeholder="Enter your batch"
                    onChange={handleChange}
                />
            </fieldset>
            <br></br>
            <br></br>
            <div id="buttons" className="update">
                <button onClick={() => Navigation("/Students")} className="Cancel">Cancel</button>
                <button onClick={handleSubmit} className="update2">ADD</button>
            </div>
        </div>
    );
}
export default Addstu;
