import { useState } from "react"

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    let toggle = () =>{
        setIsLiked(!isLiked);
        console.log("clicked");
    }

    let heartStyle = {
        color: "red",   
    }
    return (
        <div>
            <p onClick={toggle}>
            {
                isLiked ? <i className="fa-solid fa-heart" style={heartStyle}></i>:<i className="fa-regular fa-heart"></i>
            }
            </p>
        </div>
    )
}