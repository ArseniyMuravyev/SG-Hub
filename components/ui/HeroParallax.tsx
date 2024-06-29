"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { FeatureData } from "@/types";

export const HeroParallax = ({ products }: { products: FeatureData[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    springConfig
  );
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
      className="antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 md:px-8 left-0 top-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center ml-4">
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
      <TextGenerateEffect
        words="The Only Productive Social Network"
        className="heading ml-4 mt-8 "
      />
      <p className="text-base md:text-xl mt-8 text-neutral-200 ml-4">
        Join SG Hub: Connect with Hard-Working Achievers and Reach Your Goals
        Together
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-center absolute h-full w-full inset-0 rounded-xl"
        alt={product.title}
        priority
      />
      <div className="absolute inset-0 h-full w-full opacity-0 bg-black pointer-events-none"></div>
    </motion.div>
  );
};
