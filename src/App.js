import './App.css';
import LoadingBar from 'react-top-loading-bar';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY

  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <NavBar />
        <div>
          {/* In case of v5 router, we use Switch inplace of Routes */}
          <Routes>
            <Route exact path='/' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" />} />
            <Route exact path='/business' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} country="in" category="business" />} />
            <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route exact path='/general' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" />} />
            <Route exact path='/health' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} country="in" category="health" />} />
            <Route exact path='/science' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} country="in" category="science" />} />
            <Route exact path='/sports' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} country="in" category="sports" />} />
            <Route exact path='/technology' element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} country="in" category="technology" />} />
            {/* Below code for v5 Router */}
            {/* <Route exact path='/technology'><News setProgress = {this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} country="in" category="technology" /></Route> */}
          </Routes>
        </div>
      </>
    );
  }
}
