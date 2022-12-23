// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    secondCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: !firstCard,
    }))
  }

  secondName = () => {
    const {secondCard} = this.state
    this.setState(() => ({
      secondCard: !secondCard,
    }))
  }

  render() {
    const {firstCard, secondCard} = this.state
    return (
      <div className="container">
        <h1 className="title">Show/Hide</h1>
        <div className="card-container">
          <div className="container2">
            <button className="btn" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="name">Joe</p> : ' '}
          </div>
          <div className="card-container">
            <div className="container2">
              <button className="btn" type="button" onClick={this.secondName}>
                Show/Hide Lastname
              </button>
              {secondCard ? <p className="name">Jonas</p> : ' '}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
