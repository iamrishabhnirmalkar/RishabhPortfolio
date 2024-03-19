"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaList, FaStudiovinari, FaCode } from "react-icons/fa";

interface PageLink {
  to: string;
  text: string;
}

function Header() {
  const [nav, setNav] = useState<boolean>(false);
  const pageLinks: PageLink[] = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/about_us",
      text: "About",
    },
    {
      to: "/skills",
      text: "Skills",
    },
    {
      to: "/projects",
      text: "Project",
    },
    {
      to: "/blogs",
      text: "Blogs",
    },
  ];
  return (
    <>
      <div className="bg-transparent">
        <div className="flex justify-between p-5 ">
          {/* Logo Of The Website */}
          <div className="flex justify-center items-center  ">
            <Link href={"/"}>
              <div className="inline-flex h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 rounded-3xl py-2 px-5">
                <FaCode size={25} className=" text-white" />
              </div>
            </Link>
          </div>
          {/* NavMenu Of The Website */}
          <div className="hidden lg:block">
            <ul className="flex justify-between items-center  rounded-3xl py-2 space-x-10 px-5 text-gray-500  font-semibold h-12 animate-shimmer    border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]   transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
              {pageLinks.map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-white">
                  <Link href={item.to}>
                    <p>{item.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact NavMenu Of The Website */}
          <div className="hidden lg:block">
            <div className="flex">
              <Link href={"/contact_us"}>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 rounded-3xl py-2 px-5 text-gray-500 hover:text-white">
                  Notify Me
                </button>
              </Link>
            </div>
          </div>
          {/* Mobile Navbar */}
          <div className="lg:hidden p-2" onClick={() => setNav(!nav)}>
            {nav ? (
              <div className="inline-flex h-12 animate-shimmer items-center justify-center   border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border rounded p-2">
                <FaStudiovinari size={25} className="text-white" />
              </div>
            ) : (
              <div className="inline-flex h-12 animate-shimmer items-center justify-center   border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border rounded p-2">
                <FaList size={25} className="text-white" />
              </div>
            )}
          </div>
        </div>
        {nav && (
          <div className="w-screen bg-transparent h-screen p-20 ">
            <div className="flex justify-center items-center  ">
              <ul
                className="flex flex-col space-y-10 text-center  font-semibold text-white  "
                onClick={() => setNav(false)}
              >
                {pageLinks.map((item, index) => (
                  <li key={index} className="cursor-pointer">
                    <Link href={item.to}>
                      <p>{item.text}</p>
                    </Link>
                  </li>
                ))}
                <Link href={"/contact_us"}>
                  <p>
                    <button>Notify Me</button>
                  </p>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
