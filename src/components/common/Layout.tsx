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
      <div className="absolute inset-y-0 left-0 w-32">
        <Leftsidebar />
      </div>
      <div className="absolute inset-y-0 right-0 w-32">
        <Rightsidebar />
      </div>

      {children}
    </>
  );
};

export default Layout;
