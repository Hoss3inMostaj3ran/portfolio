"use client";
import { Typewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
      <motion.div
        className="flex flex-col justify-center items-center h-screen text-center z-0 space-y-8 overflow-hidden"
        initial={{
          opacity: 0,
        }}
        animate={{
          // scale: [0.4, 0.6, 0.4, 0.8, 1],
          scale: [1, 0.8, 1],
          opacity: [0.1, 0.2, 0.4, 0.9, 1],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
      >
        <BackgroundCircles />
        <Image
          alt="profile image"
          className="relative h-28 w-28 rounded-full mx-auto object-cover"
          src="/assets/Lion.jpg"
          width={100}
          height={100}
        />
        <div className="z-50">
          <h2 className="uppercase text-sm tracking-[13px] mb-3 text-gray-500">
            Hossein Mostajeran
          </h2>
          <h1 className="text-slate-300 pt-6 mt-5 font-medium text-2xl md:text-3xl md:font-semibold lg:text-4xl">
            I worked with{" "}
            <span className="text-slate-50 font-normal">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "React Native",
                  "Asp.Net Core",
                  "Three.js",
                ]}
                loop={true}
                cursor
                cursorColor="#f7ab0a"
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
        </div>
      </motion.div>
      <div className="relative flex justify-center">
        <div className="absolute bottom-12">
          <Link href="#about">
            <button className="hero-button hover:shadow-md">about</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button hover:shadow-md">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button hover:shadow-md">skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button hover:shadow-md">projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
