import { Chart } from "react-google-charts";

const options = {
  //title: "Company Performance",
  isStacked: false,
  legend: { position: "in", maxLines: 3 },
  vAxis: { textPosition: "none", gridlines: { count: 0 } },
  animation: {
    duration: 1000,
    easing: "out",
  },
  hAxis: { textStyle: { fontSize: 9 } },
  chartArea: { width: "95%", height: "70%" },
  // lineWidth: 25
};

function CardGraph({
  filteredData,
  timeWindowMin,
  yearToDateInterval,
  thisYearInterval,
  lastYearInterval,
  setTimeWindowMin,
  setTimeWindowMax,
}) {
  return (
    <div className="relative flex flex-col items-center justify-around w-full px-4 overflow-hidden bg-white shadow-lg group rounded-xl md:col-span-2 xl:col-span-3 h-104 lg:h-104">
      <h2 className="mt-8 font-mono text-2xl font-semibold">Commissions</h2>
      <div className="flex items-center w-auto mt-8 text-xs justify-evenly md:text-base">
        <span
          className={`px-4 rounded-l-full cursor-pointer 
                              ${
                                timeWindowMin === yearToDateInterval[0]
                                  ? "bg-indigo-600 text-indigo-50"
                                  : "bg-indigo-50 text-indigo-600"
                              }`}
          onClick={() => {
            setTimeWindowMin(yearToDateInterval[0]);
            setTimeWindowMax(yearToDateInterval[1]);
          }}
        >
          Year to Date
        </span>
        <span className="w-px h-full bg-indigo-800"></span>
        <span
          className={`px-4 cursor-pointer 
                              ${
                                timeWindowMin === thisYearInterval[0]
                                  ? "bg-indigo-600 text-indigo-50"
                                  : "bg-indigo-50 text-indigo-600"
                              }`}
          onClick={() => {
            setTimeWindowMin(thisYearInterval[0]);
            setTimeWindowMax(thisYearInterval[1]);
          }}
        >
          This Year
        </span>
        <span className="w-px h-full bg-indigo-800"></span>
        <span
          className={`px-4 rounded-r-full cursor-pointer 
                              ${
                                timeWindowMin === lastYearInterval[0]
                                  ? "bg-indigo-600 text-indigo-50"
                                  : "bg-indigo-50 text-indigo-600"
                              }`}
          onClick={() => {
            setTimeWindowMin(lastYearInterval[0]);
            setTimeWindowMax(lastYearInterval[1]);
          }}
        >
          Last Year
        </span>
      </div>

      <Chart
        width={"100%"}
        height={"95%"}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={filteredData}
        options={options}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default CardGraph;
