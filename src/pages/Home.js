import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Posts from './components/Posts';
import Body from './components/Body';
import Layout from './Layout';
import './pages.css';


const Home = () => {
    return     <div className="Container">
      
    <Posts/>
    <Body/>
    <Posts/>
    <Body/>
    <Posts/>
    <Body/>
    <Footer/>

  </div>;
  };
  
  export default Home;