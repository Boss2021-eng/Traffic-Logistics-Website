import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
