'use client'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import Detail from "@/components/Detail";
import Arrivals from "@/components/Arrivals";
import Selling from "@/components/Selling";
import Style from "@/components/Style";
import Footer from "@/components/Footer";
// import Catagory from "@/components/Catagory";

export default function Home(){
  return(
    <div>
      <Header/>
      <Hero/>
      {/* <Cartin/> */}
      <Arrivals/>
      <Selling/>
      <Style/>
      <Footer/>
      {/* <Catagory/> */}
      {/* <Detail/> */}

    </div>
  )
}