import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import Teams from "@/components/uncommon/Teams";
import Slideshow from "@/components/uncommon/Slideshow";
import Recentperformance from "@/components/uncommon/Recentperformance";
import Aboutdc from "@/components/uncommon/Aboutdc";
import { useEffect, useState } from "react";
import FullpageLoader from "@/components/common/FullpageLoader";
import Buttletin from "@/components/uncommon/Bulltein";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
    return () => {
      sessionStorage.removeItem("scrollPosition");
    };
  });
  return (
    <>
      <div className="">
        <Slideshow />
        <Aboutdc />
        <Teams />
        {/* <Buttletin /> */}
        <Recentperformance />
      </div>
    </>
  );
}
