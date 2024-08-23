
import YoutubeVid from '../YoutubeVid/YoutubeVid'
import Navtab from '../Navtab/Navtab'
import Topcourse from '../Topcourse/Topcourse'
import Righttab from '../Righttab/Righttab'

const Body = () => {
  return (
    <>
    <div className='bg-[#FCFCFC] relative'>
    
     <YoutubeVid></YoutubeVid>
     <Navtab></Navtab> 
      <div className='xl:-mt-[137%] lg:-mt-[210%] w-[80%] mx-auto lg:w-[30%] xl:w-[27%] lg:ml-[68%] xl:ml-[70%]  '>
          <Righttab></Righttab>
      </div>
      <Topcourse></Topcourse>
    </div>
    </>
  )
}

export default Body
