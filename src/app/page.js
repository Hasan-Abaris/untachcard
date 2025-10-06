"use client";

import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import ScrollToTop from "@/components/common/ScrollToTop/ScrollToTop";
import HomeMain from "@/components/home/Home";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen bg-white">
  //       <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  //     </div>
  //   );
  // }
  return (
    <>
      {/* <Header /> */}
      <div className="min-h-screen">
        <HomeMain />
        <ScrollToTop />
      </div>
      {/* <Footer /> */}
    </>
  );
}
