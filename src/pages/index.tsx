import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import Teams from "@/components/uncommon/Teams";
import Slideshow from "@/components/uncommon/Slideshow";
import Recentperformance from "@/components/uncommon/Recentperformance";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full relative ">
      
        <Slideshow />
        <Teams />
        <Recentperformance />   
        <Footer />
        <Image src="/bganim.png" alt=" " height={1000} width={1000} className="-z-30 h-full w-screen object-cover absolute top-0 opacity-10 blur-sm"/>
      
    </main>
  );
}
