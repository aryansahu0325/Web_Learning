import React from 'react'
import Card from './Components/card'
import Navbar from './Components/navbar'

export default function App() {
  return (
    // <div>
    //     <div className="card">
    //         <h2>Aryan Sahu</h2>
    //         <p>B.tech CSE Prefinal year Student at Galgotias University.</p>
    //     </div>
    //     {Card()}
    // </div>
    <div>
        <Navbar />
        <br></br>
        <Navbar />
        <br></br>
        <Card />
        <br></br>
        <Card />
        <br></br>
        <Card />
        <br></br>
        
    </div>
  )
}
