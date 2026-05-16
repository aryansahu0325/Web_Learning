import React from 'react'


const App = () => {

  localStorage.clear() // clear all localStorage data
  sessionStorage.clear() // clear all sessionStorage data
  localStorage.setItem('name', 'Aryan Sahu') // set a key-value pair in localStorage
  const user=localStorage.getItem('name') // set another key-value pair in localStorage
  console.log(user) // get the value of the key 'name' from localStorage and log it to the console
  return (
    <div>App</div>
  )
}

export default App