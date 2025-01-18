import React, { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import { Toaster } from "../ui/sonner";

interface LayoutProps {
  children: ReactNode;
}
const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster position="top-right"/>
    </div>
  );
};

export default DefaultLayout;
