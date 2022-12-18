import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import {Route, Routes,} from "react-router-dom";

import './App.css';

export class App extends Component {
  pageSize=12
  render() {
    return (
      <div className=''>
        <NavBar />
        <Routes>
        
          <Route exact path="/" element={<News key='home' pageSize={this.pageSize} country="us" category='general'/>}/>
          <Route exact path="/business" element={<News key='business' pageSize={this.pageSize} country="us" category='business'/>}/>
          <Route exact path="/entertainment" element={<News key='entertainment' pageSize={this.pageSize} country="us" category='entertainment'/>}/>
          <Route exact path="/general" element={<News key='general' pageSize={this.pageSize} country="us" category='general'/>}/>
          <Route exact path="/science" element={<News key='science' pageSize={this.pageSize} country="us" category='science'/>}/>
          <Route exact path="/sports" element={<News key='sports' pageSize={this.pageSize} country="us" category='sports'/>}/>
          <Route exact path="/health" element={<News key='health' pageSize={this.pageSize} country="us" category='health'/>}/>
          <Route exact path="/technology" element={<News key='technology' pageSize={this.pageSize} country="us" category='technology'/>}/>
          <Route exact path="/About" element={<News key='about' pageSize={this.pageSize} country="us" category=''/>}/>
        
        </Routes>
      </div>
    )
  }
}

export default App

