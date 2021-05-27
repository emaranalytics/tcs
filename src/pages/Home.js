import React from "react";

import Layout from "../ui/Layout";
import Hero from '../components/Hero'

const Home = () => {
  return (
    <Layout>
      <div style={{paddingBottom: "20px"}}>
        
        <Hero />
        
      </div>
    </Layout>
  );
};

export default Home;
