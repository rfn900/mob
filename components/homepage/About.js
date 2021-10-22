import { HeartIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/outline";
import { TrendingUpIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/outline";
import Highlight from "../layouts/Highlight";

export default function About() {
  return (
    <div className="relative z-10 flex-col items-start h-full section-full">
      <div className="relative z-0 px-4 m-auto mt-12 text-center">
        <p className="text-xl font-bold text-indigo-600">Niched Content</p>
        <h2 className="mt-4 font-sans text-4xl font-bold md:text-6xl">
          Our Verticals
        </h2>
        <p className="relative mt-4 text-xl md:text-3xl leading-10">
          <Highlight>Categories we work with</Highlight>
        </p>
      </div>
      <div className="relative flex flex-col items-center w-full h-full overflow-hidden lg:flex-row">
        <div className="absolute bottom-0 z-0 w-104 top-10 lg:top-48 bg-indigo-100 h-1/3 lg:h-1/2 lg:w-full -right-1/2 lg:-left-1/2 rounded-half "></div>
        <div className="relative flex items-center justify-end flex-1 w-full p-4 lg:-12 lg:w-1/2">
          <img
            className="relative w-full h-full drop-shadow-2xl max-w-lg lg:w-2/3"
            src="/niche-examples.png"
            alt="niche examples"
          />
        </div>
        <div className="relative z-0 flex flex-col flex-1 h-full p-8 lg:pl-36 space-y-8">
          <div className="flex items-center rounded-full hover:shadow-sm hover:bg-indigo-50 transition w-72 group gap-4">
            <div className="w-16 h-16 p-3 text-indigo-600 rounded-full">
              <HeartIcon />
            </div>
            <p className="text-xl text-gray-500">Parenting</p>
          </div>
          <div className="flex items-center rounded-full hover:shadow-sm hover:bg-indigo-50 transition w-72 group gap-4">
            <div className="w-16 h-16 p-3 text-indigo-600 rounded-full">
              <ShoppingBagIcon />
            </div>
            <p className="text-xl text-gray-500">Fashion</p>
          </div>
          <div className="flex items-center rounded-full hover:shadow-sm hover:bg-indigo-50 w-72 transition group gap-4">
            <div className="w-16 h-16 p-3 text-indigo-600 rounded-full">
              <HomeIcon />
            </div>
            <p className="text-xl text-gray-500">House and Pets</p>
          </div>
          <div className="flex items-center rounded-full hover:shadow-sm hover:bg-indigo-50 w-72 transition group gap-4">
            <div className="w-16 h-16 p-3 text-indigo-600 rounded-full">
              <TrendingUpIcon />
            </div>
            <p className="text-xl text-gray-500">Finances</p>
          </div>
          <div className="flex items-center rounded-full hover:shadow-sm hover:bg-indigo-50 w-72 transition group gap-4">
            <div className="w-16 h-16 p-3 text-indigo-600 rounded-full">
              <PlusCircleIcon />
            </div>
            <p className="text-xl text-gray-500">Fitness and Health</p>
          </div>
        </div>
      </div>
    </div>
  );
}
