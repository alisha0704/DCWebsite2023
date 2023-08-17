import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import Teams from "@/components/uncommon/Teams";
import Slideshow from "@/components/uncommon/Slideshow";
import Recentperformance from "@/components/uncommon/Recentperformance";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <>
        <Slideshow />
        <Teams />
        <Recentperformance />
        <Footer />
      </>
    </main>
  );
}
