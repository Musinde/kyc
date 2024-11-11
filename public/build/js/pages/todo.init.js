/*
Template Name: webadmin - Admin & Dashboard Template
Author: Themesdesign
Website: https://Themesdesign.com/
Contact: Themesdesign@gmail.com
File: Todo Js File
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


var barchartColors = getChartColorsArray("overview-chart");
var options = {

    chart: {
    height: 280,
    type: 'bar',
    toolbar: {
        show: false,
    }
    },
    plotOptions: {
    bar: {
        columnWidth: '20%',
        // endingShape: 'rounded',
        borderRadius: 6,
    }
    },
    dataLabels: {
    enabled: false
    },

    fill: {
        opacity: 1,
      },

    series: [{
    name: 'Tasks',
    data: [52, 66, 50, 74, 36, 52, 66]
    }],
    grid: {
        yaxis: {
            lines: {
                show: false,
            }
        }
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return value + "hrs";
            }
        }
    },
    xaxis: {
        labels: {
            rotate: -90
        },
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    colors: barchartColors,

    }

    var chart = new ApexCharts(
    document.querySelector("#overview-chart"),
    options
    );

    chart.render();



// flatpickr

flatpickr('#CreateTask-due-date');

