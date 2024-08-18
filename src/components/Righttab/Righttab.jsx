import { Clock, GraduationCap, Library, RefreshCw } from 'lucide-react'
import React from 'react'

const Righttab = () => {
  return (
    <>
        <div className=" lg:absolute lg:top-10 lg:right-14 xl:top-36 xl:right-36 col-span-3 lg:mt-0 mt-12 z-40">
              <div className="">
                <div className=" shadow-lg bg-[#F4F6F9] px-3 rounded-lg">
                  <div className=" border border-b-2 border-t-0 border-x-0 p-5 ">
                    <h2 className=" font-[Hind] font-bold text-[#39557e] py-3 text-[24px]">
                      Free
                    </h2>
                    <div className=" flex justify-center">
                      <button className=" bg-[#1363df] hover:bg-[#0c3e8c] py-2 px-16 rounded-lg mb-4 text-white">
                        Enroll now{" "}
                      </button>
                    </div>
                    <p className=" font-[Hind]  text-[#595a5d] text-center">
                      Free access this course
                    </p>
                  </div>
                  <div className=" p-5">
                    <div className=" flex items-center gap-3 py-5">
                      <Library className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind]">
                        {" "}
                        All Levels
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 py-5">
                      <GraduationCap className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind]">
                        {" "}
                        119 Total Enrolled
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 py-5">
                      <GraduationCap className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind]"> English </p>
                    </div>
                    <div className=" flex  gap-3 py-5">
                      <Clock className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind]">
                        12 <span>hours </span> 30 <span> minutes</span> <br />{" "}
                        Duration
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 py-5">
                      <RefreshCw className=" h-5 text-[#595a5d]" />
                      <p className=" text-[#595a5d] font-[Hind]">
                        <time datetime="2023-07-20">
                          July 20, 2023 Last Updated
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div> 
    </>
  )
}

export default Righttab
