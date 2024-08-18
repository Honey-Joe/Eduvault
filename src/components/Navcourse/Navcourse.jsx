import React from 'react'
import Navabout from '../Navabout/Navabout'
import Navbenifit from '../Navbenifit/Navbenifit';
import Navcertificate from '../Navcerticate/Navcertificate';
import Coursecard from '../Coursecard/Coursecard';

const Navcourse = () => {
  return (
    <>   
    <div className='2xl:container'>
        <div className=''>
        <Navabout></Navabout>
        <Navbenifit></Navbenifit>
        <Navcertificate></Navcertificate>
        <Coursecard></Coursecard>
        </div>
    </div>
      
    </>
  )
}

export default Navcourse;
