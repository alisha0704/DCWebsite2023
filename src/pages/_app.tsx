import Particle from "@/Particles";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="z-50">
      <Component {...pageProps} />
      </div>
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <Particle />
    </Layout>
  );
}
