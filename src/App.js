import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import {Route, Routes,} from "react-router-dom";

import './App.css';

export class App extends Component {
  render() {
    return (
      <div className=''>
        <NavBar />
        <Routes>
        
          <Route exact path="/" element={<News key='home' pageSize={12} country="us" category='general'/>}/>
          <Route exact path="/business" element={<News key='business' pageSize={12} country="us" category='business'/>}/>
          <Route exact path="/entertainment" element={<News key='entertainment' pageSize={12} country="us" category='entertainment'/>}/>
          <Route exact path="/general" element={<News key='general' pageSize={12} country="us" category='general'/>}/>
          <Route exact path="/science" element={<News key='science' pageSize={12} country="us" category='science'/>}/>
          <Route exact path="/sports" element={<News key='sports' pageSize={12} country="us" category='sports'/>}/>
          <Route exact path="/health" element={<News key='health' pageSize={12} country="us" category='health'/>}/>
          <Route exact path="/technology" element={<News key='technology' pageSize={12} country="us" category='technology'/>}/>
          <Route exact path="/About" element={<News key='about' pageSize={12} country="us" category=''/>}/>
        
        </Routes>
      </div>
    )
  }
}

export default App

