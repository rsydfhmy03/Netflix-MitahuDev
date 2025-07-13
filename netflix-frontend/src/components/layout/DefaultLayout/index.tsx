import React from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
       {children}
    </div>
  );
}

export default DefaultLayout;