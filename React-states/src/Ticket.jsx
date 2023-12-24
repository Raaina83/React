import Ticketnum from "./TicketNum";
import  "./Ticket.css";


export default function Ticket({ticket}){
    // console.log("ticket" ,ticket);
    return (
        <div className="ticket">
            {ticket.map((num, idx) =>(
                <Ticketnum num={num} key={idx}></Ticketnum>
             ))} 
        </div>
    );
}