import { useState } from "react"

export default function Form(){

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
    });

    let inputHandler = (event) =>{
        // let fieldName = event.target.name;
        // let fieldValue  = event.target.value;

        setFormData((currData) =>{
            // currData[fieldName] = fieldValue;
            return {...currData, [event.target.name] : event.target.value};
        });
    }

    return (
        <div>
            <form>
                <label htmlFor="fullName">Full Name:  </label>
                <input placeholder="enter something" value={formData.fullName} onChange={inputHandler} name="fullName" id="fullName"></input>
                <br></br><br></br>
                <label htmlFor="userName">Username:  </label>
                <input placeholder="enter something" value={formData.userName} onChange={inputHandler} name="userName" id="userName"></input>
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}