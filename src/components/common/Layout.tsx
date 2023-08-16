import React, { ReactNode } from "react";
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
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
