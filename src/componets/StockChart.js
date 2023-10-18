import Chart from "react-apexcharts";
import style from "./StockChart.module.css";

const StockChart = ({ chartData }) => {
  return (
    <div className={style.chartWrap}>
      <Chart
        type="line"
        series={[
          {
            data: [
              chartData.price
            ],
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
            labels: { show: false },
            type: "datetime",
            categories: [
              chartData.date
            ],
          },
        }}
      ></Chart>
    </div>
  );
};

export default StockChart;
