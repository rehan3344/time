import React from 'react'
import { useState } from 'react';

const App = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    settime(new Date().toLocaleTimeString())
  }, 1000)

  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.username.value)
    console.log("form submitted")
  }



  return (
    <div>
      <h1 className='text-center mt-10 text-5xl' >{time}</h1>
      <div className='rounded mx-auto w-[80%] mt-10 p-5 bg-zinc-200'>
        <form onSubmit={SubmitHandler} >
          <input className='p-2' name='username' placeholder='username' />
        </form>
      </div>
    </div>
  )
}

export default App