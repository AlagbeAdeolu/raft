import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import Features from "../components/Features";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CTASection />
      <Features />
    </Layout>
  );
};

export default Home;
