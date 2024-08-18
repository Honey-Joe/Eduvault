import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

function Review() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
            <div className="my-10 mx-3 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
                <div className=" bg-black w-[100px] h-[100px] rounded-full ">
                </div>
                <div className="flex flex-wrap gap-1 py-3">
                <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                </div>
                <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
                <p className=" text-slate-400 ">SJC</p>
                <p className=" text-slate-400 pt-2 font-[LexendDeca]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et consequuntur consectetur vero aliqu</p>
            </div>
            </div>
            <div>
            <div className="my-10 mx-3 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
                <div className=" bg-black w-[100px] h-[100px] rounded-full ">
                </div>
                <div className="flex flex-wrap gap-1 py-3">
                <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                </div>
                <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
                <p className=" text-slate-400 ">SJC</p>
                <p className=" text-slate-400 pt-2 font-[LexendDeca]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et consequuntur consectetur vero aliqu</p>
            </div>            </div>
            <div>
            <div className="my-10 mx-3 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
                <div className=" bg-black w-[100px] h-[100px] rounded-full ">
                </div>
                <div className="flex flex-wrap gap-1 py-3">
                <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                </div>
                <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
                <p className=" text-slate-400 ">SJC</p>
                <p className=" text-slate-400 pt-2 font-[LexendDeca]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et consequuntur consectetur vero aliqu</p>
            </div>            </div>
            <div>
            <div className="my-10 mx-3 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
                <div className=" bg-black w-[100px] h-[100px] rounded-full ">
                </div>
                <div className="flex flex-wrap gap-1 py-3">
                <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                </div>
                <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
                <p className=" text-slate-400 ">SJC</p>
                <p className=" text-slate-400 pt-2 font-[LexendDeca]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et consequuntur consectetur vero aliqu</p>
            </div>            </div>
            <div>
            <div className="my-10 mx-3 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
                <div className=" bg-black w-[100px] h-[100px] rounded-full ">
                </div>
                <div className="flex flex-wrap gap-1 py-3">
                <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                </div>
                <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
                <p className=" text-slate-400 ">SJC</p>
                <p className=" text-slate-400 pt-2 font-[LexendDeca]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et consequuntur consectetur vero aliqu</p>
            </div>            </div>
            <div>
            <div className="my-10 mx-3 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
                <div className=" bg-black w-[100px] h-[100px] rounded-full ">
                </div>
                <div className="flex flex-wrap gap-1 py-3">
                <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                </div>
                <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
                <p className=" text-slate-400 ">SJC</p>
                <p className=" text-slate-400 pt-2 font-[LexendDeca]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et consequuntur consectetur vero aliqu</p>
            </div>            </div>
            <div>
            <div className="my-10 mx-3 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
                <div className=" bg-black w-[100px] h-[100px] rounded-full ">
                </div>
                <div className="flex flex-wrap gap-1 py-3">
                <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                </div>
                <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
                <p className=" text-slate-400 ">SJC</p>
                <p className=" text-slate-400 pt-2 font-[LexendDeca]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et consequuntur consectetur vero aliqu</p>
            </div>            </div>
            <div>
            <div className="my-10 mx-3 text-center py-10 px-3 flex flex-col items-center justify-center bg-gray-200 rounded-2xl border border-gray-300">
                <div className=" bg-black w-[100px] h-[100px] rounded-full ">
                </div>
                <div className="flex flex-wrap gap-1 py-3">
                <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                  <Star className="  fill-[#FF9747] text-[#FF9747]" />
                </div>
                <h1 className=" py-3 font-bold font-[LexendDeca]">Student Name</h1>
                <p className=" text-slate-400 ">SJC</p>
                <p className=" text-slate-400 pt-2 font-[LexendDeca]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi et consequuntur consectetur vero aliqu</p>
            </div>            </div>
          </Slider>
        </div>
      )
}

export default Review;
