
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/banner';
// import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import Program from './components/Program';
import Services from './components/Services';
import About from './components/About us';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="banner-container">
        <Banner/>
        {/* <About/> */}
      </div>
      <Services/>
      <Program/>
      
      <Footer/>
      
    </div>
       
  );
}

export default App;
