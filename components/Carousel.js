import { useState, useEffect } from "react";
import { SearchCircleIcon } from "@heroicons/react/outline";
import { PresentationChartBarIcon } from "@heroicons/react/outline";
import { PencilAltIcon } from "@heroicons/react/outline";
import { ZoomInIcon } from "@heroicons/react/outline";
import { ChatIcon } from "@heroicons/react/outline";
import { ClipboardCheckIcon } from "@heroicons/react/outline";
import { useSwipeable } from "react-swipeable";

export default function Carousel() {
  const [whichSlider, setWhichSlider] = useState(1);

  function calculateTranslate(sliderNumber) {
    return `translatex-${sliderNumber - 1}`;
  }

  const handlers = useSwipeable({
    onSwipedRight: () =>
      whichSlider > 1 ? setWhichSlider(whichSlider - 1) : setWhichSlider(1),
    onSwipedLeft: () =>
      whichSlider < 6 ? setWhichSlider(whichSlider + 1) : setWhichSlider(6),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  useEffect(() => {});

  return (
    <div className="flex-col items-start section-full">
      <div className="absolute bottom-0 w-full h-4/5 bg-indigo-50 right-1/4 rounded-tr-half"></div>
      <div className="relative flex flex-col w-screen m-auto overflow-hidden xl:max-w-8xl">
        <div className="relative z-0 px-4 m-auto mt-12 text-center">
          <p className="text-xl font-bold text-indigo-600">Where we shine</p>
          <h2 className="mt-4 font-sans text-4xl font-bold md:text-6xl">
            What We Do
          </h2>
          <p className="relative mt-4 text-xl md:text-3xl leading-10">
            <span className="relative z-10">We turn traffic into sales</span>
            <span className="absolute z-0 w-4/5 bg-yellow-300 right-2 h-1/2 md:right-20 top-5"></span>
          </p>
        </div>
        <div
          {...handlers}
          className={`relative ml-4 md:ml-36 flex space-x-4 lg:space-x-12 items-center mt-16 h-full w-slider transform transition duration-500 ${calculateTranslate(
            whichSlider
          )}`}
        >
          <div className="px-6 py-8 bg-white rounded-lg shadow-md h-52 w-72">
            <div className="flex items-center w-full ">
              <SearchCircleIcon className="w-16 h-16 p-2 text-green-800 bg-green-100 rounded-md" />
              <p className="flex-1 ml-4 text-xl font-semibold ">
                Search Engine Optmization
              </p>
            </div>
            <p className="py-4 text-gray-500">
              Get your brand found in Google search without ever worrying about
              SEO.
            </p>
          </div>
          <div className="px-6 py-8 bg-white rounded-lg shadow-md h-52 w-72">
            <div className="flex items-center w-full ">
              <PencilAltIcon className="w-16 h-16 p-2 text-red-900 bg-red-100 rounded-md" />
              <p className="flex-1 ml-4 text-xl font-semibold ">
                Content Marketing
              </p>
            </div>
            <p className="py-4 text-gray-500">
              Ever wonder how to write engaging content that converts? That is
              our jam.
            </p>
          </div>
          <div className="px-6 py-8 bg-white rounded-lg shadow-md h-52 w-72">
            <div className="flex items-center w-full ">
              <PresentationChartBarIcon className="w-16 h-16 p-2 text-gray-800 bg-gray-200 rounded-md" />
              <p className="flex-1 ml-4 text-xl font-semibold ">
                Affiliate Marketing
              </p>
            </div>
            <p className="py-4 text-gray-500">
              Get new customers by the door, seemless, everyday with the best
              ROI.
            </p>
          </div>
          <div className="px-6 py-8 bg-white rounded-lg shadow-md h-52 w-72">
            <div className="flex items-center w-full ">
              <ZoomInIcon className="w-16 h-16 p-2 text-yellow-900 bg-yellow-100 rounded-md" />
              <p className="flex-1 ml-4 text-xl font-semibold ">
                Search Engine Marketing
              </p>
            </div>
            <p className="py-4 text-gray-500">
              Profitable ad campaigns from the world's largest quality traffic
              machine.
            </p>
          </div>
          <div className="px-4 py-8 bg-white rounded-lg shadow-md h-52 w-72">
            <div className="flex items-center w-full ">
              <ChatIcon className="w-16 h-16 p-2 text-indigo-800 bg-indigo-100 rounded-md" />
              <p className="flex-1 ml-4 text-xl font-semibold ">
                Social Media Marketing
              </p>
            </div>
            <p className="py-4 text-gray-500">
              Paid or organic traffic, get found through social media even
              without social presence.
            </p>
          </div>
          <div className="px-4 py-8 bg-white rounded-lg shadow-md h-52 w-72">
            <div className="flex items-center w-full ">
              <ClipboardCheckIcon className="w-16 h-16 p-2 text-gray-800 bg-red-50 rounded-md" />
              <p className="flex-1 ml-4 text-xl font-semibold ">
                Sponsored Content
              </p>
            </div>
            <p className="py-4 text-gray-500">
              Get a chance to rank in Google from high authority websites and
              blogs.
            </p>
          </div>
        </div>
        <div className="relative flex px-4 m-auto mt-12 text-center space-x-4">
          <span
            onClick={() => setWhichSlider(1)}
            className={`w-3 h-3 bg-gray-${
              whichSlider == 1 ? "8" : "3"
            }00 rounded-full cursor-pointer`}
          ></span>
          <span
            onClick={() => setWhichSlider(2)}
            className={`w-3 h-3 bg-gray-${
              whichSlider == 2 ? "8" : "3"
            }00 rounded-full cursor-pointer`}
          ></span>
          <span
            onClick={() => setWhichSlider(3)}
            className={`w-3 h-3 bg-gray-${
              whichSlider == 3 ? "8" : "3"
            }00 rounded-full cursor-pointer`}
          ></span>
          <span
            onClick={() => setWhichSlider(4)}
            className={`w-3 h-3 bg-gray-${
              whichSlider == 4 ? "8" : "3"
            }00 rounded-full cursor-pointer`}
          ></span>
          <span
            onClick={() => setWhichSlider(5)}
            className={`w-3 h-3 bg-gray-${
              whichSlider == 5 ? "8" : "3"
            }00 rounded-full cursor-pointer`}
          ></span>
          <span
            onClick={() => setWhichSlider(6)}
            className={`w-3 h-3 bg-gray-${
              whichSlider == 6 ? "8" : "3"
            }00 rounded-full cursor-pointer`}
          ></span>
        </div>
      </div>
    </div>
  );
}
