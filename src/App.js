import React, { Component } from 'react'
import Upload from './Components/upload';
import Resume from './Components/resume';

import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
  <Upload/>
<Resume/>
        </div>
      </div>
    )
  }
}


export default App;
