import React, { Component } from 'react'
import Child2 from './Child2'

export default class Parent2 extends Component {
    
    state = {
        name : "Mujasheer"
    }
    
  render() {
    console.log("Parent Component Rendered")
    return (
        <div>
            <Child2 name = {this.state.name} />
        </div>
    )
  }
}
