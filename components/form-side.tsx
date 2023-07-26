import type { NextPage } from "next";
import FrameComponent from "./frame-component";

const FormSide: NextPage = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[120px] text-left text-13xl text-standard-black font-plus-jakarta-sans md:flex-col">
      <div className="self-stretch h-[97px] flex flex-row py-9 pr-0 pl-8 box-border items-start justify-start gap-[10px]">
        <img className="relative w-[76.8px] h-[25px]" alt="" src="/start.svg" />
        <img
          className="relative w-[37.44px] h-[24.61px]"
          alt=""
          src="/up.svg"
        />
      </div>
      <div className="w-[341px] h-[306px] flex flex-col items-start justify-start md:flex-row">
        <FrameComponent />
      </div>
    </div>
  );
};

export default FormSide;
