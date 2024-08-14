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

const TechnicalDetails = ({image,techDetails} : {image: string, techDetails: IFtitleDetails[]}) => {
  return (
    <div className='flex flex-col text-white w-screen h-full -mt-12 justify-center items-center cursor-default'>
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                <>
                    <h1 className="text-4xl font-semibold text-black dark:text-white">
                        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none h-full bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-500 bg-opacity-50">
                            Technical Details
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
        <div className='w-[86%] flex flex-col gap-28 h-full -mt-24 mb-8'>
            {techDetails.map((item,idx) => (
                <div className='flex flex-col gap-12' key={idx}>
                    <div className='text-center h-full font-semibold text-4xl sm:text-5xl 3xl:text-7xl bg-clip-text p-1 text-transparent bg-gradient-to-b from-white to-zinc-400 bg-opacity-50'>
                        {item.title}
                    </div>
                    <div className='flex flex-col text-white gap-8'>
                        {item.details.map((detail,i) => (
                            <div key={i} className='text-center flex flex-col gap-1'>
                                <div className='font-medium  text-xl sm:text-2xl 3xl:text-4xl text-zinc-200'>
                                    {detail.title}
                                </div>
                                <div className='font-extralight text-md'>
                                    {detail.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TechnicalDetails