import React, { Component } from 'react'

class PlayAgain extends Component{
    reloadPage = () => {
        setTimeout(()=>{
          window.location.reload(false);
        }, 500);
      }

  render(){
    return(
      <>
      <div>
        <button id="button" type="button" onClick={this.reloadPage}>Play Again</button>
      </div>
      </>
    )
  }
}
export default PlayAgain