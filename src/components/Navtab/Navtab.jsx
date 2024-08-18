import { useEffect, useRef, useState } from 'react';
import Navcourse from '../Navcourse/Navcourse';
import Curriculam from '../Curriculam/Curriculam';

import SimpleSlider from '../Review/Review';
import Review from '../Review/Review';
import Announcement from '../Announcement/Announcement';

const tabsData = [
  {
    label: 'Course Info',
    content:
      <Navcourse></Navcourse>,
  },
  {
    label: 'Curriculam',
    content:
      <Curriculam></Curriculam>,
  },
  {
    label: 'Review',
    content:
     <Review></Review>,
  },
  {
    label: 'Announcement',
    content:<Announcement></Announcement>
  },
];
 function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className='2xl:container'>
      <div className='w-[90%] xl:w-[54%] grid grid-cols-1 xl:ml-[11%] mx-auto my-11 '>
        <div>
        <div className="relative">
        <div className="flex xl:space-x-16 border-b space-x-3">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-2 font-[LexendDeca] text-[#1363df]"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-[2px] bg-[#1363DF] transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
        </div>
      
      </div>
      
    </div>
  );
}
export default Tabs