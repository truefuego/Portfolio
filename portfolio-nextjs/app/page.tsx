"use client"

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { InfiniteMovingCards } from "@/components/ui/InfiniteScroll";
import { Vortex } from "@/components/ui/WavyBackground";
import { projectData, titles } from '@/data'
import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth,setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  },[])

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip">
      <Hero />
      {screenWidth >= 1000 ? (<HeroParallax products={projectData} />) : (<RecentProjects />)}
      
      {screenWidth >= 640 ?     
      (<div className="w-[100%] mx-auto rounded-md  h-[30rem] overflow-hidden mb-28 hidden sm:flex">
        <Vortex
          backgroundColor="transparent"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <InfiniteMovingCards items={titles} direction="left" speed="slow" pauseOnHover={false}/>
        </Vortex>
      </div>) : (<>
        <InfiniteMovingCards items={titles} direction="left" speed="slow" pauseOnHover={false} className="mb-12"/></>)}
      <Footer />
    </main>
  );
}
