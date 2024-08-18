import React from "react";
import { navcourseimg1, navcourseimg2 } from "../../assets/image";

const Navabout = () => {
  return (
    <>
      <div className="2xl:container bg-[#FCFCFC]">
        <div className="w-[100%] grid grid-cols-1 px-4 py-6 bg-white rounded-lg" id="certi">
          <div className="py-3">
            <p className="font-[LexendDeca] font-bold text-[#192335] text-[20px]" >About Course</p>
          </div>
          <hr />

          <div className="py-3">
            <p className="font-[LexendDeca] font-bold text-[20px] text-[#192335]">
              Our HiStudy WordPress theme is the ultimate solution for everyone!
            </p>
          </div>
          <div className="py-3">
            <p className="font-[Hind] text-[#41454f] text-[14px] ">
              <span className="font-bold font-[Hind]"> HiStudy</span>  Education Themes, developed by Rainbow-Themes, is a
              feature-rich WP product meticulously crafted for educational
              purposes. Its primary objective is to assist you in building a
              robust eLearning platform with online courses similar to Udemy,
              all within WordPress. With its intuitive interface, no programming
              skills are required.
            </p>
          </div>
          <div>
            <p className="font-[Hind] text-[#41454f] text-[14px] py-3">
              This plugin offers a comprehensive array of innovative features.
              It boasts a powerful admin panel, course builder, messaging
              system, advanced quiz options, and seamless integration with
              essential tools, among other functionalities.
            </p>
          </div>
          <div>
            <p className="font-[Hind] text-[#41454f] text-[14px] py-3">
              <a href="https://rainbowthemes.net/themes/histudy/" className=" no-underline font-bold">Education WordPress Theme</a> – HiStudy is made for{" "}
              <a href="https://rainbowthemes.net/themes/histudy/" className="no-underline">
                Education Website
              </a>{" "}
              ,{" "}
              <a href="https://rainbowthemes.net/themes/histudy/home-online-courses/"className="no-underline">
                Online LMS,
              </a>
              <a href="https://rainbowthemes.net/themes/histudy/home-marketplace/" className="no-underline">
                Online Course Website,
              </a>{" "}
              <a href="https://rainbowthemes.net/themes/histudy/home-marketplace/" className="no-underline">
                Course Hub (Marketplace),
              </a>{" "}
              <a href="https://rainbowthemes.net/themes/histudy/home-online-course-education/" className="no-underline">
                Online Learning Platform,
              </a>{" "}
              <a href="https://rainbowthemes.net/themes/histudy/home-university-classic/" className="no-underline">
                University,
              </a>{" "}
              <a href="https://rainbowthemes.net/themes/histudy/home-single-courses/" className="no-underline">
                Single Course,
              </a>{" "}
              <a href="https://rainbowthemes.net/themes/histudy/home-kindergarden/" className="no-underline">
                Kindergarden ,
              </a>
              <a href="https://rainbowthemes.net/themes/histudy/home-gym-coachings/" className="no-underline">
                {" "}
                GYM Coachings
              </a>{" "}
              and more.
            </p>
          </div>
          <div>
            <img src={navcourseimg1} alt="navimg" />
          </div>
          <div>
            <p className="font-[Hind] text-[#41454f] text-[14px] py-5">
              Designed to cater to diverse educational needs, the HiStudy theme
              is suitable for individual instructors, language or coaching
              centers, universities, and eLearning platforms alike. Stay tuned
              as we guide you through utilizing the theme swiftly and
              effortlessly in the upcoming lessons.
            </p>
          </div>
          <div>
            <img src={navcourseimg2} alt="navimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navabout;
