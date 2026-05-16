import React, {useState} from 'react'

// const App = () => {
//   const [num, setNum] = useState(0)
//   const btnClicked= ()=>{
//     console.log("Button Clicked")
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App

const App = () => {
  const [num, setNum] = useState({user:"Aryan", age: 21})
  const btnClicked= ()=>{
    const newNum = {...num};
    newNum.age=22;
    newNum.user="Rohan";
    setNum(newNum);
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App