import React from 'react';
import Home from './pages/Home';
import { Routes ,Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';



function App() {
  return (
    <>
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
        </Routes>
    </>
  );
}

export default App;


