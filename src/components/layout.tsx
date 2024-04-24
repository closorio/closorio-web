// Layout.js
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    }
type Props = LayoutProps;    

const Layout = ({ children }: Props) => {
  return (
    <div className="mx-4 my-6 md:mx-36 md:my-10">
      {children}
    </div>
  );
};

export default Layout;
