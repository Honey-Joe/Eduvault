
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
      <div className='lg:absolute lg:top-0 w-[80%] mx-auto lg:w-[30%] lg:ml-[67%]  '>
          <Righttab></Righttab>
      </div>
      <Topcourse></Topcourse>
    </div>
    </>
  )
}

export default Body
