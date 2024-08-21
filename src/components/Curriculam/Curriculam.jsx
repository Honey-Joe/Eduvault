import { ChevronRight,LockKeyhole, Youtube } from "lucide-react"
import { useState } from "react"
const Curriculam = () => {
    const [accordion, setAccordion ] = useState(false)
    const [basic, setBasic ] = useState(false)
  return (
    <>
        <div>
            <div className="px-6 py-8">
                <h1 className=" font-semibold text-[22px] font-[LexendDeca] text-[#082a5e]">Course Curriculum</h1>
                <div className=" pt-5 group">
                    <button  onClick={()=> setAccordion(!accordion)} className={`flex items-center justify-between w-full p-3 rounded-md border-2  ${accordion ? 'rounded-bl-none rounded-br-none text-[#1363df] bg-[#e3e5eb] transition ease-in-out' : 'rounded-md'}`}>
                        <span className=" font-semibold font-[LexendDeca] text-[18px] transition-colors ease-in-out group-hover:text-[#1363df]">Advance Concepts</span>
                        
                        <span><ChevronRight className={`${accordion? '-rotate-90 transition stroke-[#1363df]' : ' rotate-0 transition stroke-[#1363df]'}`}/></span>
                    </button>
                    <div  className={`grid overflow-hidden transition-all  rounded-b-md duration-300 ease-in-out  text-sm border-2 ${
                        accordion ? 'grid-rows-[1fr] opacity-100 ease-in-out delay-700 transition-all':'grid-rows-[0fr] opacity-0 hidden transition'
                    }`}>
                        <div className="p-3 flex items-center justify-between hover:bg-[#e3e5eb]">
                            <div className=" flex items-center gap-2">
                                <Youtube className="font-bold h-5 text-slate-600"/>
                                <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[LexendDeca] text-slate-800 ">Meal Planning Explained</p>
                            </div>
                            <div className=" flex space-x-3">
                                <p className=" font-[Hind-r] text-[14px] text-slate-600">07:00</p>
                                <LockKeyhole className=" h-4 text-slate-600"/>
                            </div>
                        </div>   
                       
                        <div className="p-3 flex items-center justify-between hover:bg-[#e3e5eb]">
                            <div className=" flex items-center gap-2">
                                <Youtube className="font-bold h-5 text-slate-600"/>
                                <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[LexendDeca] text-slate-800">Macronutrients Explained</p>
                            </div>
                            <div className=" flex space-x-3">
                                <p className=" font-[Hind-r] text-[14px] text-slate-600">07:00</p>
                                <LockKeyhole className=" h-4 text-slate-600"/>
                            </div>
                        </div>
                        
                        <div className="p-3 flex items-center justify-between hover:bg-[#e3e5eb]">
                            <div className=" flex items-center gap-2">
                                <Youtube className="font-bold h-5 text-slate-600"/>
                                <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[LexendDeca] text-slate-800">
                                Adjusting Your Diet To Build Muscle</p>
                            </div>
                            <div className=" flex space-x-3">
                                <p className=" font-[Hind-r] text-[14px] text-slate-600">07:00</p>
                                <LockKeyhole className=" h-4 text-slate-600"/>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className=" pt-0 group">
                    <button  onClick={()=> setBasic(!basic)} className={`flex items-center justify-between w-full  p-3 rounded-md border-2  ${basic ? 'rounded-bl-none rounded-br-none text-[#1363df] bg-[#e3e5eb] '  : 'rounded-md'}`}>
                        <span className=" font-semibold font-[LexendDeca] text-[18px] transition-colors ease-in-out group-hover:text-[#1363df]">Advance Concepts</span>
                        
                        <span><ChevronRight className={`${basic? '-rotate-90 transition stroke-[#1363df]' : ' rotate-0 transition stroke-[#1363df]'}`}/></span>
                    </button>
                    <div className={`grid overflow-hidden transition-all  border-2 rounded-b-md duration-300 ease-in-out  text-sm ${
                        basic ? 'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0 hidden'
                    }`}>
                        <div className="p-5 flex items-center justify-between hover:bg-[#e3e5eb]">
                            <div className=" flex items-center gap-2">
                                <Youtube className="font-bold h-5 text-slate-600"/>
                                <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[LexendDeca] text-slate-800">Meal Planning Explained</p>
                            </div>
                            <div className=" flex space-x-3">
                                <p className=" font-[Hind-r] text-[14px] text-slate-600">07:00</p>
                                <LockKeyhole className=" h-4 text-slate-600"/>
                            </div>
                        </div>   
                       
                        <div className="p-5 flex items-center justify-between hover:bg-[#e3e5eb]">
                            <div className=" flex items-center gap-2">
                                <Youtube className="font-bold h-5 text-slate-600"/>
                                <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[LexendDeca] text-slate-800">Macronutrients Explained</p>
                            </div>
                            <div className=" flex space-x-3">
                                <p className=" font-[Hind-r] text-[14px] text-slate-600">07:00</p>
                                <LockKeyhole className=" h-4 text-slate-600"/>
                            </div>
                        </div>
                        
                        <div className="p-5 flex items-center justify-between hover:bg-[#e3e5eb]">
                            <div className=" flex items-center gap-2">
                                <Youtube className="font-bold h-5 text-slate-600"/>
                                <p className=" font-medium text-[16px] hover:bg-[#ebecef] font-[LexendDeca] text-slate-800">                               
                                    How Much Fat Should You Consume Per Day</p>
                            </div>
                            <div className=" flex space-x-3">
                                <p className=" font-[Hind-r] text-[14px] text-slate-600">07:00</p>
                                <LockKeyhole className=" h-4 text-slate-600"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Curriculam