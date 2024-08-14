"use client"
import { AuroraBackground } from './ui/AuroraBackground'
import { motion } from "framer-motion";
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Link from 'next/link';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div>
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                className="w-[86%] h-screen relative flex flex-col lg:justify-between"
            >
                <Navbar />
                <div className='h-[91%] w-full z-20 flex flex-col justify-center lg:justify-normal'>
                    <div className="flex font-bold text-[500%] md:text-[900%] lg:text-[12rem] 3xl:text-[15rem]  dark:text-white ">
                        <TextGenerateEffect words='Hi 👋🏼 I’m Ankit' className='flex justify-center lg:justify-end'/>
                    </div>
                    <div className='w-full flex flex-col justify-end items-center px-20 gap-1 3xl:gap-3 !mt-0 lg:items-end'>
                        <Link href={'mailto:someone@example.com'} className="relative inline-flex" target="__blank">
                            <span className="inline-flex h-auto w-full cursor-pointer items-center justify-center px-0 py-0 text-lg 3xl:text-2xl font-light text-white ">
                                E-mail
                            </span>
                        </Link>
                        <Link href={'https://docs.google.com/document/d/1Ja0wHcBgNqbgvptEIm1IOTOd7MsdGY9W/edit?usp=sharing&ouid=102246377516776370837&rtpof=true&sd=true'} target="__blank" className="relative inline-flex h-12">
                            <span className="inline-flex h-auto w-full cursor-pointer items-center justify-center px-0 py-0 text-lg 3xl:text-2xl  font-light text-white">
                                Resume
                            </span>
                        </Link>
                        <Link href={'https://www.linkedin.com/in/ankit-sharma-76a286228/'} className="relative inline-flex" target="__blank">
                            <span className="inline-flex h-auto w-full cursor-pointer items-center justify-center px-0 py-0 text-lg 3xl:text-2xl  font-light text-white">
                                LinkedIn
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='absolute top-[15%] left-0 z-10'>
                    <img src='https://i.postimg.cc/PrxqFScS/Signature.png' alt='img' className='w-[90vw]'/>
                </div>
            </motion.div>
        </AuroraBackground>
    </div>
  )
}

export default Hero