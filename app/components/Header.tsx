"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex sticky items-start top-0 justify-between max-w-7xl p-5 xl:items-center mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon fgColor="gray" bgColor="transparent" url="www.vimeo.com" />

        <SocialIcon fgColor="gray" bgColor="transparent" url="www.vimeo.com" />

        <SocialIcon fgColor="gray" bgColor="transparent" url="www.vimeo.com" />

        <SocialIcon fgColor="gray" bgColor="transparent" url="www.vimeo.com" />
      </motion.div>

      <motion.div
        initial={{
          x: 100,
          scale: 0.4,
          opacity: 0.3,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row cursor-pointer"
      >
        {/* contact me */}
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="www.youtube.com"
        />
        <p className="uppercase items-center hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
