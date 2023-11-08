import Particle from "@/pages/Particles";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "VIT DANCE CLUB",
    default: "VIT DANCE CLUB",
  },
  description: "The official website of Dance Club of VIT Vellore.",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="background-image">
      <Layout>
        <div className="">
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}
