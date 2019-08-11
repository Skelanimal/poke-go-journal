import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="App">
          <Routes />
        </div>
      </div>
    )
  }
}

export default App
