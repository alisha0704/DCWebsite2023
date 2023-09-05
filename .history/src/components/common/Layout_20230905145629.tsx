import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import FullpageLoader from "./FullpageLoader";

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
      <FullpageLoader loading={loading} />
      <Header />
      <main className="flex flex-row">
            <Leftsidebar />

            <section className="flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <Rightsidebar />
          </main>
      {/* <div className="absolute inset-y-0 left-0 w-32">
        <Leftsidebar />
      </div>
      <div className="absolute inset-y-0 right-0 w-32">
        <Rightsidebar />
      </div> */}

      {/* {children} */}
    </>
  );
};

export default Layout;
