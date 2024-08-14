"use client"

import { motion } from "framer-motion";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Spotlight } from "@/components/ui/Spotlight";
import { LampContainer } from "@/components/ui/Lamp";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { photographyImageData, renderImageData } from "@/data";
import Image from "next/image";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip">
      <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                 className='w-[86%] h-screen relative flex flex-col'>
        <Spotlight
            className="absolute -top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
        <Navbar />
        <div className="w-full h-full relative z-10 flex justify-start items-center">
          <h1 className="text-8xl 3xl:text-[15rem] sm:text-[12rem] font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            In my <br /> spare <br /> time...
          </h1>
        </div>
      </motion.div>
      <div className="w-screen" id="#photography">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-5 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-6xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Photography
          </motion.h1>
        </LampContainer>
        <BentoGrid className="w-[86%] grid auto-rows grid-cols-1 lg:grid-cols-4 gap-0 mx-auto">
          {photographyImageData.map((image,idx) => (
            <Image
              key={idx}
              src={image.imageLink}
              height="1000"
              width="1000"
              className={`h-fill object-center object-cover group-hover/card:shadow-xl p-5 ${idx === 2 || idx === 3 || idx === 8 || idx === 9 ? "lg:col-span-2 h-fill" : "w-fill" }`}
              alt={image.alt}
              loading="lazy"
            />))}
        </BentoGrid>
      </div>
      <div className="w-screen pb-12" id="#renders">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-5 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-6xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            3D Renders
          </motion.h1>
        </LampContainer>
        <BentoGrid className="w-[86%] grid auto-rows grid-cols-1 lg:grid-cols-4 gap-0 mx-auto">
          {renderImageData.map((image,idx) => (
            <Image
              key={idx}
              src={image.imageLink}
              height="1000"
              width="1000"
              className={`h-fill w-fill object-center object-cover group-hover/card:shadow-xl p-5 ${idx === 2 || idx === 3 || idx === 8 || idx === 9 ? "lg:col-span-2" : "" }`}
              alt={image.alt}
              loading="lazy"
            />))}
        </BentoGrid>
      </div>
        <div className='my-24 w-[86%] h-[1px] bg-zinc-500'/>
      <Footer />
    </main>
  )
}

export default page