import React, { Component } from 'react'

export default class UserImage extends Component {
  render() {
    return (
      <div style={{
        border:"2px solid black",
        padding:"20px",
        width:"50%",
        margin:"auto"
      }}>
        <h1>UserInfo</h1>
        <h3><b>{this.props.name}</b></h3>
        <img style={{width:"30%"}} src={this.props.avatar} alt='Person'></img>

      </div>
    )
  }
}
