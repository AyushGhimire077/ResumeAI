import React from "react";
import heroImg from "../assets/heroImg.png"; // Ensure this is the correct path to your image

const Hero = () => {
  return (
    <div className="hero flex flex-col-reverse h-[80vh] md:flex-row justify-evenly items-center py-16 px-6 text-white">
      {/* Left Section: Text */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className=" text-3xl sm:text-5xl font-bold mb-4 text-teal-400">
          Resume Generator
        </h1>
        <p className="text-[14px] sm:text-lg m-7">
          Create a professional resume in minutes with our easy-to-use template.
          Stand out with a polished resume designed to impress.
        </p>
        <a
          href="/create"
          className="mt-5  inline-block bg-teal-500  py-2 px-8 text-center rounded-full hover:bg-teal-600 transition-colors"
        >
          Get Started
        </a>
        <p className="mt-5  text-[12px] w-fit px-4 py-2 text-orange-300">
          • Read docs to get a better resume.
        </p>
      </div>

      {/* Right Section: Image */}
      <div className=" hidden sm:block mt-8 md:mt-0">
        <img
          src={heroImg}
          alt="Resume Generator"
          className="w-full h-[70vh]  rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
