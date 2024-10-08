"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Link from "next/link";

export function ThreeDCard({
    image, 
    alt, 
    title, 
    description, 
    link, 
    source
} : {
    image: string,
    alt?: string,
    title: string,
    description: string,
    link?: string,
    source: string
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="cursor-default bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#000108] dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] md:w-[40rem] 3xl:w-[50rem] w-auto h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-4xl font-semibold text-zinc-300"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 3xl:h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {link && 'Try now →'}
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={source}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Find More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
