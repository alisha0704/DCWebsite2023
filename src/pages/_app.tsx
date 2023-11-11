import Particle from "@/pages/Particles";
import React, { ReactNode, useEffect, useState } from "react";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FullpageLoader from "@/components/common/FullpageLoader";

interface LayoutProps {
  children: ReactNode;
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
