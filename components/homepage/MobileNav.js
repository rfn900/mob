import { AppButton } from "./AppButton";
import { FacebookSVG, InstagramSVG, LinkedInSVG } from "../svgs/socialSVGs";
import { useRouter } from "next/router";
export default function MobileNav({ menuOpen }) {
  const opacityTransition = menuOpen ? "opacity-100" : "opacity-0";
  const router = useRouter();
  return (
    <div
      className={`shadow-xl px-6 pt-4 pb-12 overflow-scroll h-full flex flex-col transition duration-500 ${opacityTransition}`}
    >
      <div className="flex pr-4 gap-4">
        <div className="h-16 w-16 bg-white rounded-full p-2 shadow-lg">
          <img src="/Mog_Logo.png" alt="Logo mini version" />
        </div>
      </div>
      <div className="h-px bg-gray-200 mt-4 text-gray-100"></div>
      <div className="flex flex-col py-8 text-gray-400 px-2 gap-4">
        <div className="text-xl p-2">
          <a href="/">About Us</a>
        </div>
        <div className="text-xl p-2">
          <a href="/">Case Study</a>
        </div>
        <div className="text-xl p-2">
          <a href="/dashboard">Admin</a>
        </div>
        <AppButton
          text="Contact Us"
          btnType="btn-secondary"
          className="px-2 mt-4 w-1/2 mx-0"
          action={() => router.push("/contactus")}
        />
      </div>
      <div className="mt-16 flex gap-4 mx-auto">
        <div className="relative z-10">
          <LinkedInSVG stroke="#1F2937" className="relative z-10" />
          <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
        </div>
        <div className="relative z-10">
          <FacebookSVG stroke="#1F2937" className="relative z-10" />
          <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
        </div>
        <div className="relative z-10">
          <InstagramSVG stroke="#1F2937" className="relative z-10" />
          <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
        </div>
      </div>
      <div className="mx-auto mt-4">
        <p className="text-sm text-gray-400">Marsian Online Group AB ©</p>
      </div>
    </div>
  );
}
