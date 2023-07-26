import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { signInWithGoogle } from "../firebase";

const FrameComponent: NextPage = () => {
  const router = useRouter();

  const onGoogleSigninClick = useCallback(() => {
    return signInWithGoogle()
      .then((result) => {
        router.push("/landing-page");
        console.log("sign in", result);
      })
      .catch((error: any) => {
        console.log("error", error);
      });
  }, [router]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-13xl text-standard-black font-plus-jakarta-sans md:flex-1">
      <div className="w-[341px] flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative font-semibold"> Welcome Back</div>
        <div className="self-stretch relative text-base font-medium text-neutral-7o">
          Welcome back please enter your details
        </div>
      </div>
      <div className="self-stretch h-[251px] flex flex-col items-start justify-start gap-[24px] w-full text-center text-base text-neutral-7o md:flex-col">
        <button
          className="cursor-pointer py-3 px-[50px] bg-[transparent] self-stretch rounded-2xl flex flex-row items-center justify-center gap-[10px] border-[1px] border-solid border-neutral-5o"
          autoFocus
          onClick={onGoogleSigninClick}
        >
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/iconicongoogle.svg"
          />
          <div className="relative text-base font-semibold font-plus-jakarta-sans text-neutral-7o text-center">
            Sign in with Google
          </div>
        </button>
        <div className="self-stretch flex flex-row items-start justify-center">
          <a className="[text-decoration:none] relative font-medium text-[inherit]">
            <span>{`Don.t have an account? `}</span>
            <span className="text-dodgerblue">Sign up</span>
          </a>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent]"
        // onClick={onButtonClick}
      />
    </div>
  );
};

export default FrameComponent;
