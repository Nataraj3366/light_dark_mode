// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickMode = () => {
    const {isDarkMode} = this.state
    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    const {isDarkMode} = this.state

    return (
      <div>
        {isDarkMode ? (
          <div className="app-container light ">
            <h1>Click To Change Mode</h1>
            <button type="button" className="button" onClick={this.onClickMode}>
              Light Mode
            </button>
          </div>
        ) : (
          <div className="app-container dark">
            <h1>Click To Change Mode</h1>
            <button type="button" className="button" onClick={this.onClickMode}>
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
