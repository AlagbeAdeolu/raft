import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CTASection />
      <Features />
      <Testimonial />
      <FAQ />
    </Layout>
  );
};

export default Home;
