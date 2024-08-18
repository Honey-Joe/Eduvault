import { certifcate } from "../../assets/image"


const Navcertificate = () => {
  return (
    <>
     <div className="3xl:container">

        <div className="grid grid-cols-1 xl:grid-cols-2 py-3 px-3 gap-5 rounded-xl" id="certi">
            <div className="py-3 flex flex-col gap-2">
                <p className="font-[LexendDeca] font-bold text-[20px]">Earn a certificate</p>
                <hr />
                <p className="font-[Hind] text-[18px] text-black ">Add this certificate to your resume to demonstrate your skills & increase your chances of getting noticed.</p>
            </div>
            <div className="">
                <img src={certifcate} alt="certificate" />
            </div>
        </div>
    </div> 
    </>
  )
}

export default Navcertificate
