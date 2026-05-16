import React, {useState} from 'react'

const App = () => {

  const [first, setfirst] = useState("")

  const submitHandler =(e) =>{
    e.preventDefault();
    console.log('Form submitted');

    setfirst("");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text"
        placeholder='Enter your name'
        value={first}
        onChange={(e) =>{
          setfirst(e.target.value);
        }} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App