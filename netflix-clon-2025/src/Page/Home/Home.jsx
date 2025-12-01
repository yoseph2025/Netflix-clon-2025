import React from 'react';
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Banner from '../../Components/Banner/Banner.jsx';
// import requests from '../../utilies/requests.js';
import Rowlist from '../../Components/Rows/RowList/Rowlist.jsx';


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist/>
      <Footer/>
    </>
  );
}

export default Home;
