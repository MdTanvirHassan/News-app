import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import {Route, Routes,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


import './App.css';

export class App extends Component {
  pageSize=11

  state = {
    progress:0
  }
  setProgress=(progress)=> {
  this.setState({progress:progress})
}
  render() {
    return (
      <div className=''>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <Routes>
        
          <Route exact path="/" element={<News setProgress={this.setProgress}  key='home' pageSize={this.pageSize} country="us" category='general'/>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress}  key='business' pageSize={this.pageSize} country="us" category='business'/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key='entertainment' pageSize={this.pageSize} country="us" category='entertainment'/>}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress}  key='general' pageSize={this.pageSize} country="us" category='general'/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress}  key='science' pageSize={this.pageSize} country="us" category='science'/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  key='sports' pageSize={this.pageSize} country="us" category='sports'/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress}  key='health' pageSize={this.pageSize} country="us" category='health'/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress}  key='technology' pageSize={this.pageSize} country="us" category='technology'/>}/>
          <Route exact path="/About" element={<News setProgress={this.setProgress}  key='about' pageSize={this.pageSize} country="us" category=''/>}/>
        
        </Routes>
      </div>
    )
  }
}

export default App

