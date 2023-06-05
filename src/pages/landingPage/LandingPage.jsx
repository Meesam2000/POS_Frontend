import React from "react";
// Sections
import TopNavbar from '../../components/LandingNav/TopNavbar';
import Header from "../../components/Sections/Header";
import Services from "../../components/Sections/Services";
import Pricing from "../../components/Sections/Pricing";
import Contact from "../../components/Sections/Contact";
import FAQ from "../../components/Sections/FAQ"
import Footer from "../../components/Sections/Footer"
import '../../components/style/index.css';

export default function LandingPage() {
  const styles = {}
  return (
    <div className="land">
      <TopNavbar />
      <Header />
      <Services />
       <Pricing />
      <Contact />
      <FAQ/>
      <Footer />
    </div>
  );
}


