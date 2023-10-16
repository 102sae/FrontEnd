import Chart from "react-apexcharts";
import style from "./StockChart.module.css";

const StockChart = ({ data }) => {
  return (
    <div className={style.chartWrap}>
      <Chart
        type="line"
        series={[
          { name: "오늘의 기온", data: [19, 26, 20, 9] },
          { name: "내일의 기온", data: [30, 26, 34, 10] },
        ]}
        options={{ chart: { height: 500, width: 500 } }}
      ></Chart>
    </div>
  );
};

export default StockChart;
