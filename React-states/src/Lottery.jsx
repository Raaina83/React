import { useState } from "react";
import {genTicket,sum} from "./helper.js";
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondn}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning  = winCondn(ticket);

    let newTicket = () =>{
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery</h1>
            <Ticket ticket={ticket}></Ticket>
            <br></br>
            <button onClick={newTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations,you won a lottery"}</h3>
        </div>
    )
}