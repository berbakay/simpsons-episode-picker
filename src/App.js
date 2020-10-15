import React from 'react';
import './App.css';
import Home from './Home';
import { Router } from '@reach/router'
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Home path='/*'/>
      </Router>
    </div>
  );
}

export default App;
