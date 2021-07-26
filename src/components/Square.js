import React, { Component } from 'react'



class Square extends Component{

  handleClick = () => {
    alert(this.props.handleGamePlay)
  }

  render(){
    return(
      <>
      <div id="square" onClick={this.handleClick}>
        {this.props.value}
      </div>
      </>
    )
  }
}
export default Square
