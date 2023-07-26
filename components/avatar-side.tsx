import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type AvatarSideType = {
  avatarSampleEnforcer3?: string;

  /** Style props */
  avatarSideWidth?: Property.Width;
  avatarSideFlexShrink?: Property.FlexShrink;
  avatarSideMaxWidth?: Property.MaxWidth;
  frameDivAlignSelf?: Property.AlignSelf;
  frameDivWidth?: Property.Width;
};

const AvatarSide: NextPage<AvatarSideType> = ({
  avatarSampleEnforcer3,
  avatarSideWidth,
  avatarSideFlexShrink,
  avatarSideMaxWidth,
  frameDivAlignSelf,
  frameDivWidth,
}) => {
  const avatarSideStyle: CSS.Properties = useMemo(() => {
    return {
      width: avatarSideWidth,
      flexShrink: avatarSideFlexShrink,
      maxWidth: avatarSideMaxWidth,
    };
  }, [avatarSideWidth, avatarSideFlexShrink, avatarSideMaxWidth]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivWidth]);

  return (
    <div
      className="self-stretch box-border w-[405px] overflow-hidden shrink-0 flex flex-col py-2.5 px-10 items-center justify-start gap-[10px] text-center text-base text-standard-white font-button-type-1 border-r-[1px] border-solid border-standard-white md:flex-col"
      style={avatarSideStyle}
    >
      <div
        className="self-stretch overflow-hidden flex flex-col pt-2.5 px-0 pb-0 items-center justify-start gap-[10px] text-xl"
        style={frameDivStyle}
      >
        <div className="self-stretch relative leading-[125%]">
          <p className="[margin-block-start:0] [margin-block-end:3px]">
            <b>Mankey55</b>
          </p>
          <p className="m-0">[Custodian] | Enforcer</p>
        </div>
        <div className="rounded-mini bg-standard-white w-[300px] h-[300px] overflow-hidden shrink-0 flex flex-col p-[7.5px] box-border items-center justify-center">
          <img
            className="relative w-[375px] h-[375px] object-cover"
            alt=""
            src={avatarSampleEnforcer3}
          />
        </div>
      </div>
      <div className="rounded-3xs box-border w-[300px] h-[50px] flex flex-row py-4 px-8 items-center justify-center border-[1px] border-solid border-standard-white lg:hidden">
        <b className="relative leading-[125%] capitalize">Customize</b>
      </div>

      <div className="rounded-3xs box-border w-[300px] h-[50px] flex flex-row py-4 px-8 items-center justify-center border-[1px] border-solid border-standard-white lg:hidden">
        <b className="relative leading-[125%] capitalize">Generate Banners</b>
      </div>
      <div className="rounded-3xs [background:linear-gradient(180deg,_#4ddcff,_#a9eeff)] w-[300px] h-[50px] flex flex-row py-4 px-8 box-border items-center justify-center text-standard-black lg:hidden">
        <b className="relative leading-[125%] capitalize">Create Goods</b>
      </div>
      <div className="rounded-3xs bg-dark-blue-suppressed w-[300px] h-[50px] flex flex-row py-4 px-8 box-border items-center justify-center text-light-grey-secondary lg:hidden">
        <b className="relative leading-[125%] capitalize">Tokenize</b>
      </div>
      <div className="rounded-3xs bg-dark-blue-suppressed w-[300px] h-[50px] flex flex-row py-4 px-8 box-border items-center justify-center text-light-grey-secondary lg:hidden">
        <b className="relative leading-[125%] capitalize">Opensea</b>
      </div>
    </div>
  );
};

export default AvatarSide;
