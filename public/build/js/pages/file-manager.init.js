/*
Template Name: Borex - Admin & Dashboard Template
Author: Themesdesign
Website: https://Themesdesign.com/
Contact: Themesdesign@gmail.com
File: file manager Init Js File
*/

function getChartColorsArray(chartId) {
  console.log(chartId);
  if (document.getElementById(chartId) !== null) {
      var colors = document.getElementById(chartId).getAttribute("data-colors");
      colors = JSON.parse(colors);
      return colors.map(function (value) {
          var newValue = value.replace(" ", "");
          if (newValue.indexOf("--") != -1) {
              var color = getComputedStyle(document.documentElement).getPropertyValue(
                  newValue
              );
              if (color) return color;
          } else {
              return newValue;
          }
      });
  }
}

// radialBar
var barchartColors = getChartColorsArray("chart-radialBar");
var options = {
    series: [76],
    chart: {
        type: 'radialBar',
        height: 260,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#f3f2f9",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                    enabled: false,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            hollow: {
                margin: 15,
                size: "65%"
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }
            }
        }
    },
    stroke: {
        lineCap: "round",
    },
    grid: {
        padding: {
            top: -10
        }
    },
    fill: {
      opacity: 1,
    },
    colors: barchartColors,
    labels: ['Average Results'],
};

var chart = new ApexCharts(document.querySelector("#chart-radialBar"), options);
chart.render();