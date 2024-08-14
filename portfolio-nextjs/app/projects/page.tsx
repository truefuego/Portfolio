"use client"

import { AuroraBackground } from '@/components/ui/AuroraBackground';
import {motion } from 'framer-motion'
import Navbar from '@/components/Navbar'; 
import React from 'react'
import Footer from '@/components/Footer';
import RecentProjects from '@/components/RecentProjects';

const page = () => {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip">
            <AuroraBackground >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    }} className='w-[86%] h-screen relative flex flex-col justify-around lg:justify-between cursor-default'>
                    <Navbar />
                    <div className="w-full h-full relative z-10 flex flex-col justify-center items-start gap-[5rem]">
                        <h1 className="text-7xl sm:text-[12rem] 3xl:text-[16rem] font-bold text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Selected <br /> Works
                        </h1>
                        <div>
                            <p className="text-white sm:text-4xl text-xl">
                            Web Developer
                            </p>
                            <p className="text-white sm:text-4xl text-xl">
                            living in Bhilai, focused on
                            </p>
                            <p className="text-white sm:text-lg text-sm">
                            creating equitable and sustainable experiences.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AuroraBackground>
            <RecentProjects />
            <div className='m-24 w-[86%] h-[1px] bg-zinc-500'/>
            <Footer />
        </main>
    )
}

export default page