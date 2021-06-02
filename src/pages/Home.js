import React from "react";

import GoToTop from '../utils/GoToTop'
import ScrollToTop from '../utils/ScrollToTop'
import Layout from "../ui/Layout";
import Hero from '../components/Hero'
import Services from '../components/Services'

const Home = () => {
  return (
    <Layout>
      <div style={{paddingBottom: "20px"}}>
        
        <Hero />
        <Services />
        
      </div>
      <GoToTop />
      <ScrollToTop />
    </Layout>
  );
};

export default Home;
