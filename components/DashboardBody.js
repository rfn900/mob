import { useState } from "react";
import CardAudience from "./CardAudience";
import CardGraph from "./CardGraph";
import CardNotion from "./CardNotion";
import CardSmall from "./CardSmall";
import CardWidget from "./CardWidget";
import { calculateTotalRevenue, dataIntervals } from "../utils/dataFunctions";
import Swiper from "react-id-swiper";
import RevSwiper from "./RevSwiper";

export default function DashboardBody({ data, stats }) {
  const yearToDateInterval = dataIntervals(data.length).yearToDate;
  const thisYearInterval = dataIntervals(data.length).thisYear;
  const lastYearInterval = dataIntervals(data.length).lastYear;

  const [timeWindowMin, setTimeWindowMin] = useState(yearToDateInterval[0]);
  const [timeWindowMax, setTimeWindowMax] = useState(yearToDateInterval[1]);
  const filteredData = data.filter(
    (_, index) => index >= timeWindowMin && index <= timeWindowMax
  );

  filteredData.unshift([
    "month",
    "adtraction",
    "tradedoubler",
    "awin",
    "adrecord",
    "misc",
    "total",
  ]);
  //interval = thisYear, yearToDate, lastYear ...
  const thisYearRevenue = calculateTotalRevenue(data, "thisYear", 6);
  const yearToDateRevenue = calculateTotalRevenue(data, "yearToDate", 6);
  const lastYearRevenue = calculateTotalRevenue(data, "lastYear", 6);

  return (
    <div className="py-6">
      <div className="flex justify-center px-4 mx-4 bg-indigo-900 rounded-xl h-52 text-indigo-50 md:pl-8 md:mx-8">
        <div className="relative flex w-1/2">
          <svg
            className=""
            width="300"
            height="300"
            viewBox="40 55 160 130"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FF0066"
              d="M33.7,-25.5C43.8,-14.2,52.2,-0.2,48.7,9.5C45.2,19.2,29.9,24.6,15.7,30.7C1.6,36.7,-11.3,43.4,-25.1,41C-39,38.7,-53.9,27.2,-57.5,12.7C-61.2,-1.8,-53.6,-19.3,-42.2,-30.9C-30.7,-42.5,-15.4,-48.4,-1.8,-47C11.8,-45.5,23.6,-36.9,33.7,-25.5Z"
              transform="translate(100 100)"
            />
          </svg>
          <img src="rocket.png" className="absolute w-48 z-1 top-3" alt="" />
        </div>

        <div className="flex flex-col justify-center w-1/2 2xl:w-1/3 overflow-x-hidden py-6 space-y-4">
          <h2 className="font-bold md:text-2xl">It is taking off!</h2>
          <RevSwiper
            thisYearRevenue={thisYearRevenue}
            yearToDateRevenue={yearToDateRevenue}
            lastYearRevenue={lastYearRevenue}
          />
        </div>
      </div>
      <div className="px-4 mx-auto sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <dl className="grid-col-1 grid lg:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-2">
            {stats.map((item) => (
              <CardSmall item={item} key={item.name} />
            ))}
            <CardGraph
              filteredData={filteredData}
              timeWindowMin={timeWindowMin}
              yearToDateInterval={yearToDateInterval}
              thisYearInterval={thisYearInterval}
              lastYearInterval={lastYearInterval}
              setTimeWindowMin={setTimeWindowMin}
              setTimeWindowMax={setTimeWindowMax}
            />
            <CardAudience />
            <CardNotion />
            <CardWidget />
          </dl>
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
}
