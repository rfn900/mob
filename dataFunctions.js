export function calculateTotalRevenue(data, interval, programIndex) {
  return 1;
}

//function dataIntervals(dataLength) {
//return {
//thisYear: [dataLength, new Date().getMonth()],
//yearToDate: [dataLength - 12, dataLength],
//lastYear: [
//dataLength - new Date().getMonth() - 12,
//dataLength - new Date().getMonth() - 1,
//],
//};
//}

//export function calculateTotalRevenue(data, interval, programIndex) {
//const dataMinMax = dataIntervals(data.length);
//const filteredData = data.filter((_, index) => {
//index >= dataMinMax[interval][0] && index >= dataMinMax[interval][1];
//});
//let sum = 0;
//filteredData.forEach((value) => {
//sum += value[programIndex];
//});
//return sum;
//}
