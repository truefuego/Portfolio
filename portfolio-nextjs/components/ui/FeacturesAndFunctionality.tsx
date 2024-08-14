import React from 'react'
import { ContainerScroll } from './ContainerScrollAnimation'
import Image from 'next/image'

interface IFtitleDescription {
    title: string;
    description: string;
}

interface IFtitleDetails {
    title: string;
    details: IFtitleDescription[]
}

const FeaturesAndFunctionality = ({image,details} : {image: string,details: IFtitleDescription[]}) => {
  return (
    <div className='flex flex-col text-white w-screen h-full -mt-12 justify-center items-center cursor-default'>
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                <>
                    <h1 className="text-4xl font-semibold text-black dark:text-white">
                        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none  bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-500 bg-opacity-50">
                            Features & Functionality
                        </span>
                    </h1>
                </>
                }
            >
                <Image
                src={image}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-center"
                draggable={false}
                />
            </ContainerScroll>
        </div>
        <div className='w-[86%] flex flex-col gap-16 h-full -mt-24 mb-8'>
            {details.map((detail,i) => (
                <div key={i} className='text-center flex flex-col gap-2'>
                    <div className='font-semibold  text-2xl sm:text-3xl 3xl:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 bg-opacity-50'>
                        {detail.title}
                    </div>
                    <div className='font-extralight text-lg'>
                        {detail.description}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturesAndFunctionality