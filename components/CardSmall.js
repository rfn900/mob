import { ArrowSmUpIcon, ArrowSmDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function CardSmall({ item }) {
  return (
    <div className="relative flex flex-col w-full px-4 py-5 overflow-hidden bg-white shadow-lg transition transform hover:-translate-y-1 rounded-2xl h-52 sm:p-6">
      <img
        src="card-skin3.png"
        className="absolute inset-0 w-full opacity-50 h-52"
      />
      <span className="absolute z-0 w-48 h-48 bg-indigo-800 rounded-full -top-4 -right-10 bg-opacity-5"></span>
      <dt className="text-base font-semibold text-gray-900">{item.name}</dt>
      <dd className="relative z-10 flex items-baseline justify-between mt-1 md:block lg:flex">
        <div className="flex items-baseline text-2xl font-bold text-indigo-600">
          {item.stat}
          <span className="ml-1 text-sm">SEK</span>
        </div>
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
          <h4 className="text-sm text-indigo-600">{item.lastMonht} SEK</h4>
        </div>
        <div className="space-y-1">
          <h3 className="text-xs text-gray-400">This Year</h3>
          <h4 className="text-sm text-indigo-600">{item.thisYear} SEK</h4>
        </div>
      </div>
    </div>
  );
}

export default CardSmall;
