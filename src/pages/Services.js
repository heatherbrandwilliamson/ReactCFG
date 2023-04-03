import React from 'react';
import './pages.css';
import ImageSliderSpain from '../pages/components/ImageSliderSpain';
import {SliderDataSpain} from './components/SliderDataSpain.js';



const Products = () => {
    return <ImageSliderSpain  slides={SliderDataSpain}/>;
  };
  
  export default Products;