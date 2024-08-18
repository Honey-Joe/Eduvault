import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="my-10 mx-2 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
            <div className=" bg-black w-[100px] h-[100px] rounded-full "></div>
            <div className="flex gap-1 py-3" >
            <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
            </div>
            <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
            <p className=" text-slate-400 ">SJC</p>
            <p className=" text-slate-400 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              soluta aperiam facere explicabo tenet
            </p>
          </div>
        </div>
        <div>
          <div className="my-10 mx-2 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
            <div className=" bg-black w-[100px] h-[100px] rounded-full "></div>
            <div className="flex gap-1 py-3" >
            <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
            </div>
            <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
            <p className=" text-slate-400 ">SJC</p>
            <p className=" text-slate-400 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              soluta aperiam facere explicabo tenet
            </p>
          </div>{" "}
        </div>
        <div>
          <div className="my-10 mx-2 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
            <div className=" bg-black w-[100px] h-[100px] rounded-full "></div>
            <div className="flex gap-1 py-3" >
            <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
            </div>
            <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
            <p className=" text-slate-400 ">SJC</p>
            <p className=" text-slate-400 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              soluta aperiam facere explicabo tenet
            </p>
          </div>{" "}
        </div>
        <div>
          <div className="my-10 mx-2 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
            <div className=" bg-black w-[100px] h-[100px] rounded-full "></div>
            <div className="flex gap-1 py-3" >
            <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
            </div>
            <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
            <p className=" text-slate-400 ">SJC</p>
            <p className=" text-slate-400 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              soluta aperiam facere explicabo tenet
            </p>
          </div>{" "}
        </div>
        <div>
          <div className="my-10 mx-2 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
            <div className=" bg-black w-[100px] h-[100px] rounded-full "></div>
            <div className="flex gap-1 py-3" >
            <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
            </div>
            <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
            <p className=" text-slate-400 ">SJC</p>
            <p className=" text-slate-400 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              soluta aperiam facere explicabo tenet
            </p>
          </div>{" "}
        </div>
        <div>
          <div className="my-10 mx-2 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
            <div className=" bg-black w-[100px] h-[100px] rounded-full "></div>
            <div className="flex gap-1 py-3" >
            <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
            </div>
            <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
            <p className=" text-slate-400 ">SJC</p>
            <p className=" text-slate-400 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              soluta aperiam facere explicabo tenet
            </p>
          </div>{" "}
        </div>
        <div>
          <div className="my-10 mx-2 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
            <div className=" bg-black w-[100px] h-[100px] rounded-full "></div>
            <div className="flex gap-1 py-3" >
            <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
            </div>
            <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
            <p className=" text-slate-400 ">SJC</p>
            <p className=" text-slate-400 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              soluta aperiam facere explicabo tenet
            </p>
          </div>{" "}
        </div>
        <div>
          <div className="my-10 mx-2 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
            <div className=" bg-black w-[100px] h-[100px] rounded-full "></div>
            <div className="flex gap-1 py-3" >
            <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
            </div>
            <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
            <p className=" text-slate-400 ">SJC</p>
            <p className=" text-slate-400 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              soluta aperiam facere explicabo tenet
            </p>
          </div>{" "}
        </div>
        <div>
          <div className="my-10 mx-2 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
            <div className=" bg-black w-[100px] h-[100px] rounded-full "></div>
            <div className="flex gap-1 py-3" >
            <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
            </div>
            <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
            <p className=" text-slate-400 ">SJC</p>
            <p className=" text-slate-400 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              soluta aperiam facere explicabo tenet
            </p>
          </div>{" "}
        </div>
      </Slider>
    </div>
  );
}

export default Review;
