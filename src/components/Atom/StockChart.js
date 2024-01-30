import Chart from "react-apexcharts";
import style from "./StockChart.module.css";

const StockChart = ({ chartData }) => {
  const formattedDates = chartData.date.map((dateString) => {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    return `${year}-${month}-${day}`;
  });

  return (
    <div className={style.chartWrap}>
      <Chart
        type="line"
        series={[
          {
            data: chartData.price,
          },
        ]}
        options={{
          chart: { height: 500, width: 500 },
          fill: {
            type: "gradient",
            gradient: { gradientToColors: [""], stops: [0, 100] },
          },
          stroke: {
            curve: "smooth",
            width: 4,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: true, format: "MM" },
            type: "datetime",
            categories: formattedDates,
          },
        }}
      ></Chart>
    </div>
  );
};

export default StockChart;
