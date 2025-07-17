import React from "react";
import Navbar from "../../../pages/Landing/navbar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
       <Navbar />
       {children}
    </div>
  );
}

export default DefaultLayout;