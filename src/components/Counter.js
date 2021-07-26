import React, { Component } from 'react'

class Counter extends Component{
  render(){
    return(
      <>
      <div id="counter">
        <h1>Counter: {this.props.counter}</h1>
      </div>
      </>
    )
  }
}

export default Counter