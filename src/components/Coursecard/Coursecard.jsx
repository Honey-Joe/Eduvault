import { Facebook, Instagram, Linkedin, Star, Twitter } from "lucide-react"
import { rainbow_logo } from "../../assets/image"


const Card_intro = () => {
  return (
    <>
     <div className="2xl:container py-10">
        <div className=" grid grid-cols-1 mx-auto items-center justify-center">
            <div className="flex flex-col justify-center px-5 shadow-2xl py-3 rounded-xl">
                <div className="flex justify-start py-2">
                    <p className="font-[LexendDeca] font-bold">Instructor</p>
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div className="flex gap-10 items-center justify-center">
                    <div className="w-[60%]">
                        <img src={rainbow_logo} alt="" className="h-[150px] w-[150px] rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center py-3 gap-3">
                        <p className="font-[LexendDeca] text-[20px]  font-bold hover:text-[#2f57ef]">Rainbow themes</p>
                        <p className="font-[Hind] text-base text-[#6b7385]">Word press Developer</p>
                        <div className="flex gap-1">
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <Star className="  fill-[#FF9747] text-[#FF9747]" />
                        <div className="flex gap-4 items-center">
                            <p className="font-[Hind] text-[14px] text-[#6b7385]">4.86</p>
                            <p className="font-[Hind] text-[14px] text-[#6b7385]">(7 ratings)</p>
                        </div>
                        </div>
                        <div>
                            <p className="font-[Hind] text-[18px] text-[#212327]">I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                        </div>
                        <div className="flex gap-4">
                        <Facebook  className="cursor-pointer w-[4%] hover:text-[#2f57ef]"/>
                        <Twitter className="cursor-pointer w-[4%] hover:text-[#2f57ef]"></Twitter>
                        <Instagram className="cursor-pointer w-[4%] hover:text-[#2f57ef]"></Instagram>
                        <Linkedin className="cursor-pointer w-[4%] hover:text-[#2f57ef]"></Linkedin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Card_intro
