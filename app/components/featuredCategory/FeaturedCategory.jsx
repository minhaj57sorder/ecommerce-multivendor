import { RiHomeSmileFill } from "react-icons/ri";
const FeaturedCategory = () => {
  return (
    <div className="flex justify-center max-w-full py-2 px-2 md:px-0">
      <div className="xl:w-[1280px] w-full">
        <div className="flex mx-[-0.5rem] justify-between items-center">
          <div className="sm:bg-white sm:text-black rounded-full w-1/4 mx-2 flex items-center sm:flex-row flex-col sm:py-2 py-0 sm:px-2 px-0">
            <RiHomeSmileFill className="sm:text-xl text-[3rem]" />
            <div className="text-xs sm:text-sm sm:mx-3 mx-0">Beauty</div>
          </div>
          <div className="sm:bg-white sm:text-black rounded-full w-1/4 mx-2 flex items-center sm:flex-row flex-col sm:py-2 py-0 sm:px-2 px-0">
            <RiHomeSmileFill className="sm:text-xl text-[3rem]" />
            <div className="text-xs sm:text-sm sm:mx-3 mx-0">Cloath</div>
          </div>
          <div className="sm:bg-white sm:text-black rounded-full w-1/4 mx-2 flex items-center sm:flex-row flex-col sm:py-2 py-0 sm:px-2 px-0">
            <RiHomeSmileFill className="sm:text-xl text-[3rem]" />
            <div className="text-xs sm:text-sm sm:mx-3 mx-0">Health</div>
          </div>
          <div className="sm:bg-white sm:text-black rounded-full w-1/4 mx-2 flex items-center sm:flex-row flex-col sm:py-2 py-0 sm:px-2 px-0">
            <RiHomeSmileFill className="sm:text-xl text-[3rem]" />
            <div className="text-xs sm:text-sm sm:mx-3 mx-0">Furniture</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
