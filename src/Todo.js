import React from 'react'



const age = 100;
let name = "Ilkin";
export default function Todo() {
  return (
    <div>
      <ul style={{
        backgroundColor:'springgreen',
        padding:'20px',
        border:'2px solid deeppink',
        width:"50%",
        margin:"auto",
        marginTop:"100px"
      }}>
        <li>Your age is {age}</li>
        <li>Your Name is {name}</li>
        <li>Write Code</li>
        <li>Read Book</li>
        <li>Play Court Tennis</li>
      </ul>
    </div>
  )
}
