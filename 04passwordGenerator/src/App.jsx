import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  let [length, setLength] = useState(8);
  let [numAllowed, setNumAllowed] = useState(false);
  let [charAllowed, setCharAllowed] =  useState(false);
  let [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str+= "1234567890";
    if(charAllowed) str+= "!@#$%^&*()-+=><,.?/";

    for(let i=1; i<=length; i++){
      let chr = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(chr);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword]);

  let copyToClipboard = () =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() =>{
    passwordGenerator();
  }, [length,numAllowed, charAllowed,passwordGenerator]);

  return (
    <>
      <div className="w-[480px] mx-auto rounded-md bg-gray-800 px-6 py-3 my-10 text-center shadow-md">
      <h1 className="text-xl text-white">Password Generator</h1>
      <div className="flex shadow rounded-md overflow-hidden my-4">
        <input value={password} placeholder="Password" type="text" readOnly className="outline-none w-full px-4  py-1 " ref={passwordRef}/>
        <button className="text-white px-3 py-0.5 bg-blue-700  outline-none" onClick={copyToClipboard}>Copy</button>
      </div>
      <div className="flex justify-center gap-x-2 text-sm">
        <div className="flex gap-x-1 items-center">
          <input type="range" value={length} min={6} max={38} onChange={(e) => {setLength(e.target.value)}} className="cursor-pointer"/>
          <label className="text-white">Lenght({length})</label>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox" onChange={() =>{setNumAllowed((prev)=>!prev)}} defaultChecked={numAllowed} id="numInp"/>
          <label className="text-white" htmlFor="numInp">Number</label>
        </div>
        <div className="flex gap-x-2 items-center">
          <input type="checkbox"  onChange={() =>{setCharAllowed((prev)=> !prev)}} defaultChecked={charAllowed}  id="charInp"/>
          <label className="text-white" htmlFor="charInp">Character</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
