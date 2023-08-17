import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'
import Teams from '@/components/uncommon/Teams';
import Hero from '@/components/uncommon/Hero';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <Hero/>
        <Teams/>
        <Footer/>
      </div>
    </main>
  );
}
