import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'
import Teams from '@/components/uncommon/Teams';
import Slideshow from '@/components/uncommon/Slideshow';
import Gallery from '@/components/uncommon/Gallery';
import Recentperformance from "@/components/uncommon/Recentperformance";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <>
        <Gallery/>
        <Footer />
      </>
    </main>
  );
}
