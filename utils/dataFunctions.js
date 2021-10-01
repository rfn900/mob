export function calculateTotalRevenue(data, interval, programIndex) {
  const dataMinMax = dataIntervals(data.length);
  const minIndex = dataMinMax[interval][0];
  const maxIndex = dataMinMax[interval][1];

  const filteredData = data.filter(
    (_, index) => index >= minIndex && index <= maxIndex
  );

  let sum = 0;
  filteredData.forEach((value) => {
    sum += value[programIndex];
  });
  return sum;
}

export function dataIntervals(dataLength) {
  return {
    thisYear: [dataLength - new Date().getMonth(), dataLength - 1],
    yearToDate: [dataLength - 12, dataLength - 1],
    lastYear: [
      dataLength - new Date().getMonth() - 12,
      dataLength - new Date().getMonth() - 1,
    ],
  };
}

export function currencyFormatter(value) {
  var formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });

  return formatter.format(value).replace(/\D00(?=\D*$)/, "");
}
