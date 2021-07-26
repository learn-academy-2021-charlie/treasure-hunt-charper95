import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'
import Counter from './components/Counter'
import PlayAgain from './components/PlayAgain'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      counter: 5
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    this.setState({ treasureLocation: treasure })
    let bomb = Math.floor(Math.random() * this.state.board.length)
    this.setState({ bombLocation: bomb})
  }

  handleGamePlay = (index) => {
    const {board} = this.state

    if(this.state.counter >= 1) {
      this.setState({counter: this.state.counter - 1})
    }

    if(index === this.state.treasureLocation){
      board[index] = "💎"
      this.setState({board: board})
      window.setTimeout(() => {
        alert("You Win!");
        window.location.reload(true);
      }, 500)
    } else if (index === this.state.bombLocation){
      board[index] = "💣"
      this.setState({board: board})
      window.setTimeout(() => {
        alert("You Lose!");
        window.location.reload(true);
      }, 500)
    } else {
      board[index] = "🌴"
      this.setState({board: board})
    }

    if(this.state.counter === 1 && this.state.treasureLocation !== "💎" && this.state.bombLocation !== "💣") {
      window.setTimeout(() => {
        alert("You Lose!");
        window.location.reload(true);
      }, 500)
    }
  }

  render(){
    console.log(this.state.treasureLocation)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id="gameboard">
          {this.state.board.map((value, index) => {
            return (
              <Square 
                value={value} 
                key={index} 
                index={index}
                handleGamePlay={this.handleGamePlay}
              />
            )
          })}
        </div>
        <div>
          <Counter 
            counter={this.state.counter}
          />
        </div>
        <div>
          <PlayAgain/>
        </div>
      </>
    )
  }
}
export default App
