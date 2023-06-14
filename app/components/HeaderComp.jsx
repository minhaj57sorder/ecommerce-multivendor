import { BsSearch, BsGooglePlay } from "react-icons/bs";
import { RiHomeSmileFill } from "react-icons/ri";
import { BiCart } from "react-icons/bi";
import Link from "next/link";

const HeaderComp = () => {
  return (
    <div className="flex justify-center max-w-full bg-slate-50 py-2 px-2 md:px-0">
      <div className="xl:w-[1280px] w-full">
        <div className="flex justify-between items-center ">
          <Link href="/">
          <div className="logo text-4xl text-slate-800 md:block hidden">
            <RiHomeSmileFill />
          </div>

          </Link>
          <div className="searchbar w-full md:w-[30rem] relative">
            <input
              type="text"
              className="form-input px-4 py-3 rounded w-full md:w-[30rem] bg-slate-300"
            />
            <div className="absolute top-0 right-0 h-[48px] w-[48px] flex items-center justify-center hover:bg-slate-700 bg-slate-900 text-white rounded">
              <BsSearch />
            </div>
          </div>
          <div className="cart text-3xl text-slate-800  md:flex hidden">
            <BiCart />
            {/* <div className="flex items-center w-28 ">
              <div className="text-xs">App Store</div>
              <BsGooglePlay />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
