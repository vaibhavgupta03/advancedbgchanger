import { useState } from 'react'


function App() {
  const [color, setColor] = useState("");
  return (
      <div className="w-full h-screen duration-100"
      style={{ backgroundColor: color }}>
      <div className='flex flex-wrap justify-center py-40 px-2 duration-100'>
        <div className='w-100 h-60 flex flex-col justify-center items-center gap-5 bg-white rounded-2xl p-4'>
          <h1 className='text-5xl font-bold'>Background Changer</h1>
          <div className='flex gap-3'>
          <label className='text-lg font-semibold text-yellow-950'>Choose your Background Colour</label>
          <input type='color' id='colorPicker' className='rounded-lg bg-white px-1 border-2 border-black' onChange={(e) => setColor(e.target.value)}></input></div>
          </div>
      </div>
      </div>
  )
}

export default App
