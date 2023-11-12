import React, { ReactNode, useEffect, useState } from "react";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FullpageLoader from "@/components/common/FullpageLoader";
import { Metadata } from "next";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'VIT Dance Club',
  description: '...',
}


const App = ({ Component, pageProps }: AppProps<any>) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 5000);

    return () => {
      clearTimeout(timeoutId);
      sessionStorage.removeItem("scrollPosition");
    };
  }, []);

  return (
    <>
    <Head>
      <title>VIT Dance Club</title>
      <meta name="description" content="This is the official website of VIT Dance Club" />
    </Head>
      <FullpageLoader loading={loading} />
      <div className="background-image">
        <Layout>
          <div className="">
            <Component {...pageProps} />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default App;
