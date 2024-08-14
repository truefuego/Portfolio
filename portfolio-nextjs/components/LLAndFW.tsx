import React from 'react'

const LessonsLearnedAndFutureWork = ({lessonslearned,futurework} : {lessonslearned : string, futurework: string}) => {
  return (
    <div className='flex text-white w-screen h-full my-24 justify-center items-center cursor-default'>
        <div className='w-[86%] md:w-[80%] bg-[#000000] h-full flex flex-col p-5'>
            <div className='font-bold text-3xl p-8 md:p-8 pb-0 md:pb-0 text-zinc-200'>
                Lessons Learned and Future Work
            </div>
            <div className='grid grid-cols-1 pb-8 md:pb-0 gap-y-6'>
                <div className='p-8 pb-0'>
                    <p className='text-4xl md:text-5xl font-medium text-zinc-600 '>Lessons Learned:</p>
                    <p className='pl-8 -mt-4 text-lg font-extralight'>{lessonslearned}</p>
                </div>
                <div className='p-8'>
                    <p className='text-4xl md:text-5xl font-medium text-zinc-600 '>Future Enhancements:</p>
                    <p className='pl-8 -mt-4 text-lg font-extralight '>{futurework}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LessonsLearnedAndFutureWork