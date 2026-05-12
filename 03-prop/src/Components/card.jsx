import React from 'react'

export default function Card(props) {
  return (
        <div className="card">
        <h2>{props.user},{props.age}</h2>
        <img src={props.img} alt="Profile Picture" />
        <p>Software Engineer: B.Tech CSE Student at Galgotias University </p>
        <button>View Profile</button>
      </div>
  )
}

