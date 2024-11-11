/*
Template Name: webadmin - Admin & Dashboard Template
Author: Themesdesign
Website: https://Themesdesign.com/
Contact: Themesdesign@gmail.com
File: Dashboard sales
*/

// chart sparkline1

function getChartColorsArray(chartId) {
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


// mini-1
var barchartColors = getChartColorsArray("mini-1");
var options1 = {
  series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 23, 40, 40, 54, 41]
  }],
  fill: {
    colors: barchartColors,
    opacity: 1,
  },
  chart: {
      type: 'bar',
      height: 50,
      sparkline: {
          enabled: true
      }
  },
  plotOptions: {
      bar: {
          columnWidth: '65%',
          borderRadius: 4,
      }
  },


  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  xaxis: {
      crosshairs: {
          width: 1
      },
  },
  tooltip: {
      fixed: {
          enabled: false
      },
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  }
};

var chart1 = new ApexCharts(document.querySelector("#mini-1"), options1);
chart1.render();


// mini-2
var barchartColors = getChartColorsArray("mini-2");
var options1 = {
  series: [{
      data: [56, 20, 80, 40, 75, 41,25, 66, 41, 89, 63, 25,]
  }],
  fill: {
    colors: barchartColors,
    opacity: 1,
  },
  chart: {
      type: 'bar',
      height: 50,
      sparkline: {
          enabled: true
      }
  },
  plotOptions: {
      bar: {
          columnWidth: '65%',
          borderRadius: 4,
      }
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  xaxis: {
      crosshairs: {
          width: 1
      },
  },
  tooltip: {
      fixed: {
          enabled: false
      },
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  }
};

var chart1 = new ApexCharts(document.querySelector("#mini-2"), options1);
chart1.render();


// mini-3
var barchartColors = getChartColorsArray("mini-3");
var options1 = {
  series: [{
      data: [59, 63, 35, 75, 50, 66, 25, 66, 41, 40, 54, 41]
  }],
  fill: {
    colors: barchartColors,
    opacity: 1,
  },
  chart: {
      type: 'bar',
      height: 50,
      sparkline: {
          enabled: true
      }
  },
  plotOptions: {
      bar: {
          columnWidth: '65%',
          borderRadius: 4,
      }
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  xaxis: {
      crosshairs: {
          width: 1
      },
  },
  tooltip: {
      fixed: {
          enabled: false
      },
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  }
};

var chart1 = new ApexCharts(document.querySelector("#mini-3"), options1);
chart1.render();


// mini-4
var barchartColors = getChartColorsArray("mini-4");
var options1 = {
  series: [{
      data: [45, 36, 40, 64, 41, 66, 41, 89, 63, 25, 44, 20,]
  }],
  fill: {
    colors: barchartColors,
    opacity: 1,
  },
  chart: {
      type: 'bar',
      height: 50,
      sparkline: {
          enabled: true
      }
  },
  plotOptions: {
      bar: {
          columnWidth: '65%',
          borderRadius: 4,
      }
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  xaxis: {
      crosshairs: {
          width: 1
      },
  },
  tooltip: {
      fixed: {
          enabled: false
      },
      x: {
          show: false
      },
      y: {
          title: {
              formatter: function (seriesName) {
                  return ''
              }
          }
      },
      marker: {
          show: false
      }
  }
};

var chart1 = new ApexCharts(document.querySelector("#mini-4"), options1);
chart1.render();



// Stacked Area Charts
var barchartColors = getChartColorsArray("sales-report");
var options1 = {
  chart: {
    type: 'area',
    height: 360,
    toolbar: {
      show: false
    },
  },
  series: [{
    name: 'Incomes',
    data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75]
  },
      {
      name: 'Expenses',
      data: [15, 09, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62]
      }
  ],
  stroke: {
    curve: 'straight',
    width: ['4', '4'],
  },
  grid:{
    xaxis: {
      lines: {
          show: true
      }
  },   
  yaxis: {
      lines: {
          show: true
      }
  }, 
  },
  colors: barchartColors,
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now','Des'],
  },
  legend: {
      show: false,
  },

  fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.40,
          opacityTo: 0.1,
          stops: [30, 100, 100, 100]
        },
    },
    dataLabels: {
      enabled: false
    },
  tooltip: {
    fixed: {
      enabled: false
    }
    ,
    x: {
      show: false
    }
    ,
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    }
    ,
    marker: {
      show: false
    }
  }
}
new ApexCharts(document.querySelector("#sales-report"), options1).render();

// radialBar
var barchartColors = getChartColorsArray("chart-radialBar");
var options = {
    series: [76],
    chart: {
        type: 'radialBar',
        height: 370,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e6ecf9",
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

// Sales Countries
var barchartColors = getChartColorsArray("sales-countries");
var options = {
  series: [{
  data: [430, 570, 640, 680, 790, 1100, 1200, 1380]
}],
  chart: {
  type: 'bar',
  height: 323,
  toolbar: {
    show: false,
  },
},
labels: ['Canada', 'Netherlands','Italy','France','Japan','United States','China','Germany'],
colors: barchartColors,
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['Canada', 'Netherlands', 'Italy', 'France', 'Japan',
    'United States', 'China', 'Germany'
  ],
}
};

var chart = new ApexCharts(document.querySelector("#sales-countries"), options);
chart.render();

// sparkline-1
var barchartColors = getChartColorsArray("chart-sparkline1");
var sparklineoptions1 = {
  series: [{
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54 ,84]
  }],
  chart: {
    type: 'area',
    width: 200,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  colors: barchartColors,
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
};

var sparklinechart1 = new ApexCharts(document.querySelector("#chart-sparkline1"), sparklineoptions1);
sparklinechart1.render();


// sparkline-2
var barchartColors = getChartColorsArray("chart-sparkline2");
var sparklineoptions1 = {
  series: [{
    data: [50, 15, 35, 62, 23, 56, 44, 12, 36, 9, 54,23]
  }],
  chart: {
    type: 'area',
    width: 200,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  colors: barchartColors,
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
};

var sparklinechart1 = new ApexCharts(document.querySelector("#chart-sparkline2"), sparklineoptions1);
sparklinechart1.render();


// sparkline-3
var barchartColors = getChartColorsArray("chart-sparkline3");
var sparklineoptions1 = {
  series: [{
    data: [25, 35, 35, 89, 63, 25, 44, 12, 36, 9, 54, 25]
  }],
  chart: {
    type: 'area',
    width: 200,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  colors: barchartColors,
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
};

var sparklinechart1 = new ApexCharts(document.querySelector("#chart-sparkline3"), sparklineoptions1);
sparklinechart1.render();


// sparkline-4
var barchartColors = getChartColorsArray("chart-sparkline4");
var sparklineoptions1 = {
  series: [{
    data: [50, 15, 35, 34, 23, 56, 65, 41, 36, 41, 32, 25]
  }],
  chart: {
    type: 'area',
    width: 200,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  colors: barchartColors,
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
};

var sparklinechart1 = new ApexCharts(document.querySelector("#chart-sparkline4"), sparklineoptions1);
sparklinechart1.render();


// sparkline-5
var barchartColors = getChartColorsArray("chart-sparkline5");
var sparklineoptions1 = {
  series: [{
    data: [45, 53, 24, 89, 63, 60, 36, 50, 36, 32, 54, 63]
  }],
  chart: {
    type: 'area',
    width: 200,
    height: 40,
    sparkline: {
      enabled: true
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  colors: barchartColors,
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    },
    marker: {
      show: false
    }
  }
};

var sparklinechart1 = new ApexCharts(document.querySelector("#chart-sparkline5"), sparklineoptions1);
sparklinechart1.render();