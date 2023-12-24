
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'
import ToDo from './ToDo'
import Lottery from './Lottery'
import Ticketnum from './TicketNum';
import {sum} from "./helper";
import Form from './Form'
import CommentForm from './CommentForm'
import Counter2 from './Counter2';
import Joker from './Joker'

function App() {

  // let winCondn = (ticket) =>{
  //   return sum(ticket) === 15;
  // }

  return (
    <>
      {/* <Lottery n={3} winCondn={winCondn}></Lottery> */}
      <Joker/>
    </>
  )
}

export default App
