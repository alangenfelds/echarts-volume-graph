import React from "react";
import ReactEcharts from "echarts-for-react";

const data = [
  {
    name: 8623.54,
    value: 1000.99
  },
  {
    name: 8623.54,
    value: 980.99
  },
  {
    name: 8623.54,
    value: 830.99
  },
  {
    name: 8623.54,
    value: 815.99
  },
  {
    name: 8623.54,
    value: 800.99
  },
  {
    name: 8623.54,
    value: 780.99
  },
  {
    name: 8623.54,
    value: 740.99
  },
  {
    name: 8623.54,
    value: 600.99
  },
  {
    name: 8623.54,
    value: 540.99
  },
  {
    name: 8623.54,
    value: 500.99
  },
  {
    name: 8623.54,
    value: 440.99
  },
  {
    name: 8623.54,
    value: 310.99
  },
  {
    name: 8623.54,
    value: 200.33
  },
  {
    name: 8623.54,
    value: 155.22
  },
  {
    name: 8623.54,
    value: 55.31
  },
  {
    name: 8623.54,
    value: 33.12
  }
];

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class App extends React.Component {
  render() {
    return (
      <ReactEcharts
        option={{
          animation: false,
          tooltip: {
            trigger: "axis",
            // position: "right",
            position: function(point, params, dom, rect, size) {
              return ["90%", point[1] - 15];
            },
            backgroundColor: "#24303a",
            // formatter: "{b}<br />{a}: {c}<br />$123,456.789",
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
              // animation: false,
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
              data: data // required for 'axis' tooltip
            },
            {
              gridIndex: 1,
              type: "category",
              inverse: true,
              data: data
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
              data: data
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
              data: data
            }
          ]
        }}
        style={{ height: "80vh", left: 50, top: 50, width: "90vw" }}
        opts={{ renderer: "svg" }}
      />
    );
  }
}

export default App;
