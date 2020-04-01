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
          axisPointer: {
            show: true,
            type: 'line',
          },
          backgroundColor: "#333",
          title: {
            id: "DA-DC",
            left: "center",
            text: "Depth Chart",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
            top: 10,
            padding: [15, 15, 15, 15],
            textStyle: {
              color: "#ccc"
            }
          },
          // toolbox: {
          //   feature: {
          //     dataZoom: {
          //       yAxisIndex: "none"
          //     },
          //     restore: {},
          //     saveAsImage: {}
          //   }
          // },
          // legend: {
          //   // show: false,
          //   data: [{
          //     name: 'bid',
          //     // compulsorily set icon as a circle
          //     icon: 'triangle',
          //     // set up the text in red
          //     textStyle: {
          //         color: 'darkgreen'
          //     }
          // }]
          // },
          grid: {
            // containLabel: true,
            // show: true,
            left: 0
          },
          tooltip: {
            axisPointer: {
              type: 'cross'
            },
            trigger: "item",
            // position: function(point, params, dom, rect, size) {
            //   console.log(point)
            //   // fixed at top
            //   return [point[0] + 100, point[1]];
            // }
            position: "right",
            // formatter: 'category name: {b}<br />Series name: {a}: data value: {c} '
            formatter: "{b}<br />{a}: {c}<br />$123,456.789"
          },
          xAxis: {
            show: false,
            type: "value"
          },
          yAxis: {
            type: "category"
            // data: ['Sell', 'Buy'],
            // boundaryGap: false,
            // boundaryGap: [0, '100%'],
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          series: [
            {
              name: "Sell",
              type: "bar",
              // stack: 'Sell',
              coordinateSystem: "cartesian2d",
              yAxisIndex: 0,
              xAxisIndex: 0,
              barWidth: "10%",
              barGap: 0,

              // smooth: true,
              // symbol: 'none',
              // sampling: 'average',
              itemStyle: {
                color: "darkgreen"
              },
              // areaStyle: {
              //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //     {
              //       offset: 0,
              //       color: "rgb(255, 158, 68)"
              //     },
              //     {
              //       offset: 1,
              //       color: "rgb(255, 70, 131)"
              //     }
              //   ])
              // },
              data: [
                {
                  name: 8623.54,
                  value: 1000,
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
              name: "Buy",
              type: "bar",
              barCategoryGap: 0,
              yAxisIndex: 0,
              barWidth: "10%",
              barGap: 0,
              // seriesLayoutBy: 'column',
              // stack: 'Sell',
              // smooth: true,
              // symbol: 'none',
              // sampling: 'average',
              itemStyle: {
                color: "darkred"
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
