import React, {useState} from 'react'

export default function App() {
  const [num, setnum] = useState(0)
  function increaseNum(){
    setnum(num+1)
  }
  function decreaseNum(){
    setnum(num-1)
  
  }
  function jumpNum(){
    setnum(num+10)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpNum}>Jump</button>
    </div>
  )
}
