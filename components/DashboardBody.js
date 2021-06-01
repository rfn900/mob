import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { Chart } from "react-google-charts";

const stats = [
  {
    name: "Adtraction",
    stat: "21 492",
    change: "12%",
    changeType: "increase",
    lastMonht: "19 239",
    thisYear: "120 231",
  },
  {
    name: "Adrecord",
    stat: "19 232",
    change: "2.02%",
    changeType: "increase",
    lastMonht: "14 420",
    thisYear: "98 942",
  },
  {
    name: "Tradedoubler",
    stat: "6 549",
    change: "4.05%",
    changeType: "decrease",
    lastMonht: "6 982",
    thisYear: "48 392",
  },
  {
    name: "Awin",
    stat: "3 542",
    change: "4.05%",
    changeType: "decrease",
    lastMonht: "4 120",
    thisYear: "35 345",
  },
];

const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2017", 1030, 540],
  ["2018", 1230, 640],
  ["2019", 921, 240],
  ["2020", 1130, 670],
  ["2021", 1630, 940],
  ["2022", 630, 210],
  ["2023", 1070, 421],
];
const options = {
  //title: "Company Performance",
  isStacked: true,
  legend: { position: "top", maxLines: 3 },
  vAxis: { minValue: 0, gridlines: { count: 0 } },
  chartArea: { width: "85%", height: "70%" },
  // lineWidth: 25
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardBody() {
  return (
    <div className="py-6">
      <div className="px-2 mx-auto sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="px-4 mx-auto sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          {/*<div className="border-4 border-gray-200 border-dashed rounded-lg h-96" />*/}
          <h3 className="text-lg font-medium text-gray-900 leading-6">
            Last 30 days
          </h3>
          <dl className="mt-5 grid-col-1 grid lg:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-2">
            {stats.map((item) => (
              <div
                key={item.name}
                className="relative flex flex-col w-full px-4 py-5 overflow-hidden bg-white shadow-lg transition transform hover:-translate-y-1 rounded-2xl h-52 sm:p-6"
              >
                <img
                  src="card-skin3.png"
                  className="absolute inset-0 w-full opacity-50 h-52"
                />
                <span className="absolute z-0 w-48 h-48 bg-indigo-800 rounded-full -top-4 -right-10 bg-opacity-5"></span>
                <dt className="text-base font-semibold text-gray-900">
                  {item.name}
                </dt>
                <dd className="relative z-10 flex items-baseline justify-between mt-1 md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-bold text-indigo-600">
                    {item.stat}
                    <span className="ml-1 text-sm">SEK</span>
                    {/*
                    <span className="ml-2 text-sm text-gray-500 font-small">
                      from {item.previousStat}
                    </span>
                    */}{" "}
                  </div>{" "}
                  <div
                    className={classNames(
                      item.changeType === "increase"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800",
                      "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                    )}
                  >
                    {item.changeType === "increase" ? (
                      <ArrowSmUpIcon
                        className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowSmDownIcon
                        className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                    )}
                    {item.change}
                  </div>
                </dd>
                <div className="flex justify-between mt-auto">
                  <div className="space-y-1">
                    <h3 className="text-xs text-gray-400">Last Month's</h3>
                    <h4 className="text-sm text-indigo-600">
                      {item.lastMonht} SEK
                    </h4>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs text-gray-400">This Year</h3>
                    <h4 className="text-sm text-indigo-600">
                      {item.thisYear} SEK
                    </h4>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center overflow-hidden justify-center w-full bg-white shadow-lg rounded-xl md:col-span-2 xl:col-span-3 h-72 lg:h-104">
              <Chart
                width={"100%"}
                height={"100%"}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={options}
                // For tests
                rootProps={{ "data-testid": "1" }}
              />
            </div>

            <div className="flex flex-col items-center w-full px-4 py-8 text-gray-800 bg-white shadow-lg justify-items-start rounded-xl md:col-span-2 lg:col-span-1 h-104">
              <img
                src="fia-avatar.jpeg"
                className="w-32 h-32 rounded-full shadow"
              />
              <div className="flex mt-4 space-x-4">
                <img
                  src="instagram-icon.png"
                  alt="instagram"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="facebook-icon.png"
                  alt="facebook"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="mailchimp-icon.png"
                  alt="mailchimp"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <h3 className="mt-8 font-mono text-2xl font-semibold">
                Audiences
              </h3>
              <span class="bg-indigo-100 h-px w-full mt-4"></span>
              <ul className="w-full py-4 space-y-1">
                <li className="flex justify-between px-4 py-2 bg-gray-50">
                  <span className="font-bold">Blogs</span>
                  <span>120 000</span>
                </li>
                <li className="flex justify-between px-4 py-2 bg-gray-50">
                  <span className="font-bold">Social</span>
                  <span>13 000</span>
                </li>
                <li className="flex justify-between px-4 py-2 bg-gray-50">
                  <span className="font-bold">Email List</span>
                  <span>4 420</span>
                </li>
              </ul>
              <span className="pr-2 ml-auto text-xs">
                <a href="#" className="text-indigo-400">
                  See more...
                </a>
              </span>
            </div>
            <div className="flex items-center justify-center w-full bg-white shadow-lg rounded-xl md:col-span-2 h-104">
              <span className="text-8xl">Notion</span>
            </div>
            <div className="flex items-center justify-center w-full bg-white shadow-lg rounded-xl md:col-span-2 h-104">
              <span className="text-8xl">Widget 5</span>
            </div>
          </dl>
        </div>
        {/* /End replace */}
      </div>
    </div>
  );
}