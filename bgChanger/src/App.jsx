import { useState } from 'react'


function App() {
  const [color, setColor] = useState("");
  return (
      <div className="w-full h-screen duration-100"
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 duration-1'>
        <div className='w-100 h-screen flex justify-center items-center gap-5'>
          <input type='color' id='colorPicker' onMouseOver={() => setColor(document.getElementById("colorPicker").value)}></input>
          {/* <button onClick={() => setColor(document.getElementById("colorPicker").value)} className='outline-none px-5 py-3 rounded-full text-white shadow-lg bg-fuchsia-700 hover:bg-fuchsia-900'>Change</button> */}
          </div>
      </div>
      </div>
  )
}

export default App
