import React, { ReactNode, useCallback, useEffect, useState } from "react";
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import FullpageLoader from "./FullpageLoader";
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

  return (
    <>
      {/* <FullpageLoader loading={loading} /> */}

      <Leftsidebar />
      <Rightsidebar />
      <Header />
      <main className="flex flex-row text-white justify-center items-center backdrop-blur-xl">
        <div className="max-sm:px-4 max-sm:backdrop-blur-2xl w-full md:w-8/12 ">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
