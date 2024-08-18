import React from 'react'

const Announcement = () => {
  return (
    <>
        <div className='2xl:container mx-auto'>
            <div className='grid grid-cols-1 py-3 px-5 bg-white rounded-lg' id='certi'>
                <div className='flex justify-between py-2 items-center'>
                    <div>
                        <p className='font-[LexendDeca] font-bold text-[20px]'>APP DEVELOPMENT</p>
                    </div>
                    <div>
                        <p className='py-3 px-3 bg-blue-700 font-[LexendDeca] text-white rounded-md items-center'>16 Jun</p>
                    </div>
                </div>
                <div className='flex justify-between py-3'>
                    <div>
                        <p className='font-[LexendDeca] text-gray-500'>Schedule: 08.00 PM - 9.00 PM</p>
                    </div>
                    <div>
                        <p className='font-[LexendDeca] text-gray-500'>Loctaion : Virtual</p>
                    </div>
                </div>
                <div>
                    <p className='font-[LexendDeca] text-gray-500'>Dive into the world of mobile development</p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Announcement
