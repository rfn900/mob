import { SpeakerphoneIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { GlobeAltIcon } from "@heroicons/react/outline";

export default function AboutStats() {
  return (
    <div className="flex items-center justify-center w-screen px-12 lg:mt-20 md:px-24 lg:px-36">
      <div className="flex flex-col items-center w-96 lg:w-full max-w-6xl p-12 shadow-xl justify-evenly lg:flex-row rounded-md space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col items-center p-4 ">
          <SpeakerphoneIcon className="w-20 h-20 p-4 text-indigo-600 rounded-full shadow-sm bg-indigo-50" />
          <h3 className="mt-6 font-sans text-5xl font-black text-indigo-600">
            1M+
          </h3>
          <p className="mt-2 font-sans text-lg text-gray-600">People Reached</p>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <ShoppingCartIcon className="w-20 h-20 p-4 text-indigo-600 rounded-full shadow-sm bg-indigo-50" />
          <h3 className="mt-6 font-sans text-5xl font-black text-indigo-600">
            20K+
          </h3>
          <p className="mt-2 font-sans text-lg text-gray-600">Products Sold</p>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <ThumbUpIcon className="w-20 h-20 p-4 text-indigo-600 rounded-full shadow-sm bg-indigo-50" />
          <h3 className="mt-6 font-sans text-5xl font-black text-indigo-600">
            100+
          </h3>
          <p className="mt-2 font-sans text-lg text-gray-600">
            Happy Advertisers
          </p>
        </div>
        <div className="flex flex-col items-center p-4 ">
          <GlobeAltIcon className="w-20 h-20 p-4 text-indigo-600 rounded-full shadow-sm bg-indigo-50" />
          <h3 className="mt-6 font-sans text-5xl font-black text-indigo-600">
            8
          </h3>
          <p className="mt-2 font-sans text-lg text-gray-600">
            Online Properties
          </p>
        </div>
      </div>
    </div>
  );
}
