import React from 'react'
import { profile, quote } from '../../assets/image'
import { Star } from 'lucide-react'

const Navcard = () => {
  return (
    <>
        <div className='2xl:container '>
            <div className='w-[100%] grid grid-cols-1 px-6 gap-3'>
              <div className='py-5 px-3 bg-[#171A2B] rounded-xl space-y-4'> 
              <div className='flex justify-center'>
                  <img src={quote} alt="quote" />
                </div>
                <div>
                  <p className='font-[LexendDeca] text-[12px] text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officiis sint reiciendis vel</p>
                </div>
                
                <hr />
                <div className='flex gap-2 justify-center'>
                  <Star className='fill-yellow-500 text-yellow-500'></Star>
                  <Star className='fill-yellow-500 text-yellow-500'></Star>
                  <Star className='fill-yellow-500 text-yellow-500'></Star>
                  <Star className='fill-yellow-500 text-yellow-500'></Star>
                  <Star className='fill-yellow-500 text-yellow-500'></Star>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-[LexendDeca] text-[12px] text-white'>Student Name</p>
                    </div>
                    <div>
                      <p className='font-[LexendDeca] text-[12px] text-white'>Designation</p>
                      <p></p>
                    </div>
                </div>

              </div>
              <div className='flex justify-center items-center'>
                <div className='h-[1px] bg-orange-500 w-full'>
                </div>
                <div>
                  <img src={profile} alt="profile image" className='w-[150px] h-[55px]'/>
                </div>
                <div className='h-[1px] bg-orange-500 w-full'>
                </div>
              </div>
            </div>
        </div> 
    </>
  )
}

export default Navcard
