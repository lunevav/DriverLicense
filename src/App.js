import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'

class App extends Component {
  render() {
    console.log('[App][Render]');
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;
