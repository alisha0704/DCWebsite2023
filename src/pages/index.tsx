import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/common/Footer'
import Teams from '@/components/uncommon/Teams';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <Teams/>
        <Footer/>
      </div>
    </main>
  );
}
