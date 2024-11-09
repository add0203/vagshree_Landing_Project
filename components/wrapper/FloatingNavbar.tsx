"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger icons
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  path: string;
  icon?: JSX.Element;
  isRoute: boolean;
  isBottom: boolean;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // Add state for menu
  const [activeLink, setActiveLink] = useState<string>("Home");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const direction = current - scrollYProgress.getPrevious()!;
    setVisible(scrollYProgress.get() < 0.05 || direction < 0);
  });

  const handleLinkClick = (linkTitle: string) => {
    setActiveLink(linkTitle);
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <>
      {/* Hamburger button */}

      <div
        className={`fixed top-5 right-5 flex w-full px-10 ${
          menuOpen ? "z-[6000]" : "z-[5000]"
        } md:hidden`}
      >
        {/* Logo on the left */}
        <Link href={"/"} className="flex items-center justify-start">
          <img src="/app.svg" alt="Logo" className="h-5 w-auto" />
        </Link>

        {/* Hamburger Menu on the right */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="flex items-center justify-end gap-4"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {/* Fullscreen overlay for small screens */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-0 z-[5000] bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6",
              className
            )}
          >
            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.path}
                className={cn("text-white hover:text-neutral-300 text-xl", {
                  "font-bold": activeLink === navItem.title,
                })}
                onClick={() => handleLinkClick(navItem.title)}
                aria-label={navItem.title}
              >
                {navItem.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar for larger screens */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 1, y: -100 }}
            animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
              className
            )}
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <Link href={"/"} className="flex items-center justify-start">
              <img src="/app.svg" alt="Logo" className="h-5 w-auto" />
            </Link>

            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.path}
                className={cn(
                  "relative items-center flex space-x-1 text-neutral-300 hover:text-neutral-100",
                  { "font-bold": activeLink === navItem.title }
                )}
                onClick={() => handleLinkClick(navItem.title)}
                aria-label={navItem.title}
              >
                {navItem.title}
              </Link>
            ))}
            <Link href={"/contactus"} className="">
              <button
                className={
                  "relative py-2 px-3 rounded-lg font-medium text-sm  from-[#1f1f1f] to-[#3a3a3a] "
                }
              >
                <div className={"absolute inset-0 rounded-lg"}>
                  <div
                    className={
                      "absolute inset-0 border rounded-lg border-gray-500 [mask-image:linear-gradient(to_bottom,black,transparent)]"
                    }
                  />
                  <div
                    className={
                      "absolute inset-0 border rounded-lg border-gray-500 [mask-image:linear-gradient(to_top,black,transparent)]"
                    }
                  />
                  <div
                    className={
                      "absolute inset-0 rounded-lg shadow-[inset_0_0_2px_rgba(138,138,138,0.1)]"
                    }
                  />
                </div>
                <span className="text-white dark:text-white">Contact Us</span>
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

{
  /* <Link href={"/contactus"} className="">
  <button
    className={` h-12 w-auto  md:mt-0 m-0 overflow-hidden rounded-lg p-[1px] focus:outline-none`}
  >
    <span
      className={`inline-flex h-full w-auto cursor-pointer items-center justify-center rounded-lg bg-slate-700 px-5 gap-2 text-sm font-medium text-white backdrop-blur-3xl`}
    >
      Contact Us
    </span>
  </button>
</Link>; */
}
