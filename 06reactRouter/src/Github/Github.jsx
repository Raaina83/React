import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         // console.log(data);
    //         setData(data);
    //     })
    // });

    const data = useLoaderData();
    return(
        <div className="text-4xl text-center bg-gray-300 p-4 m-4">Github Followers {data.followers}
            <img src={data.avatar_url} className="h-[300px] m-4" alt="Git profile"></img>
        </div>
    )
};

export default Github;

export const githubInfo = async() =>{
    const res = await fetch('https://api.github.com/users/hiteshchoudhary');
    return res.json();
};