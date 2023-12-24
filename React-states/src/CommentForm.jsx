import { useState } from "react"

export default function CommentForm(){
    let [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating: 5,
    });

    let inputHandler = (event) =>{
        setFormData((currData) =>{
            return {...currData, [event.target.name] : event.target.value};
        });
    }

    let handleSubmit = (event) =>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            comment: "",
            rating: 5,
        });
    }

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" value={formData.username} name="username" onChange={inputHandler}></input>
                <br></br><br></br>
                <textarea value={formData.comment} placeholder="add a comment" name="comment" onChange={inputHandler}></textarea>
                <br></br><br></br>
                <input placeholder="rating" max={5} min={1} type="number" value={formData.rating} name="rating" onChange={inputHandler}></input>
                <br></br><br></br>
                <button>Add Comment</button>
            </form>
        </div>
    )
}