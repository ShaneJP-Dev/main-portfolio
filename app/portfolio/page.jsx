"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Java MP3 Player",
    desc: "This is a Java Application that allows user to create and load playlists as well as play songs",
    img: "/images/Sunset.png",
    link: "https://github.com/ShaneJP-Dev/MP3_Player",
    button: "View GitHub",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "AI Teacher Planner",
    desc: "Hackathon project got us to 3rd place.",
    img: "/images/River.jpg",
    link: "https://github.com/ShaneJP-Dev/ai-teacher-planner",
    button: "View GitHub",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Next.js landing page",
    desc: "A simple landing page showing Tailwind and Next.js",
    img: "/images/Purple.png",
    link: "https://github.com/ShaneJP-Dev/Nike_Shop",
    button: "View GitHub",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "React Native Ecommerce App",
    desc: "Uses React Native, and Supabase as backend",
    img: "/images/Tree.png",
    link: "https://github.com/ShaneJP-Dev/Ecommerce-Shop",
    button: "View GitHub",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl md:text-6xl lg:text-8xl text-center px-4">
          My Works
        </div>
        <div className="sticky top-0 flex gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 md:gap-8 text-white px-4 md:px-0">
                  <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center md:text-left">
                    {item.title}
                  </h1>
                  {/* Fixed image size */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto md:mx-0">
                    <Image 
                      src={item.img} 
                      alt="" 
                      fill
                      className="rounded-3xl object-cover"
                    />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg w-64 sm:w-80 md:w-[400px] lg:w-[500px] text-center md:text-left">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center md:justify-start">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                      {item.button}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="w-screen h-screen flex flex-col gap-8 md:gap-16 items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-48 h-48 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-sm md:text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-12 h-12 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-sm md:text-base hover:bg-gray-800 transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;