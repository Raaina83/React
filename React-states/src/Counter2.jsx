import { useState, useEffect } from "react"

export default function Counter2(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);
    
    let incCountx  = () =>{
        setCountx(currCount =>{
            return currCount + 1;
        })
    }

    let incCounty  = () =>{
        setCounty(currCount =>{
            return currCount + 1;
        })
    }

    useEffect(function printSmt(){
        console.log("use effect triggered");
    }, []);

    return(
        <>
        <h3>Count = {countx}</h3>
        <button onClick={incCountx}>+1</button>

        <h3>Count = {county}</h3>
        <button onClick={incCounty}>+1</button>
        </>
    )
}