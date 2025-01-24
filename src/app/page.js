import BannerPage from "@/components/HomePage/BannerPage";
import Customer from "@/components/HomePage/Customer";
import Features from "@/components/HomePage/Features";
import Footer from "@/components/HomePage/Footer";
import Integrations from "@/components/HomePage/Integrations";
import Navbar from "@/components/HomePage/Navbar";
import Pricing from "@/components/HomePage/Pricing";
import Productivity from "@/components/HomePage/Productivity";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <div className="w-full mx-auto">
      <Navbar></Navbar>
      <BannerPage></BannerPage>
      <Features></Features>
      <Productivity></Productivity>
      <Integrations></Integrations>
      <Pricing></Pricing>
    <Customer></Customer>
  <Footer></Footer>
      </div>

    </div>
  );
}
