import { useState } from 'react';
// import './App.css';

function App() {
  let [color, setColor] = useState("teal");

  return (
   
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex justify-center bottom-12 inset-x-0 px-2'>
        <div className='rounded-xl bg-white p-2'>
        <button className='bg-red-500 text-white rounded outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("red")}>Red</button>
        <button className='bg-green-500 text-white outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("green")}>Green</button>
        <button className='bg-blue-500 text-white outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("blue")}>Blue</button>
        <button className='bg-white text-black outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("white")}>White</button>
        <button className='bg-yellow-500 text-white outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("yellow")}>Yellow</button>
        <button className='bg-gray-500 text-white outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("gray")}>Gray</button>
        <button className='bg-pink-500 text-white outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("pink")}>Pink</button>
        <button className='bg-purple-500 text-white outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("purple")}>Purple</button>
        <button className='bg-teal-400 text-white outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("teal")}>teal</button>
        <button className='bg-black text-white outline-none px-4 py-1 rounded-lg mr-2' onClick={() => setColor("black")}>Black</button>
      </div>
      </div>
      </div>

   
  )
}

export default App
