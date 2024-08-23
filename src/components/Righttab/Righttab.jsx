import {
  CalendarCheck2Icon,
  Check,
  Facebook,
  File,
  Linkedin,
  MessageCircleMore,
  Phone,
  RotateCcw,
  Star,
  Twitter,
  User,
} from "lucide-react";
import React from "react";
import { rainbow_logo } from "../../assets/image";

const Righttab = () => {
  return (
    <>
      <div className="2xl:container mx-auto p-1 rounded-xl" id="hel">
        
        <div
          className="w-[100%] grid grid-cols-1 bg-[#f5f5fa] rounded-xl mx-auto gap-10 "
          id="certi"
        >
          <div className="bg-white px-8 py-5 flex flex-col rounded-lg gap-9">
            <div className="flex items-start">
              <p className="font-[LexendDeca] font-bold text-[24px] text-[#212327]">
                Free
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className=" py-3 font-[LexendDeca] text-white text-[14px] rounded-md w-full"
                id="hel"
              >
                Enroll Now
              </button>
            </div>
            <div className="flex justify-center">
              <p className="font-[LexendDeca] text-[14px] text-[#757c8e]">
                Free access this course
              </p>
            </div>
            <div>
              <p className="flex gap-1 font-[LexendDeca] text-[14px] text-[#757c8e] items-center">
                <CalendarCheck2Icon></CalendarCheck2Icon> Enrollment validity:
                365 days
              </p>
            </div>
            <div className="flex justify-center">
              <p className="flex gap-1 font-[LexendDeca] text-[14px] text-[#212327]">
                <RotateCcw size={20} strokeWidth={1} /> 30-Day Money-Back
                Guarantee
              </p>
            </div>
            <p className="line-clamp-3">
              <p>
                <div className="line-clamp-3">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-[LexendDeca] text-[14px] text-[#6b7385] ">
                            Update:
                          </p>
                        </div>
                        <div>
                          <p className="py-1 px-2 text-[#6b7385] text-[10px] font-bold bg-[#f6f6f6] rounded-3xl">
                            July 17, 2024
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <div>
                          <p className="font-[LexendDeca] text-[14px] text-[#6b7385] ">
                            Enrolled:
                          </p>
                        </div>
                        <div>
                          <p className="py-1 px-2 text-[#6b7385] text-[10px] font-bold bg-[#f6f6f6] rounded-3xl">
                            4
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <div>
                          <p className="font-[LexendDeca] text-[14px] text-[#6b7385] ">
                            Skill level
                          </p>
                        </div>
                        <div>
                          <p className="py-1 px-2 text-[#6b7385] text-[10px] font-bold bg-[#f6f6f6] rounded-3xl">
                            Expert
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <div>
                          <p className="font-[LexendDeca] text-[14px] text-[#6b7385] ">
                            Language
                          </p>
                        </div>
                        <div>
                          <p className="py-1 px-2 text-[#6b7385] text-[10px] font-bold bg-[#f6f6f6] rounded-3xl">
                            English , Spanish
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <div>
                          <p className="font-[LexendDeca] text-[14px] text-[#6b7385] ">
                            Quizes
                          </p>
                        </div>
                        <div>
                          <p className="py-1 px-2 text-[#6b7385] text-[10px] font-bold bg-[#f6f6f6] rounded-3xl">
                            11
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <div>
                          <p className="font-[LexendDeca] text-[14px] text-[#6b7385] ">
                            Course Duration
                          </p>
                        </div>
                        <div>
                          <p className="py-1 px-2 text-[#6b7385] text-[10px] font-bold bg-[#f6f6f6] rounded-3xl">
                            40h 30m
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>

                    <div className="flex flex-col gap-3">
                      <div>
                        <p className="font-semibold font-[LexendDeca] text-[#192335] text-base ">
                          Your Instructors
                        </p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <img
                          src={rainbow_logo}
                          alt=""
                          className="w-[20%] rounded-full"
                        />

                        <div className="flex flex-col gap-1">
                          <p className="font-[LexendDeca] font-semibold text-base text-[#192335] ">
                            Rainbow Themes
                          </p>
                          <p className="font-[Hind] text-[12px] text-[#192335] font-semibold">
                            WordPress Developer
                          </p>
                          <div className="flex gap-1">
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                          </div>
                          <div className="flex flex-col gap-5">
                            <div className="flex justify-between gap-2 items-center">
                              <div className="flex gap-1 items-center flex-nowrap">
                                <File size={20} color="#6b7385"></File>{" "}
                                <p className="text-[#6b7385] font-[LexendDeca] text-base">
                                  0 Courses
                                </p>
                              </div>
                              <div className="flex gap-1 flex-nowrap items-center">
                                <MessageCircleMore
                                  size={20}
                                  color="#6b7385"
                                ></MessageCircleMore>
                                <p className="text-[#6b7385] font-[LexendDeca] text-base">
                                  9 Reviews
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className="flex gap-1">
                                <User size={20} color="#6b7385"></User>
                                <p className="text-[#6b7385] font-[LexendDeca] text-base">
                                  0 Students
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <p className="font-semibold font-[LexendDeca] text-[#192335] text-base ">
                          Your Instructors
                        </p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <img
                          src={rainbow_logo}
                          alt=""
                          className="w-[20%] rounded-full"
                        />

                        <div className="flex flex-col gap-1">
                          <p className="font-[LexendDeca] font-semibold text-base text-[#192335] ">
                            Rainbow Themes
                          </p>
                          <p className="font-[Hind] text-[12px] text-[#192335] font-semibold">
                            WordPress Developer
                          </p>
                          <div className="flex gap-1">
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                            <Star
                              size={20}
                              color="#eab308"
                              strokeWidth={0.75}
                              fill="#eab308"
                            />
                          </div>
                          <div className="flex flex-col gap-5">
                            <div className="flex justify-between gap-2 items-center">
                              <div className="flex gap-1 items-center flex-nowrap">
                                <File size={20} color="#6b7385"></File>{" "}
                                <p className="text-[#6b7385] font-[LexendDeca] text-base">
                                  0 Courses
                                </p>
                              </div>
                              <div className="flex gap-1 flex-nowrap items-center">
                                <MessageCircleMore
                                  size={20}
                                  color="#6b7385"
                                ></MessageCircleMore>
                                <p className="text-[#6b7385] font-[LexendDeca] text-base">
                                  9 Reviews
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className="flex gap-1">
                                <User size={20} color="#6b7385"></User>
                                <p className="text-[#6b7385] font-[LexendDeca] text-base">
                                  0 Students
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-4">
                      <p className="font-[LexendDeca] text-[#192335] font-semibold text-base">
                        Requirements
                      </p>
                      <div className="flex gap-2 items-start">
                        <Check size={35} color="#6b7385"></Check>

                        <div>
                          <p className="font-[LexendDeca] text-[#6b7385] text-base">
                            The theme design, features, and customer support of
                            No Requirements are truly outstanding!
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-3">
                      <p className="font-semibold font-[LexendDeca] text-[#192335] text-base">
                        Tags
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        <button className="bg-[#f6f6f6] py-1 px-4 rounded-lg font-[LexendDeca] text-base text-gray-700">
                          Eduction Themes
                        </button>
                        <button className="bg-[#f6f6f6] py-1 px-4 rounded-lg font-[LexendDeca] text-base text-gray-700">
                          Hi Study
                        </button>
                        <button className="bg-[#f6f6f6] py-1 px-4 rounded-lg font-[LexendDeca] text-base text-gray-700">
                          LMS
                        </button>
                        <button className="bg-[#f6f6f6] py-1 px-4 rounded-lg font-[LexendDeca] text-base text-gray-700">
                          Online Learning
                        </button>
                        <button className="bg-[#f6f6f6] py-1 px-4 rounded-lg font-[LexendDeca] text-base text-gray-700">
                          Tutor
                        </button>
                        <button className="bg-[#f6f6f6] py-1 px-4 rounded-lg font-[LexendDeca] text-base text-gray-700">
                          Tutor Pro
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-5">
                      <p className="font-[LexendDeca] font-semibold text-base text-[#192335]">
                        Target Audience
                      </p>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Check color="#6b7385" size={16}></Check>
                        </div>
                        <div className="flex items-end">
                          <p className="text-[#6b7385] font-[LexendDeca] text-[13px]">
                            For The Education Industry Online Or Offline
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Check color="#6b7385" size={16}></Check>
                        </div>
                        <div>
                          <p className="text-[#6b7385] font-[LexendDeca] text-[13px]">
                            Tutor LMS, Elementor + ACF Pro + WooCommerce
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <Check color="#6b7385" size={16}></Check>
                        </div>
                        <div>
                          <p className="text-[#6b7385] font-[LexendDeca] text-[13px]">
                            Fast, Lightweight Education WordPress Theme
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </p>
            
          </div>
          <div className="bg-[#F5F5FA] py-3 rounded-b-lg">
              <div className="flex justify-center gap-3 py-3">
                <div className="group rounded-full py-4 px-4 border scale-100 hover:bg-blue-600 transition group-hover:scale-105 cursor-pointer ">
                  <Facebook size={16} className="text-gray-500 group-hover:text-white"></Facebook>
                </div>
                <div className="group rounded-full py-4 px-4 border scale-100 hover:bg-blue-600 transition group-hover:scale-105 cursor-pointer">
                  <Twitter size={16} className="text-gray-500 group-hover:text-white"></Twitter>
                </div>
                <div className="group rounded-full py-4 px-4 border scale-100 hover:bg-blue-600 transition group-hover:scale-105 cursor-pointer">
                  <Linkedin size={16} className="text-gray-500 group-hover:text-white"></Linkedin>
                </div>
              </div>
              <hr className="w-[80%] mx-auto"/>
              <div className="flex flex-col items-center gap-5 py-5">
                <p className="font-[LexendDeca] text-[#212327] text-[13px] ">Card contact label</p>
                <div className="flex items-center justify-center gap-3 bg-[#E6DBFC] px-10 py-3 rounded-3xl">
                  <Phone></Phone>
                  <div><p className="font-[LexendDeca] text-[14px] text-[#192335] font-semibold">Call us: <span className="font-bold text-blue-600 font-[LexendDeca] ">44455566677</span></p></div>
                </div>
              </div>
              
            </div>
        </div>
      </div>
    </>
  );
};

export default Righttab;
