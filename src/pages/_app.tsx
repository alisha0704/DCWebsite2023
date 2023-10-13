import Particle from "@/Particles";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black">
    <Layout>
      <div className="z-50 ">
      <Component {...pageProps} />
      </div>
    </Layout>
    </div>
  );
}
