import { MailIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/outline";

import { FacebookSVG, InstagramSVG, LinkedInSVG } from "../svgs/socialSVGs";
export default function Footer() {
  return (
    <div className="relative z-0 bg-gradient-to-tr from-indigo-100 to-indigo-50 mt-12 lg:mt-0 shadow-xl p-8 py-12 md:p-24 rounded-t-medium md:rounded-t-big">
      <div className="max-w-6xl flex flex-col m-auto lg:flex-row items-start justify-center space-y-12 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <h3 className="font-mono text-4xl text-gray-700 font-bold">MOG</h3>
          <p className="font-sans text-lg mt-4 text-gray-600 w-full lg:w-3/4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
          </p>
          <div className="mt-8 flex gap-4 items-end">
            <div className="relative z-10">
              <FacebookSVG stroke="#1F2937" className="relative z-10" />
              <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
            </div>
            <div className="relative z-10">
              <LinkedInSVG stroke="#1F2937" className="relative z-10" />
              <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
            </div>
            <div className="relative z-10">
              <InstagramSVG stroke="#1F2937" className="relative z-10" />
              <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 text-gray-600">
          <h3 className="relative z-10 font-mono text-xl text-gray-700 font-bold">
            <span className="relative z-10">Links</span>
            <span className="bg-yellow-300 absolute w-16 h-3 bottom-0 left-0"></span>
          </h3>

          <div className="flex flex-col gap-4 mt-4 underline">
            <div>
              <a href="/dashboard">Our Story</a>
            </div>
            <div>
              <a href="/dashboard">The Team</a>
            </div>
            <div>
              <a href="/dashboard">Case Study</a>
            </div>
            <div>
              <a href="/dashboard">Admin</a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 text-gray-600 ">
          <h3 className="relative z-10 font-mono text-xl w-auto text-gray-700 font-bold">
            <span className="relative z-10">Contact</span>
            <span className="bg-yellow-300 absolute w-20 h-3 bottom-0 left-0"></span>
          </h3>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-2 items-center">
              <div className="relative z-10">
                <MailIcon className="h-8 z-10 text-gray-800 relative" />
                <span className="h-6 w-8 z-0 bg-yellow-100 absolute bottom-1 right-0 rounded-full transform rotate-12 rounded-lg"></span>
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
