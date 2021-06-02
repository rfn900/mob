import { useState } from "react";
import CardAudience from "./CardAudience";
import CardGraph from "./CardGraph";
import CardNotion from "./CardNotion";
import CardSmall from "./CardSmall";
import CardWidget from "./CardWidget";

export default function DashboardBody({ data, stats }) {
  const [timeWindowMin, setTimeWindowMin] = useState(data.length - 12);
  const [timeWindowMax, setTimeWindowMax] = useState(data.length);
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

  return (
    <div className="py-6">
      <div className="px-2 mx-auto sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="px-4 mx-auto sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <dl className="mt-5 grid-col-1 grid lg:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-2">
            {stats.map((item) => (
              <CardSmall item={item} key={item.name} />
            ))}
            <CardGraph
              dataLength={data.length}
              filteredData={filteredData}
              timeWindowMin={timeWindowMin}
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
