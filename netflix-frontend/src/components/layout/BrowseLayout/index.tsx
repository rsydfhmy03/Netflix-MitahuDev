import React from 'react';
import Navbar from '../../../pages/Browse/navbar';
const BrowseLayout = ({ children } : {children : React.ReactNode}) => {
  return (
    <>
      <Navbar/>
      <div>
         {children}
      </div>
    </>
  );
};

export default BrowseLayout;