import React from 'react';

import Banner from '../../components/layouts/banner/Banner';
import Footer from '../../components/layouts/footer/Footer';
import Grilla from '../../components/layouts/grilla/Grilla';
import Header from '../../components/layouts/header/Header';
import Navbar from '../../components/layouts/navbar/Navbar';
import SectionFnl from '../../components/layouts/sectionf/SectionFnl.js';
import ProductSection from '../../components/productSection/ProductSection';

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Grilla/>
      <ProductSection/>
      <Banner/>
      <SectionFnl/>
      <Footer hasMarginTop={true}/>
      
    </div>
  );
}

export default HomePage; 
