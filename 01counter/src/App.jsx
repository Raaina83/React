import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Alert from './Alert';

function App() {
  let [count, setCount] = useState(1);

  let incVal = () =>{
    setCount((prevCount) =>{
      if(prevCount<20){
        return (count+1);
      } else{
        return count;
      }
    });
    console.log(count);
  }

  let decVal = () =>{
    setCount((prevCount) =>{
      if(prevCount>0){
        return (count - 1);
      } else{
        return count;
      }
    });
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter: {count}</h2>

      <button onClick={incVal}>Increment value</button>
      <br/>
      <br/>
      <button onClick={decVal}>Decrement Value</button>
    </>
  )
}

export default App
