import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className='px-3 py-5 bg-cyan-200'>
        <button 
        onClick={()=>{navigate('/')}}
        className="bg-emerald-900 text-white font-medium py-2 px-5 rounded m-2 active: scale-95 "> 
        Return to Home Page 
      </button>
      
      <button 
        onClick={()=>{navigate(-1)}}
        className="bg-emerald-900 text-white font-medium py-2 px-5 rounded m-2 active: scale-95 "> 
        Return to Previous Page 
      </button>
      <button 
        onClick={()=>{navigate(+1)}}
        className="bg-emerald-900 text-white font-medium py-2 px-5 rounded m-2 active: scale-95 "> 
        Return to Next Page 
      </button>

    </div>
  )
}

export default Navbar2