import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import Teams from "@/components/uncommon/Teams";
import Slideshow from "@/components/uncommon/Slideshow";
import Gallery from "@/pages/Gallery";
import Recentperformance from "@/components/uncommon/Recentperformance";
import Board from '@/pages/Board';
import Contactus from "@/components/uncommon/Contactus";
import Menu from "@/components/uncommon/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full relative ">
      {/* <Slideshow />
      <Teams />
      <Recentperformance />
      <Footer />
      {/* <Image
        src="/bganim.png"
        alt=" "
        height={1000}
        width={1000}
        className="-z-30 h-full w-screen object-cover absolute top-0 opacity-10 blur-sm"
      /> */}
      {/* <Contactus /> */}
      <Menu />
    </main>
  );
}
