import { useState } from "react"

export default function LudoBoard(){
    let [moves,setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    let updateBlue = () =>{
        setMoves({...moves, blue: moves.blue+1});
    }
    let updateRed = () =>{
        setMoves({...moves, red: moves.red+1});
    }
    let updateYellow = () =>{
        setMoves({...moves, yellow: moves.yellow+1});
    }
    let updateGreen = () =>{
        setMoves({...moves, green: moves.green+1});
    }

    return (
        <div>
            <h3>Game Begins!</h3>
            <div className="Board">
                <p>Blue Moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor: "#4287f5"}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor: "yellow"}}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1</button>
            </div>
        </div>
    )
}