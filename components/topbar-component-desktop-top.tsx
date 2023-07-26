import type { NextPage } from "next";

const TopbarComponentDesktopTop: NextPage = () => {
  return (
    <div className="my-0 mx-[!important] absolute top-[0px] left-[0px] bg-standard-white overflow-hidden flex flex-col items-start justify-start z-[2] text-left text-13xl text-standard-white font-abhaya-libre">
      <div className="relative w-[1440px] h-[100px]">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[100px]">
          <div className="absolute top-[0px] left-[0px] bg-standard-black w-[1440px] h-[100px]" />
        </div>
        <b className="absolute top-[25px] left-[105px] leading-[125%] flex items-center w-[226px] h-[50px]">
          A.C.E. Platform
        </b>
        <img
          className="absolute top-[15px] left-[25px] w-[70px] h-[70px] object-cover"
          alt=""
          src="/arcanalogo-blue-2@2x.png"
        />
      </div>
    </div>
  );
};

export default TopbarComponentDesktopTop;
