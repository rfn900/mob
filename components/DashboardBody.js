import { useState } from "react";
import CardAudience from "./CardAudience";
import CardGraph from "./CardGraph";
import CardNotion from "./CardNotion";
import CardSmall from "./CardSmall";
import CardWidget from "./CardWidget";
import {
  calculateTotalRevenue,
  currencyFormatter,
  dataIntervals,
} from "../utils/dataFunctions";
import Swiper from "react-id-swiper";
import RevSwiper from "./RevSwiper";
import RocketSVG from "./RocketSVG";

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
  const thisYearRevenue = calculateTotalRevenue(data, "thisYear", 6);
  const yearToDateRevenue = calculateTotalRevenue(data, "yearToDate", 6);
  const lastYearRevenue = calculateTotalRevenue(data, "lastYear", 6);

  return (
    <div className="py-6">
      <div className="flex justify-center mx-4 bg-indigo-900 px:2 sm:px-4 rounded-xl h-52 text-indigo-50 md:pl-8 md:mx-8">
        <div className="relative flex justify-center w-1/2">
          <RocketSVG />
          <img src="rocket.png" className="absolute w-48 z-1 top-3" alt="" />
        </div>

        <div className="flex flex-col justify-center w-1/2 py-6 overflow-x-hidden 2xl:w-1/3 space-y-4">
          <h2 className="font-bold md:text-2xl">It is taking off!</h2>
          <RevSwiper
            thisYearRevenue={currencyFormatter(thisYearRevenue)}
            yearToDateRevenue={currencyFormatter(yearToDateRevenue)}
            lastYearRevenue={currencyFormatter(lastYearRevenue)}
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
