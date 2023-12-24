import { useEffect, useState } from "react";

export default function Joker(){
    let URL = "https://official-joke-api.appspot.com/random_joke";

    let newJoke = async () =>{
       let res = await fetch(URL);
       let jsonRes  = await res.json();
       console.log(jsonRes);
       setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline});
    } 

    useEffect(() =>{async function firstJoke(){
        let res = await fetch(URL);
        let jsonRes  = await res.json();
        console.log(jsonRes);
        setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline});
    }
    firstJoke();
    }, []);

    let [joke,setJoke] = useState({});

    return(
        <div>
            <h3>Joker!</h3>
            <h4>{joke.setup}</h4>
            <h4>{joke.punchline}</h4>
            <button onClick={newJoke}>Get a Joke</button>
        </div>
    )
}