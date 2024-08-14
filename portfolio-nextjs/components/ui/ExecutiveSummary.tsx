import React from 'react'

const ExecutiveSummary = ({goal,solution} : {goal : string, solution: string}) => {
  return (
    <div className='flex text-white w-screen h-full mt-24 justify-center items-center cursor-default'>
        <div className='w-[86%] bg-[#000000] h-full flex flex-col'>
            <div className='font-bold text-3xl p-6 md:p-12 pb-0 md:pb-0 text-zinc-200'>
                Executive Summary
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 pb-8 md:pb-0'>
                <div className='p-6 md:p-12 md:pr-6'>
                    <p className='text-5xl font-medium text-zinc-600 '>Goal:</p>
                    <p className='pl-8 -mt-6 text-lg font-extralight'>{goal}</p>
                </div>
                <div className='p-6 md:p-12 md:pl-6'>
                    <p className='text-5xl font-medium text-zinc-600 '>Solution:</p>
                    <p className='pl-8 -mt-6 text-lg font-extralight '>{solution}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExecutiveSummary