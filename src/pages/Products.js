import React from 'react';
import './pages.css';
import {SliderDataAustralia} from './components/SliderDataAustralia';
import ImageSliderAustralia from './components/ImageSliderAustralia';



const Products = () => {
    return <ImageSliderAustralia  slides={SliderDataAustralia}/>;
  };
  
  export default Products;