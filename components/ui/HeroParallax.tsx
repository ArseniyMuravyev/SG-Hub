"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { TextGenerateEffect } from "./TextGenerateEffect";

export const HeroParallax = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );
  return (
    <section
      ref={ref}
      className="section antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      ></motion.div>
    </section>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 left-0 top-0">
      <TextGenerateEffect
        words="The Only Productive Social Network"
        className="mt-8 text-left text-white font-bold text-4xl md:text-5xl"
      />
      <TextGenerateEffect
        className="text-base md:text-xl mt-8 text-neutral-200"
        words="Join SG Hub: Connect with Hard-Working Achievers and Reach Your Goals Together"
      ></TextGenerateEffect>
      <div className="mt-8 flex items-center gap-4">
        <div className="flex items-center">
          <a
            href="https://instagram.com/sgclub.sg/"
            className="bg-white rounded-full p-4 hover:bg-black hover:text-white transition-colors duration-300 z-10"
            target="_blank"
          >
            <LuInstagram />
          </a>
          <a
            href="https://tg.me/areniyMuravyev"
            className="bg-white rounded-full p-4 hover:bg-black hover:text-white transition-colors duration-300 z-10"
            target="_blank"
          >
            <FaTelegramPlane />
          </a>
        </div>
        <p className="uppercase font-light text-white">
          read more about us online
        </p>
      </div>
    </div>
  );
};
