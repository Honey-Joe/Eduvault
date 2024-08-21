import { Check } from "lucide-react";
import React from "react";
import { decode } from "html-entities";

const Navbenifit = () => {
  return (
    <>
      <div className="2xl:container mx-auto my-3">
        <div className="w-[100%] grid grid-cols-1 px-8 py-6 bg-white rounded-lg" id="certi">
          <div className="py-3 flex flex-col gap-2">
            <p className="font-[LexendDeca] font-bold text-[20px] text-[#192335]">
              Benefits of the course
            </p>
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex ">
                <div>
                  <Check color="#3eb75e" />
                </div>
                <p className="font-[Hind] text-[16px] text-[#6b7385] ">
                  {" "}
                  You don't need to learn anything just follow our <a href="https://rainbowthemes.net/docs/histudy-wp/" className="no-underline">documentation</a> 
                  and create your dream site.
                </p>
              </div>
              <div className="flex gap-1">
                <div>
                <Check color="#3eb75e" />{" "}
                </div>
                <p className="font-[Hind] text-[16px] text-[#6b7385] ">
                  Moreover, we provide a comprehensive video guide for your
                  convenience.{" "}
                  <a href="https://youtu.be/DR9lxZ8kPYQ?feature=shared" className="no-underline">
                    You can watch it here
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbenifit;
