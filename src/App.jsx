import { useState, useCallback, useEffect ,useRef } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0);
  const [passwordLength, setpasswordLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const [backgroud, setbackgroud] = useState("Black");


  // useRef hook
  const passwordRef= useRef(null)

  const copyPasswordToClipBoard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
  },[password])


  // useEffect(()=>{

  // },[password])


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-+=[]{}~";
    }

    for (let i = 0; i < passwordLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char)
    }

    setpassword(pass)


  }, [passwordLength, numberAllowed, charAllowed, setpassword])

  useEffect(()=>{
    passwordGenerator();
  },[passwordLength,numberAllowed,charAllowed,passwordGenerator])


  let myob = {
    username: "Rajan",
    age: 21
  }
  let newArray = [1, 2, 3, 4];

  return (
    <>
      <div className='w-[1200px] h-screens duration-150' style={{ backgroundColor: backgroud }}>
        <div>
          <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4'>Tailwind test</h1>
          <div className='flex flex-row ml-12'>
            <Card username='mychanne' someobj={newArray} btnText="click me" />
            <Card username='neChannel' someobj={newArray} />
            <div className='max-w-md w-400px mx-8 shadow-md rounded-md px-4 py-2 text-orange-500 bg-gray-800'>
              passwordGenerator
              <div className='flex shadow rounded-md overflow-hidden mb-4'>
                <input type='text'
                  value={password}
                  className='outLine-none w-full py-1 px-3'
                  placeholder='password'
                  readOnly 
                  ref={passwordRef}
                  />

                <button onClick={copyPasswordToClipBoard}
                className='outline-none bg-blue-400 text-white px-2 py-0.2 shrink-0'>copy</button>
              </div>

              <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                  <input type='range' min={8} max={50} value={passwordLength} className='cursor-pointer'
                    onChange={(e) => {
                      setpasswordLength(e.target.value);
                    }}
                  />
                  <label>Length:{passwordLength}</label>

                </div>
                <div className='flex items-center gap-x-1'>
                  <input type='checkbox' defaultChecked={numberAllowed} id='numberInput'
                    onChange={()=>{
                      setnumberAllowed((prev)=>!prev)}
                    }
                  />
                  <label htmlFor='numberInput'>Number</label>
                </div>

                <div className='flex items-center gap-x-1'>
                  <input type='checkbox' defaultChecked={charAllowed} id='charInput'
                    onChange={()=>{
                      setcharAllowed((prev)=>!prev)}
                    }
                  />
                  <label htmlFor='charInput'>character</label>
                </div>

              </div>

            </div>
          </div>



          <div className='fixed flex flex-row justify-center align-middle bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center bg-white p-4 rounded-xl'>
              <button onClick={() => setbackgroud("red")}
                className='outline-none px-4 text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
              <button onClick={() => setbackgroud("blue")}
                className='outline-none px-4 text-white shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>
              <button onClick={() => setbackgroud("green")}
                className='outline-none px-4 text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
              <button onClick={() => setbackgroud("yellow")}
                className='outline-none px-4 text-white shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
              <button onClick={() => setbackgroud("orange")}
                className='outline-none px-4 text-white shadow-lg' style={{ backgroundColor: "Orange" }}>Orange</button>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default App
