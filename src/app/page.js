'use client'
import BannerPage from "@/components/HomePage/BannerPage";
import Customer from "@/components/HomePage/Customer";
import Features from "@/components/HomePage/Features";
import Footer from "@/components/HomePage/Footer";
import Integrations from "@/components/HomePage/Integrations";
import Navbar from "@/components/HomePage/Navbar";
import Pricing from "@/components/HomePage/Pricing";
import Productivity from "@/components/HomePage/Productivity";
import Image from "next/image";
import OurService from './../components/HomePage/OurService';
import WhyChooseUs from "@/components/HomePage/WhyChoseUs";
import HexagonGridContainer from "@/components/HexagonGridContainer";
import WhatWeDo from "./../components/HomePage/OurService";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <div className="w-full mx-auto">
      <Navbar></Navbar>
      <BannerPage></BannerPage>
     <WhatWeDo></WhatWeDo>
     <WhyChooseUs></WhyChooseUs>
  <Footer></Footer>
      </div>

    </div>
  );
}
