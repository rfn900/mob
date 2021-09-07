import Swiper from "react-id-swiper";
import { useRef } from "react";
const RevSwiper = ({ thisYearRevenue, yearToDateRevenue, lastYearRevenue }) => {
  const ref = useRef(null);

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };
  return (
    <div className="flex flex-col">
      <Swiper ref={ref}>
        <div className="mt-2">
          <p className="p-3 mb-2 font-mono font-bold w-40 text-center text-indigo-800 bg-yellow-400 lg:w-96 lg:p-4 lg:text-2xl rounded-2xl">
            This Year: {thisYearRevenue}
          </p>
        </div>
        <div className="mt-2">
          <p className="w-40 p-3 mb-2 font-mono font-bold text-center text-indigo-800 bg-yellow-400 lg:w-96 lg:p-4 lg:text-2xl rounded-2xl">
            Year to Date: {yearToDateRevenue}
          </p>
        </div>
        <div className="mt-2">
          <p className="w-40 p-3 mb-2 font-mono font-bold text-center text-indigo-800 bg-yellow-400 lg:w-96 lg:p-4 lg:text-2xl rounded-2xl">
            Last Year: {lastYearRevenue}
          </p>
        </div>
      </Swiper>
      <div className="flex justify-center w-40 md:px-4 lg:w-96 space-x-2">
        <button classname="" onClick={goPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="" onClick={goNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RevSwiper;
