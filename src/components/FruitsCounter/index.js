// Write your code here

import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onIncreaseMangoCount = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onIncreaseBananaCount = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount} = this.state
    const {bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">
            Bob ate <span className="span-item">{mangoCount} </span>
            Mangoes <span className="span-item">{bananaCount}</span> bananas
          </h1>

          <div className="img-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>

          <div className="button-container">
            <button
              onClick={this.onIncreaseMangoCount}
              className="button"
              type="button"
            >
              Eat Mango
            </button>
            <button
              onClick={this.onIncreaseBananaCount}
              className="button"
              type="button"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
