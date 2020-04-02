import React from "react";

import ReactEcharts from "echarts-for-react";
// import echarts from "echarts";

// var seriesLabel = {
//   normal: {
//       show: true,
//       textBorderColor: '#333',
//       textBorderWidth: 2
//   }
// }
class App extends React.Component {
  render() {
    return (
      <ReactEcharts
        option={{
          tooltip: {
            // trigger: "item",
            position: "right",
            formatter: "{b}<br />{a}: {c}<br />$123,456.789"
          },
          // tooltip: {
          //   trigger: "axis",
          //   formatter: "{b}<br />{a}: {c}<br />$123,456.789"
          // },
          backgroundColor: "#24303a",
          // title: {
          //   id: "DA-DC",
          //   left: "center",
          //   text: "Depth Chart",
          //   borderColor: "#ccc",
          //   borderWidth: 1,
          //   borderRadius: 5,
          //   top: 10,
          //   padding: [15, 15, 15, 15],
          //   textStyle: {
          //     color: "#ccc"
          //   }
          // },

          grid: [
            { y: "45%", left: 0, height: "45%" },
            {
              left: 0,
              height: "45%"
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
              position: "right"
            },
            {
              gridIndex: 1,
              type: "category",
              position: "right"
            }
          ],
          series: [
            {
              name: "Buy",
              type: "line",
              step: "middle",
              coordinateSystem: "cartesian2d",
              yAxisIndex: 0,
              xAxisIndex: 0,
              gridIndex: 1,
              itemStyle: {
                color: "#31412e"
              },
              areaStyle: {
                color: "#31412e"
              },
              data: [
                {
                  name: 8623.54,
                  value: 1000
                },
                {
                  name: 8623.54,
                  value: 800
                },
                {
                  name: 8623.54,
                  value: 600
                },
                {
                  name: 8623.54,
                  value: 500
                },
                {
                  name: 8623.54,
                  value: 300
                },
                {
                  name: 8623.54,
                  value: 0
                }
              ]
            },
            {
              name: "Sell",
              type: "line",
              step: "middle",
              xAxisIndex: 1,
              yAxisIndex: 1,
              itemStyle: {
                color: "#45262e"
              },
              lineStyle: {
                width: 3
                // shadowColor: "rgba(0,0,0,0.4)",
                // shadowBlur: 10,
                // shadowOffsetY: 10
              },
              areaStyle: {
                color: "#45262e"
              },
              data: [
                {
                  name: 8623.54,
                  value: 0
                },
                {
                  name: 8623.54,
                  value: 300
                },
                {
                  name: 8623.54,
                  value: 400
                },
                {
                  name: 8623.54,
                  value: 600
                },
                {
                  name: 8623.54,
                  value: 800
                },
                {
                  name: 8623.54,
                  value: 1000
                }
              ]
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
