import React from "react";
import ReactEcharts from "echarts-for-react";

type PriceDepthItem = {
  size: number;
  price: number;
};

export interface DepthChartProps {
  bidDepth: PriceDepthItem[];
  offerDepth: PriceDepthItem[];
}

const DepthChart: React.FC<DepthChartProps> = ({
  bidDepth,
  offerDepth
}): React.ReactElement => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  const transform = (data: PriceDepthItem[]) =>
    data.map(({ size, price }) => ({ name: size, value: price }));

  const bidData = transform(bidDepth);
  const sellData = transform(offerDepth);

  return (
    <ReactEcharts
      option={{
        animation: false,
        tooltip: {
          trigger: "axis",
          position: function(point) {
            return ["90%", point[1] - 15];
          },
          transitionDuration: 0,
          backgroundColor: "#24303a",
          formatter: function(params) {
            const {
              data: { name, value },
              seriesName
            } = params[0];
            return `${name}<br />${seriesName}: ${value}<br />${formatter.format(
              name * value
            )}`;
          },
          confine: true,
          axisPointer: {
            type: "line",
            label: {
              show: true,
              backgroundColor: "transparent",
              color: "red",
              padding: [0, 0, 0, -8],
              formatter: "●",
              fontSize: 20
            },
            lineStyle: {
              color: "red"
            }
          }
        },

        title: {
          show: false
        },
        backgroundColor: "#24303a",

        grid: [
          { y: "50%", bottom: 0, left: 0, height: "50%" },
          {
            left: 0,
            top: 0,
            bottom: 0,
            height: "50%"
          }
        ],

        xAxis: [
          {
            gridIndex: 0,
            show: false,
            type: "value"
          },
          {
            gridIndex: 1,
            show: false,
            type: "value"
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            type: "category",
            data: bidData // required for 'axis' tooltip
          },
          {
            gridIndex: 1,
            type: "category",
            inverse: true,
            data: sellData
          }
        ],
        series: [
          {
            name: "Buy",
            type: "line",
            step: true,
            symbol: "none",
            yAxisIndex: 0,
            xAxisIndex: 0,
            itemStyle: {
              color: "#546b4f"
            },
            lineStyle: {
              width: 2
            },
            areaStyle: {
              color: "#31412e"
            },
            data: bidData
          },
          {
            name: "Sell",
            type: "line",
            step: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbol: "none",
            itemStyle: {
              color: "#6b3f4b"
            },
            lineStyle: {
              width: 2
            },
            areaStyle: {
              color: "#45262e"
            },
            data: sellData
          }
        ]
      }}
      style={{ height: "80vh", left: 50, top: 50, width: "90vw" }}
      opts={{ renderer: "svg" }}
    />
  );
};

export default DepthChart;
