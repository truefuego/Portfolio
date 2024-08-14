import React from 'react'
import { ThreeDCard } from './ui/3DCardEffect'
import { BentoGrid } from './ui/BentoGrid'
import {projectData} from '../data'

const RecentProjects = ({title,subtitle}: {title?: string, subtitle?:string}) => {
  return (
    <div className='flex flex-col relative w-[86%] h-fill pt-12 pb-16'>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-8 pb-2 cursor-default">
          {title}
        </p>
        <p className="text-lg sm:text-md font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 !pt-0 !pb-16 cursor-default">
          {subtitle}
        </p>
        <BentoGrid className='grid auto-rows sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8'>
          {projectData.map((project) => (<ThreeDCard key={project.title} title={project.title} description={project.description} image={project.thumbnail}  alt={project.alt} source={project.link} link={project.liveLink}/>))}
        </BentoGrid>
    </div>
  )
}

export default RecentProjects