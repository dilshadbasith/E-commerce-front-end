import React from 'react';
import bgImage from '../../assets/bg.jpg';
import '../Browse Products/BrowseProduct.css';

function BrowseProduct() {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-around flex-wrap" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='card1'></div>
      <div className='card1'></div>
    </div>
  );
}

export default BrowseProduct;
