import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList, TabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel, TabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, Tab, tabClasses } from '@mui/base/Tab';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Navcourse from '../Navcourse/Navcourse';
import Curriculam from '../Curriculam/Curriculam';
import Review from '../Navreview/Navreview';
import Announcement from '../Announcement/Announcement';
import Content from '../Navcourse/Navcourse';

 function Navtab(children,max) {

  
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
 
  return (
    <>
    <div className='2xl:container'>
      <div className='xl:w-[55%] xl:ml-[12%] w-[90%] mx-auto grid grid-cols-1'>
      <Tabs defaultValue={1}>
      <TabsList className='pb-3'>
        <div className='slider-container'>
          <Slider {...settings}>
            <div>
        <Tab value={1} slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-[LexendDeca] text-[17px] border-b-4 ${
                selected
                  ? 'text-[#1363df] border-b-4 border-[#1363df] '
                  : 'text-[#39557e]'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-sm font-semibold w-full px-1 py-2 m-1.5  flex justify-center focus:outline-0`,
            }),
          }}>
          
          <button  className=''>Course Info</button>
          </Tab>

            </div>
            <div>
        <Tab value={2} slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-[LexendDeca] text-[17px] border-b-4 ${
                selected
                  ? 'text-[#1363df] border-b-4 border-[#1363df] '
                  : 'text-[#39557e]'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-sm font-semibold w-full px-1 py-2 m-1.5  flex justify-center focus:outline-0`,
            }),
          }}>

          <button className=''>
            Curriculam
          </button>
        </Tab>

            </div>
            <div>
        <Tab value={3} slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-[LexendDeca] text-[17px] border-b-4 ${
                selected
                  ? 'text-[#1363df] border-b-4 border-[#1363df] '
                  : 'text-[#39557e]'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-sm  font-semibold w-full px-1 py-2 m-1.5  flex justify-center focus:outline-0`,
            }),
          }}>
          <button className=''>
          Review

          </button>
          
          </Tab>

            </div>
            <div>
              <Tab value={4} slotProps={{
            root: ({ selected, disabled }) => ({
              className: `font-[LexendDeca] text-[17px] border-b-4 ${
                selected
                  ? 'text-[#1363df] border-b-4 border-[#1363df] '
                  : 'text-[#39557e]'
              } ${
                disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              } text-sm font-semibold w-full px-1 py-2 m-1.5  flex justify-center focus:outline-0`,
            }),
          }}>
                <button className=''>Announcement</button>
              </Tab>
            </div>
          </Slider>
        </div>
        
      </TabsList>
      <TabPanel value={1}>
        <Content></Content>
      </TabPanel>
      <TabPanel value={2}>
          <Curriculam></Curriculam>
        </TabPanel>
      <TabPanel value={3}>

        <Review></Review>
      </TabPanel>
      <TabPanel value={4}>
        <Announcement></Announcement>
      </TabPanel>
    </Tabs>
      </div>
    </div>
      
    </>
    
  );
}

export default Navtab


