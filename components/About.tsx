"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mt-10 -mb-20 md:mb-0 flex-shrink-0"
      >
        <Image
          src="/about1.jpg"
          alt="About Me Image"
          className="w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          width={500}
          height={600}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Hey there! 👋 I&apos;m Latifsamil Ertekin, a passionate software
          engineer on a mission to revolutionize the digital landscape! 🚀 With
          a diploma from the prestigious Epoka University 🎓, I&apos;ve spent
          over 2 years honing my craft in a myriad of settings, from start-ups
          to game development and tech giants. 🌟 My journey in software
          engineering has been a rollercoaster of creativity and innovation,
          fueling my drive to push boundaries. 💡 As a front-end maestro, I
          wield my coding wizardry to conjure up mesmerizing user interfaces
          that dazzle and delight. 💻 Every pixel I place is a brushstroke in
          the canvas of digital art, meticulously crafted to captivate audiences
          and evoke emotions.🎨
        </p>
      </div>
    </motion.div>
  );
}
