import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList/CardList';
import {projects} from '../Components/ProjectList/ProjectsList';
import LandingPage from '../Components/LandingPage/LandingPage';
import Contact from '../Components/Contact/Contact';
import Skills from '../Components/Skills/Skills';
import Footer from '../Components/Footer/Footer';
import ScrollUpButton from 'react-scroll-up-button';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <LandingPage />
       	<Skills />
        <CardList projects={projects} />
       	<Contact />
       	<Footer />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
