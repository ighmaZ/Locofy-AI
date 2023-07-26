import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const LandingPage: NextPage = () => {
  const router = useRouter();

  const onLandingPageContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onSubmodulePCBackgroundOveClick = useCallback(() => {
    router.push("/background-component-desktop");
  }, [router]);

  return (
    <div
      className="relative bg-standard-white w-full h-[900px] overflow-hidden cursor-pointer text-left text-xs text-standard-white font-body-3"
      onClick={onLandingPageContainerClick}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[900px] object-cover"
        alt=""
        src="/image-135@2x.png"
      />
      <div className="absolute top-[860px] left-[0px] box-border w-[1440px] h-10 overflow-hidden border-t-[1px] border-solid border-standard-white">
        <div className="absolute top-[10px] left-[45px] w-[1350px] flex flex-row items-center justify-between">
          <div className="relative leading-[125%]">© 2022 Promisphere</div>
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <div className="relative leading-[125%]">Privacy policy</div>
            <div className="relative leading-[125%]">Terms of services</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-standard-white w-[1440px] overflow-hidden flex flex-col items-start justify-start text-13xl font-abhaya-libre">
        <div className="flex flex-col items-start justify-start relative gap-[10px]">
          <div className="relative bg-standard-black w-[1440px] h-[100px] z-[0]" />
          <b className="absolute my-0 mx-[!important] top-[25px] left-[105px] leading-[125%] flex items-center w-[226px] h-[50px] shrink-0 z-[1]">
            A.C.E. Platform
          </b>
          <img
            className="absolute my-0 mx-[!important] top-[15px] left-[25px] w-[70px] h-[70px] object-cover z-[2]"
            alt=""
            src="/arcanalogo-blue-2@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[179px] left-[3px] bg-dark-blue-filter w-[1437px] h-[681px] overflow-hidden flex flex-row items-center justify-center max-w-full text-center text-45xl lg:flex-row lg:items-start lg:justify-start md:flex-col sm:flex-col">
        <button
          className="cursor-pointer [border:none] p-[30px] bg-[transparent] flex-1 h-[760px] overflow-hidden flex flex-col box-border items-center justify-center gap-[30px] bg-[url(/submodule--pc-background-overlay@3x.png)] bg-cover bg-no-repeat bg-[top] w-full md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
          autoFocus
          onClick={onSubmodulePCBackgroundOveClick}
        >
          <img
            className="relative w-[121.38px] h-[140px] md:h-[60]"
            alt=""
            src="/vector.svg"
          />
          <div className="relative text-45xl leading-[125%] font-body-3 text-standard-white text-center md:text-[2rem]">
            <p className="[margin-block-start:0] [margin-block-end:2px]">
              View
            </p>
            <p className="m-0">My Collection</p>
          </div>
        </button>
        <div className="flex-1 h-[760px] overflow-hidden flex flex-col p-[30px] box-border items-center justify-center gap-[30px] bg-[url(/submodule--pc-background-overlay1@3x.png)] bg-cover bg-no-repeat bg-[top] w-full md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <img
            className="relative w-[122.5px] h-[140px] md:h-[60]"
            alt=""
            src="/vector1.svg"
          />
          <div className="relative leading-[125%] md:text-[2rem]">
            <p className="[margin-block-start:0] [margin-block-end:2px]">{`Generate `}</p>
            <p className="m-0">New Arcana</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[101px] left-[-3px] bg-standard-black [backdrop-filter:blur(4px)] w-[1440px] overflow-hidden flex flex-row py-5 px-[30px] box-border items-center justify-center opacity-[0.9] text-[30px] lg:items-start lg:justify-start lg:pl-[70px] lg:box-border md:items-start md:justify-start md:pl-[30px] md:box-border md:text-[1.1rem] sm:text-[1rem]">
        <div className="relative tracking-[0.02em] leading-[125%]">
          Welcome Back Prime. What’s the agenda?
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
