import React from "react";
import { TypewriterEffect } from "../ui/index";

function HeroSection() {
  const words = [
    {
      text: "My",
    },
    {
      text: "Name",
    },
    {
      text: "is",
    },
    {
      text: "Rishabh",
      className: "dark:text-blue-500 ",
    },
    {
      text: "Nirmalkar.",
      className: "dark:text-blue-500 ",
    },
  ];
  const words02 = [
    {
      text: "I'am",
    },
    {
      text: "a",
    },
    {
      text: "Web",
    },
    {
      text: "Devloper.",
      className: "dark:text-purple-400 ",
    },
  ];
  return (
    <>
      <div className="  flex flex-col-reverse lg:flex-row ">
        <div className="lg:flex-1 justify-center items-center py-10">
          <TypewriterEffect words={words} />
          <TypewriterEffect words={words02} />
        </div>
        <div className="lg:flex-1">Images</div>
      </div>
    </>
  );
}

export default HeroSection;
