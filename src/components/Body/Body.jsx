import YoutubeVid from "../YoutubeVid/YoutubeVid";
import Navtab from "../Navtab/Navtab";
import Topcourse from "../Topcourse/Topcourse";
import Righttab from "../Righttab/Righttab";

const Body = () => {
  return (
    <>
      <div className="3xl:container mx-auto bg-[#FCFCFC]">
        <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div>
            <YoutubeVid></YoutubeVid>
            <Navtab></Navtab>
          </div>
          <div className="flex justify-end">
            <Righttab></Righttab>
          </div>
        </div>
        <Topcourse></Topcourse>
      </div>
    </>
  );
};

export default Body;
