 'use client'
// import Image from "next/image";
import Header from "@/components/Header";
import styles from "./page.module.css";


 import About from "@/components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
 import Footer from "@/components/Footer";
 import Home from "@/components/Home";
 import { useState } from "react";
import Testimonials from "@/components/Testimonials";
import Cameroun from "@/components/Cameroun";
// import Navbar from "@/components/Navbar";

function App() {
  const [page, setPage]=useState('document5')
  
  
  return (
    <div className={styles.App}>
      <Header setPage={setPage}/> 
      
      {page === 'about' ? <About/>          
              :page === 'testimonials'? <Testimonials/>
                    :<Home/>}

      {/*<Home />
       <About />
      <Work />
      <Testimonial />
      <Contact />
      <Cameroun/>*/}
      <Footer /> 
    </div>
  );
}

export default App;