import axios from 'axios'

const App = () => {

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //   console.log(data)
  // }

  // const getData =async () => {
  //   const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const data = await response.json()
  //   console.log(data)
  // }
 
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    const data = response.data
    console.log(data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App