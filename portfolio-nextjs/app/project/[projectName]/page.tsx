"use client"
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MacbookScroll } from "@/components/ui/MacbookScroll";
import Link from "next/link";
import { projectsPageData } from "@/data";
import { Spotlight } from "@/components/ui/Spotlight";
import ExecutiveSummary from "@/components/ui/ExecutiveSummary";
import TechnicalDetails from "@/components/ui/TechnicalDetails";
import FeaturesAndFunctionality from "@/components/ui/FeacturesAndFunctionality";
import LessonsLearnedAndFutureWork from "@/components/LLAndFW";
import { LinkPreview } from "@/components/ui/LinkPreview";
import RecentProjects from "@/components/RecentProjects";

interface IFtitleDescription {
    title: string;
    description: string;
}

interface IFtitleDetails {
    title: string;
    details: IFtitleDescription[]
}

interface IFpageData {
    title: string,
    platform: string,
    duration: string,
    year: string,
    tools: string,
    alt: string,
    goal: string,
    solution: string,
    functionality: IFtitleDescription[],
    technicalDetails: IFtitleDetails[],
    lessonsLearned: string,
    futureEnhancement: string,
    gitLink: string,
    liveLink: string,
    imageCover: string,
    image1: string,
    image2: string,
    gitImage: string,
}

const ProjectDetails = ({params} : {params : {projectName: string}}) => {
    const slug = params.projectName;
    let index = 0;
    switch(slug) {
        case 'dusk':
            index = 0;
            break;
        
        case 'porsche-clone':
            index = 1;
            break;
    
        case 'geo-explorer':
            index = 2;
            break;
    
        case 'playlist-migrator':
            index = 3;
            break;
    
        default :
            index = 0;
            break;
    }
    const pageData : IFpageData = projectsPageData[index]

    return ( 
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }} className='w-[86%] h-fill relative flex flex-col justify-around lg:justify-between cursor-default'>
                <Navbar />
                <Spotlight
                    className="absolute top-0 left-0 md:left-60"
                    fill="white"
                />
                <div className="overflow-hidden dark:bg-black-100 bg-white w-full">
                <MacbookScroll
                    title={pageData.title}
                    src={pageData.imageCover}
                    showGradient={false}
                />
                </div>       
            </motion.div>
            <div className="w-[86%] grid auto-rows sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16 my-24 text-center text-zinc-300">
                <div>
                    <p className="font-normal text-xl">
                        Platform
                    </p>
                    <p className="font-bold text-5xl h-full bg-clip-text text-transparent bg-gradient-to-b from-purple-100 to-zinc-500 bg-opacity-50">
                        {pageData.platform}
                    </p>
                </div>
                <div>
                    <p className="font-normal text-xl">
                        Tools
                    </p>
                    <p className="font-bold text-5xl h-full bg-clip-text text-transparent bg-gradient-to-b from-purple-100 to-zinc-500 bg-opacity-50">
                        {pageData.tools}
                    </p>
                </div>
                <div>
                    <p className="font-normal text-xl">
                        Duration
                    </p>
                    <p className="font-bold text-5xl h-full bg-clip-text text-transparent bg-gradient-to-b from-purple-100 to-zinc-500 bg-opacity-50">
                        {pageData.duration}
                    </p>
                </div>
                <div>
                    <p className="font-normal text-xl">
                        Year
                    </p>
                    <p className="font-bold text-5xl h-full bg-clip-text text-transparent bg-gradient-to-b from-purple-100 to-zinc-500 bg-opacity-50">
                        {pageData.year}
                    </p>
                </div>
            </div>

            <ExecutiveSummary goal={pageData.goal} solution={pageData.solution}/>

            <FeaturesAndFunctionality image={pageData.image1} details={pageData.functionality}/>

            <TechnicalDetails image={pageData.image2} techDetails={pageData.technicalDetails}/>

            <LessonsLearnedAndFutureWork lessonslearned={pageData.lessonsLearned} futurework={pageData.futureEnhancement}/>

            <div className="w-screen text-center flex flex-col gap-8">
                <h1 className="font-bold text-5xl md:text-7xl h-full bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-500 bg-opacity-50">
                    External Links
                </h1>
                <div className="flex flex-col gap-2">
                    <LinkPreview 
                    url={pageData.gitLink}
                    imageSrc={pageData.gitImage}
                    isStatic
                    className="font-bold hover:text-zinc-400"
                    >
                        <p className="font-normal text-xl text-white">GitHub(here)</p>
                    </LinkPreview>
                    {pageData.liveLink.length !== 0 && (
                        <LinkPreview 
                        url={pageData.liveLink}
                        imageSrc={pageData.imageCover}
                        isStatic
                        className="font-bold hover:text-zinc-400"
                        >
                            <p className="font-normal text-xl text-white">Website(here)</p>
                        </LinkPreview>
                    )}
                   
                </div>
            </div>

            <div className="w-[86%] h-[1px] bg-zinc-500 mt-24"/>
                
            <span className="h-full mt-24 font-bold leading-normal text-5xl md:text-7xl bg-clip-text text-transparent  bg-gradient-to-b from-zinc-100 to-zinc-500 bg-opacity-50 p-1">Other Projects</span>
            
            <RecentProjects />

            <div className="w-[86%] h-[1px] bg-zinc-500 my-24"/>

            <Footer />
        </main>
     );
}
 

export default ProjectDetails;