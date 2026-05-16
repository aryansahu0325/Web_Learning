import React from 'react'

export default function () {
  function btnClicked() {
    console.log('Button Clicked')
  }
  return (
    <div>
      <h1>Hello Aryan</h1>

      <button onClick={btnClicked}>Change Here</button>
    </div>
  )
}

