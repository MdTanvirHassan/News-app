import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';

export class App extends Component {
  render() {
    return (
      <div className=''>
        <NavBar />
        <News />
      </div>
    )
  }
}

export default App

