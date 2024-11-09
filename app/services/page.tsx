// pages/index.js
import React from "react";
import ServicesDisplay from "@/components/ui/ServicesDisplay"; // Adjust the path as needed
import Footer from "@/components/wrapper/Footer"; // Example for including Footer
import { navItems } from "@/data"; // Ensure the correct path to navItems
import { FloatingNav } from "@/components/wrapper/FloatingNavbar";

const Services = () => {
  return (
    <main className="pt-20 relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5  dark:bg-black-100 bg-gray-50 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03]">
      {" "}
      <FloatingNav navItems={navItems} />
      <ServicesDisplay />
      <Footer />
    </main>
  );
};

export default Services;
