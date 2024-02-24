import './App.css';
import React, { useState } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registering, setRegistering] = useState(false);


  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleRegister = () => {
    setRegistering(true);
  };

  return (
    <div className="App">
      <Navbar handleLogin={handleLogin} handleRegister={handleRegister} />
      <Header/>
      <Content loggedIn={loggedIn} registering={registering}/>
      <Footer/>
    </div>
  );
}

export default App;
