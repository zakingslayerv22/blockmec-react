// import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import BuyBlc from './components/BuyBlc';
import React, {useState} from 'react'; 
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';


function App() {
  return (
    <>
    <Router>
       <Header />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route path="/buyblc" component={BuyBlc} />
          </Switch>
       <Footer />
    </Router>
    </>
  );
}

export default App;
