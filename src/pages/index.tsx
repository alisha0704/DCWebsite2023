import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import Teams from "@/components/uncommon/Teams";
import Slideshow from "@/components/uncommon/Slideshow";
import Recentperformance from "@/components/uncommon/Recentperformance";
import Aboutdc from "@/components/uncommon/Aboutdc";
import Particles from "react-tsparticles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full relative ">
      <Slideshow />
      <Aboutdc />
      <Teams />
      <Recentperformance />
      <Footer />
    </main>
  );
}
