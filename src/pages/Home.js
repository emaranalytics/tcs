import React from "react";

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
    </Layout>
  );
};

export default Home;
