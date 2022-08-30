// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    text: 'Count is Even',
  }

  onIncrement = () => {
    const {text} = this.state
    console.log('jj')
    const randomNumberIndex = Math.floor(Math.random() * 101)
    console.log(randomNumberIndex)
    this.setState(prevState => ({count: randomNumberIndex}))
    if (randomNumberIndex % 2 === 0) {
      this.setState({text: 'Count is Even'})
    } else {
      this.setState({text: 'Count is Odd'})
    }
  }

  render() {
    const {count, text} = this.state
    return (
      <div className="container">
        <h1 className="count-title">Count {count}</h1>
        <p>{text}</p>
        <button onClick={this.onIncrement}>Increment</button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
