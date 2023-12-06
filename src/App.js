import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import News from './components/pages/News';
import Titulares from './components/pages/Titulares';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />        
        <Routes>                    
          <Route path='/' exact Component={Home} />
          <Route path='/titulares' Component={Titulares}/>
          <Route path='/products' Component={Services} />
          <Route path='/news' Component={News} />          
          <Route path='/sign-up' Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;