import { MailIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/outline";
import { RiFacebookFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Link from "next/link";

import { FacebookSVG, InstagramSVG, LinkedInSVG } from "../svgs/socialSVGs";
import Highlight from "../layouts/Highlight";
export default function Footer() {
  return (
    <div className="relative z-0 bg-gradient-to-tr from-indigo-100 to-indigo-50 mt-12 lg:mt-0 shadow-xl p-8 py-12 md:p-24 rounded-t-medium md:rounded-t-big">
      <div className="max-w-6xl flex flex-col m-auto lg:flex-row items-start justify-center space-y-12 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <img src="/MOG_Logo_vr2_DIY.png" className="h-12" alt="Logo" />
          <p className="font-sans text-lg mt-4 text-gray-600 w-full lg:w-3/4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </p>
          <div className="mt-8 flex gap-4 items-end">
            <div className="relative z-10">
              <RiFacebookFill className="h-8 w-8 relative z-10 text-gray-700" />
              <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-1 rounded-full transform rotate-12 rounded-lg"></span>
            </div>
            <div className="relative z-10">
              <RiLinkedinBoxLine className="h-8 w-8 relative z-10 text-gray-700" />

              <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-1 rounded-full transform rotate-12 rounded-lg"></span>
            </div>
            <div className="relative z-10">
              <FiInstagram className="h-8 w-7 relative z-10 text-gray-700" />
              <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-1 rounded-full transform rotate-12 rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 text-gray-600">
          <h3 className="z-10 font-mono text-xl text-gray-700 font-bold">
            <Highlight>Links</Highlight>
          </h3>

          <div className="flex flex-col gap-4 mt-4 underline">
            <div>
              <Link href="/dashboard">Work With Us</Link>
            </div>
            <div>
              <Link href="/dashboard">The Team</Link>
            </div>
            <div>
              <Link href="/dashboard">Case Study</Link>
            </div>
            <div>
              <Link href="/dashboard">Admin</Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 text-gray-600 ">
          <h3 className="relative z-10 font-mono text-xl w-auto text-gray-700 font-bold">
            <Highlight>Contact</Highlight>
          </h3>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-2 items-center">
              <div className="relative z-10">
                <MailIcon className="h-8 z-10 relative text-gray-800" />
                <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-3 rounded-lg"></span>
              </div>
              <p className="font-mono text-xl">contact@marsog.com</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="relative z-10">
                <PhoneIcon className="h-8 z-10 relative text-gray-800" />
                <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-3 rounded-lg"></span>
              </div>
              <p className="font-mono text-xl">+46738711353</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
