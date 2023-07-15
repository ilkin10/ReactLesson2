// import React, { Component } from 'react'

// export default class Item extends Component {
//     name = "Elvin";
//     age = 100;
//     style = {
//         "color":"deepskyblue"
//     }
//     getFullInfo(){
//         return this.name+" "+this.age;
//     }
//   render() {
//     return (
//       <div>
//             <h1 style={this.style}>My name is {this.name}</h1>
//             <h2>I am {this.age} years old</h2>
//             <span>{this.getFullInfo()}</span>
//       </div>
//     )
//   }
// }

import React from "react";

const person = {
    name:"Elvin",
    age:24,
    theme:{
        backgroundColor:"deepskyblue",
        color:"white"
    }

    

};
function getFullInfo(){
    return person.name+" "+person.age;        
}

export default function Item() {
  return (
    <div>
      <h1 style={person.theme}>My name is {person.name}</h1>
      <h2>I am {person.age} years old</h2>
      <span>{getFullInfo()}</span>
    </div>
  );
}
