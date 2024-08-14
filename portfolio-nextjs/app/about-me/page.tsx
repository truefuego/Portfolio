"use client"

import { motion } from "framer-motion";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Boxes } from "@/components/ui/BackgroundBoxes";
import { LinkPreview } from "@/components/ui/LinkPreview";
import Link from "next/link";
import copy from "copy-to-clipboard";
import { projectPreviewLinkData } from "@/data";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip">
      <AuroraBackground >
        <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                  delay: 0,
                  duration: 0.8,
                  ease: "easeInOut",
                  }} className='w-[86%] h-screen relative flex flex-col justify-around lg:justify-between cursor-default'>
          <Navbar />
          <div className="w-full h-full relative z-10 flex flex-col justify-center items-start gap-[5rem]">
            <h1 className="text-8xl sm:text-[12rem] 3xl:text-[16rem] font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              About <br /> Me <span className="text-yellow-50">🙃</span>
            </h1>
            <p className="text-white sm:text-3xl text-xl">
              Experience in building Full-stack web apps using MERN. I have good hands on OAuth and Google Cloud. Proficient in designing user-friendly interfaces and enhancing user experience. Knight on LeetCode. 4⭐ on CodeChef.
            </p>
          </div>
        </motion.div>
      </AuroraBackground>
      
      <div className="w-[86%] h-[1px] bg-zinc-500 my-8"/>

      <div className="grid auto-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 text-white w-[86%] mt-8 mb-24">
        <div className="flex flex-col w-full items-center md:items-start gap-2 cursor-default text-zinc-200">
          <h1 className="heading font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-3">Education</h1>
          <div className="text-sm text-center md:text-start">
            <p className="font-bold">Shri Shankaracharya Technical Campus</p>
            <p className="font-normal">Bachelor of Technology, CSE</p>
            <p className="font-normal ">October 2021 - Present</p>
          </div>
          <div className="text-sm text-center md:text-start">
            <p className="font-bold">Mansarowar Vidyalaya Janjgiri</p>
            <p className="font-normal">Higher Secondary, PCM</p>
            <p className="font-normal">July 2018 - March 2020</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-500 my-4 md:hidden"/>
        <div className="flex flex-col w-full items-center md:items-start gap-2 text-sm font-normal text-zinc-200">
          <h1 className="heading font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-3 cursor-default">Projects</h1>
          {projectPreviewLinkData.map((project) => (
          <div className="text-sm text-center md:text-start cursor-default">
            <LinkPreview 
              url={project.projectLink}
              imageSrc={project.imagePath}
              isStatic
              className="font-bold hover:text-zinc-400"
              >
              {project.projectName}
            </LinkPreview>
            <p className="font-normal">{project.aboutProject}</p>
            <p className="font-normal ">{project.projectTimeline}</p>
          </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-zinc-500 my-4 md:hidden"/>
        <div className="flex flex-col w-full items-center md:items-start gap-2 cursor-default font-normal text-sm text-zinc-200">
          <h1 className="heading font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-3 ">Skills</h1>
          <p>Full Stack Web Development</p>
          <p>Data Structure and Algorithms</p>
          <p>Game Development</p>
          <p>Android Development</p>
          <p>UI/UX Design</p>
          <p>3D Design</p>
          <p>Wireframing</p>
          <p>Prototyping</p>
        </div>
        <div className="w-full h-[1px] bg-zinc-500 my-4 md:hidden"/>
        <div className="flex flex-col w-full items-center md:items-start gap-2 cursor-default font-normal text-sm text-zinc-200">
          <h1 className="heading font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-3 ">Awards</h1>
          <p>Algothon, GDSC-SSTC, Winner</p>
          <p>CodeLoom - Hackathon, SSTC, Winner</p>
          
        </div>
      </div>


      <div className="w-[86%] h-[1px]  bg-zinc-500"/>
      <div className="grid auto-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-y-8 w-[86%] my-8 mb-24">
        <div className="flex flex-col w-full items-center md:items-start gap-2 text-sm font-normal text-zinc-200">
          <h1 className="heading font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-3 cursor-default">Connect</h1>
            <LinkPreview 
              url="https://x.com/AnkitSh44355307"
              imageSrc="/link-preview/twitter.png"
              isStatic
              className=" hover:text-zinc-400"
              >
              Twitter
            </LinkPreview>
            <LinkPreview 
              url="https://www.linkedin.com/in/ankit-sharma-76a286228"
              imageSrc="/link-preview/linkedin.png"
              isStatic
              className=" hover:text-zinc-400"
              >
              LinkedIn
            </LinkPreview>
            <LinkPreview 
              url="https://www.instagram.com/notankxt"
              imageSrc="/link-preview/instagram.png"
              isStatic
              className=" hover:text-zinc-400"
              >
              Instagram
            </LinkPreview>
        </div>
        <div className="w-full h-[1px] bg-zinc-500 my-4 md:hidden"/>
        <div className="flex flex-col w-full items-center md:items-start gap-2">
          <h1 className="heading font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-3 cursor-default">Contact</h1>
          <p className="text-sm font-normal text-zinc-200 cursor-pointer hover:text-zinc-400" onClick={() => {copy('7389307198')}}>738-9307-198</p>
          <p className="text-sm font-normal text-zinc-200 cursor-pointer hover:text-zinc-400" onClick={() => {copy('ankitsharma9152003@gmail.com')}}>ankitshrama9152003@gmail.com</p>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default page