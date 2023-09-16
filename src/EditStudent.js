import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Store from "./Store";

function Editstu() {
    const Navigate = useNavigate();
    const LocationData = useLocation();
    const indexData = LocationData.state.index;
    const [ContextData] = useContext(Store);
    console.log(LocationData.state.index);
    console.log(ContextData);

    const Obj = {
        Name: ContextData[indexData].Name,
        Age: ContextData[indexData].Age,
        Course: ContextData[indexData].Course,
        Batch: ContextData[indexData].Batch,
    };
    console.log(Obj);

    const handleChange = (a) => {
        Obj[a.target.name] = a.target.value;
    };

    const handleSubmit = () => {
        ContextData[indexData] = Obj;
        console.log("function runed");
        Navigate(-1);
    };
    return (
        <div className="studentDetail">
            <h1>Edit Your Data</h1>
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
                <button onClick={() => Navigate("/Addstudents")} className="Cancel">Cancel</button>


                <button onClick={handleSubmit} className="update2">Update</button>

            </div>
        </div>
    );
}
export default Editstu;
