import React, { ReactNode, useCallback, useEffect, useState } from "react";
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import FullpageLoader from "./FullpageLoader";
import { Container, Engine, Particles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 5000);

    return () => {
      clearTimeout(timeoutId);
      sessionStorage.removeItem("scrollPosition");
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <FullpageLoader loading={loading} />

      <Leftsidebar />
      <Rightsidebar />
      <Header />
      <main className="flex flex-row text-white justify-center items-center backdrop-blur-xl">
        <div className="max-sm:px-4 max-sm:backdrop-blur-2xl w-full md:w-8/12 ">{children}</div>
      </main>
      <Footer />

    </>
  );
};

export default Layout;
