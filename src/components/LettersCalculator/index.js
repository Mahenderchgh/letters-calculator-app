// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputElement: ''}

  onClickletters = event => {
    const {value} = event.target

    this.setState({inputElement: value})
  }

  render() {
    const {inputElement} = this.state
    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">
            Calculate the <br />
            Letters you <br />
            enter
          </h1>
          <div className="input-phrase-container">
            <label className="label" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="text"
              id="phraseText"
              placeholder="Enter the phrase"
              className="input-element"
              value={inputElement}
              onChange={this.onClickletters}
            />
          </div>
          <p className="letter-count">No.of letters: {inputElement.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
