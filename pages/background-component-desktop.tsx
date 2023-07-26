import type { NextPage } from "next";
import TopbarComponentDesktopTop from "../components/topbar-component-desktop-top";
import AvatarSide from "../components/avatar-side";

const BackgroundComponentDesktop: NextPage = () => {
  return (
    <div className="relative bg-standard-white w-full h-auto overflow-hidden flex flex-col items-start justify-start gap-[10px] text-left text-xs text-standard-white font-button-type-1 lg:flex-col">
      <img
        className="relative w-[1440px] h-[900px] object-cover z-[0]"
        alt=""
        src="/image-135@2x.png"
      />
      <div className="absolute my-0 mx-[!important] top-[860px] left-[0px] box-border w-[1440px] h-10 overflow-hidden shrink-0 z-[1] border-t-[1px] border-solid border-standard-white">
        <div className="absolute top-[10px] left-[45px] w-[1350px] h-[15px]">
          <div className="absolute top-[0px] left-[0px] w-[1350px] flex flex-row items-center justify-between">
            <div className="relative leading-[125%]">© 2022 Promisphere</div>
            <div className="flex flex-row items-start justify-start gap-[32px]">
              <div className="relative leading-[125%]">Privacy policy</div>
              <div className="relative leading-[125%]">Terms of services</div>
            </div>
          </div>
        </div>
      </div>
      <TopbarComponentDesktopTop />
      <div className="my-0 mx-[!important] absolute top-[100px] left-[0px] bg-dark-blue-filter w-[1440px] h-[760px] overflow-hidden shrink-0 flex flex-row p-[30px] box-border items-center justify-center max-w-full z-[3] lg:flex-row lg:max-w-full lg:h-auto md:flex-col md:items-center md:justify-center">
        <AvatarSide
          avatarSampleEnforcer3="/avatarsample-enforcer-3@2x.png"
          avatarSideWidth="unset"
          avatarSideFlexShrink="unset"
          avatarSideMaxWidth="100%"
          frameDivAlignSelf="unset"
          frameDivWidth="300px"
        />
        <section className="h-[664px] overflow-hidden flex flex-col py-2.5 px-[30px] box-border items-start justify-start gap-[10px] text-left text-9xl text-standard-white font-button-type-1 md:flex-col md:items-start md:justify-start">
          <div className="self-stretch overflow-hidden flex flex-col p-2.5 items-center justify-start">
            <b className="relative leading-[125%]">Your Arcana Collection</b>
          </div>
          <div className="relative w-[734px] h-[245px] overflow-hidden shrink-0 text-center text-xl font-public-sans md:flex-col">
            <div className="absolute top-[10px] left-[10px] w-[714px] h-[217px] overflow-hidden lg:flex-row md:flex-row md:items-center md:justify-center sm:flex-col">
              <div className="absolute top-[10px] left-[24px] flex flex-row items-start justify-start md:flex-col md:pl-10 md:box-border sm:pl-[150px] sm:box-border">
                <div className="flex flex-row items-start justify-start gap-[30px] md:flex-row md:items-start md:justify-start">
                  <div className="rounded-3xs w-[177px] h-[166px] overflow-hidden shrink-0 flex flex-col p-[5px] box-border items-center justify-center bg-[url(/frame-427319978@3x.png)] bg-cover bg-no-repeat bg-[top] sm:flex-col sm:items-end sm:justify-center sm:pl-[150px] sm:box-border sm:hidden">
                    <b className="self-stretch relative tracking-[0.05em] leading-[150%]">
                      <p className="m-0">Generate</p>
                      <p className="m-0">New Arcana</p>
                    </b>
                  </div>
                  <img
                    className="relative w-[155px] h-[166px] object-cover"
                    alt=""
                    src="/avatarsample-enforcer-31@2x.png"
                  />
                  <div className="rounded-3xs bg-standard-white w-36 h-[166px] overflow-hidden shrink-0 flex flex-col p-[5px] box-border items-center justify-center">
                    <img
                      className="relative w-[169px] h-[191px] object-cover"
                      alt=""
                      src="/avatarsample-enforcer-32@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BackgroundComponentDesktop;
