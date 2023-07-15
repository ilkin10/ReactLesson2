import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div>
            <section>
                <h1>Name {this.props.person.name}</h1>
                <h1>He/She is {this.props.person.age} years old</h1>
            </section>
      </div>
    )
  }
}
