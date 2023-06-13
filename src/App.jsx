import './index.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

