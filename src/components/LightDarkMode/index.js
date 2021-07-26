import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    status: 'Light Mode',
    background: 'bg-dark',
    info: 'light',
  }

  changeMode = () => {
    const {status} = this.state
    if (status === 'Light Mode') {
      this.setState(prevState => ({
        status: 'Dark Mode',
        background: 'bg-light',
        info: 'dark',
      }))
    } else {
      this.setState(prevState => ({
        status: 'Light Mode',
        background: 'bg-dark',
        info: 'light',
      }))
    }
  }

  render() {
    const {status, background, info} = this.state

    return (
      <div className="bg-container">
        <div className={`container ${background}`}>
          <h1 className={`heading ${info}`}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {status}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
