import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import News from './Components/News';

import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes, // Updated import
  Route,
} from "react-router-dom";

export default class App extends Component {
  state={
    progress:0,
  }
  setProgress=(progress)=>{
   
    
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={4}
        color="#f11946"
        progress={this.state.progress}
        
      />
          <Routes> {/* Replace Switch with Routes */}
            <Route excat path="/"  element={<News setProgress={this.setProgress}key="general" pageSize={15} country="us" category="general" />} />
            <Route excat path="/Business" element={<News setProgress={this.setProgress}key="Business" pageSize={15} country="us" category="Business" />} />
            <Route excat path="/Entertainment" element={<News setProgress={this.setProgress}key="Entertainment" pageSize={15} country="us" category="Entertainment" />} />
            <Route excat path="/Science" element={<News setProgress={this.setProgress}key="Science" pageSize={15} country="us" category="Science" />} />
            <Route excat path="/Sports" element={<News setProgress={this.setProgress}key="Sports" pageSize={15} country="us" category="Sports" />} />
            <Route excat path="/Technology" element={<News setProgress={this.setProgress}key="Technology" pageSize={15} country="us" category="Technology" />} />
            <Route excat path="/Health" element={<News setProgress={this.setProgress}key="Health" pageSize={15} country="us" category="Health" />} />
          </Routes>
        </Router>
      </>
    );
  }
}
