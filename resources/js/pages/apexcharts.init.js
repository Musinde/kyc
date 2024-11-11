/*
Template Name: webadmin - Admin & Dashboard Template
Author: Themesdesign
Website: https://Themesdesign.com/
Contact: Themesdesign@gmail.com
File: Apex Chart init js
*/


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


//  Basic Line Charts
var barchartColors = getChartColorsArray("line_chart_basic");
var options = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  markers: {
    size: 4,
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  colors: barchartColors,
  title: {
    text: 'Product Trends by Month',
    align: 'left',
    style: {
      fontWeight: 500,
    },
  },

  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
};

var chart = new ApexCharts(document.querySelector("#line_chart_basic"), options);
chart.render();


// Zoomable 
var barchartColors = getChartColorsArray("line_chart_zoomable");
var options = {
  series: [{
    name: 'XYZ MOTORS',
    data: [{
      x: new Date('2018-01-12').getTime(),
      y: 140
    }, {
      x: new Date('2018-01-13').getTime(),
      y: 147
    }, {
      x: new Date('2018-01-14').getTime(),
      y: 150
    }, {
      x: new Date('2018-01-15').getTime(),
      y: 154
    }, {
      x: new Date('2018-01-16').getTime(),
      y: 160
    }, {
      x: new Date('2018-01-17').getTime(),
      y: 165
    }, {
      x: new Date('2018-01-18').getTime(),
      y: 162
    }, {
      x: new Date('2018-01-20').getTime(),
      y: 159
    }, {
      x: new Date('2018-01-21').getTime(),
      y: 164
    }, {
      x: new Date('2018-01-22').getTime(),
      y: 160
    }, {
      x: new Date('2018-01-23').getTime(),
      y: 165
    }, {
      x: new Date('2018-01-24').getTime(),
      y: 169
    }, {
      x: new Date('2018-01-25').getTime(),
      y: 172
    }, {
      x: new Date('2018-01-26').getTime(),
      y: 177
    }, {
      x: new Date('2018-01-27').getTime(),
      y: 173
    }, {
      x: new Date('2018-01-28').getTime(),
      y: 169
    }, {
      x: new Date('2018-01-29').getTime(),
      y: 163
    }, {
      x: new Date('2018-01-30').getTime(),
      y: 158
    }, {
      x: new Date('2018-02-01').getTime(),
      y: 153
    }, {
      x: new Date('2018-02-02').getTime(),
      y: 149
    }, {
      x: new Date('2018-02-03').getTime(),
      y: 144
    }, {
      x: new Date('2018-02-05').getTime(),
      y: 150
    }, {
      x: new Date('2018-02-06').getTime(),
      y: 155
    }, {
      x: new Date('2018-02-07').getTime(),
      y: 159
    }, {
      x: new Date('2018-02-08').getTime(),
      y: 163
    }, {
      x: new Date('2018-02-09').getTime(),
      y: 156
    }, {
      x: new Date('2018-02-11').getTime(),
      y: 151
    }, {
      x: new Date('2018-02-12').getTime(),
      y: 157
    }, {
      x: new Date('2018-02-13').getTime(),
      y: 161
    }, {
      x: new Date('2018-02-14').getTime(),
      y: 150
    }, {
      x: new Date('2018-02-15').getTime(),
      y: 154
    }, {
      x: new Date('2018-02-16').getTime(),
      y: 160
    }, {
      x: new Date('2018-02-17').getTime(),
      y: 165
    }, {
      x: new Date('2018-02-18').getTime(),
      y: 162
    }, {
      x: new Date('2018-02-20').getTime(),
      y: 159
    }, {
      x: new Date('2018-02-21').getTime(),
      y: 164
    }, {
      x: new Date('2018-02-22').getTime(),
      y: 160
    }, {
      x: new Date('2018-02-23').getTime(),
      y: 165
    }, {
      x: new Date('2018-02-24').getTime(),
      y: 169
    }, {
      x: new Date('2018-02-25').getTime(),
      y: 172
    }, {
      x: new Date('2018-02-26').getTime(),
      y: 177
    }, {
      x: new Date('2018-02-27').getTime(),
      y: 173
    }, {
      x: new Date('2018-02-28').getTime(),
      y: 169
    }, {
      x: new Date('2018-02-29').getTime(),
      y: 163
    }, {
      x: new Date('2018-02-30').getTime(),
      y: 162
    }, {
      x: new Date('2018-03-01').getTime(),
      y: 158
    }, {
      x: new Date('2018-03-02').getTime(),
      y: 152
    }, {
      x: new Date('2018-03-03').getTime(),
      y: 147
    }, {
      x: new Date('2018-03-05').getTime(),
      y: 142
    }, {
      x: new Date('2018-03-06').getTime(),
      y: 147
    }, {
      x: new Date('2018-03-07').getTime(),
      y: 151
    }, {
      x: new Date('2018-03-08').getTime(),
      y: 155
    }, {
      x: new Date('2018-03-09').getTime(),
      y: 159
    }, {
      x: new Date('2018-03-11').getTime(),
      y: 162
    }, {
      x: new Date('2018-03-12').getTime(),
      y: 157
    }, {
      x: new Date('2018-03-13').getTime(),
      y: 161
    }, {
      x: new Date('2018-03-14').getTime(),
      y: 166
    }, {
      x: new Date('2018-03-15').getTime(),
      y: 169
    }, {
      x: new Date('2018-03-16').getTime(),
      y: 172
    }, {
      x: new Date('2018-03-17').getTime(),
      y: 177
    }, {
      x: new Date('2018-03-18').getTime(),
      y: 181
    }, {
      x: new Date('2018-03-20').getTime(),
      y: 178
    }, {
      x: new Date('2018-03-21').getTime(),
      y: 173
    }, {
      x: new Date('2018-03-22').getTime(),
      y: 169
    }, {
      x: new Date('2018-03-23').getTime(),
      y: 163
    }, {
      x: new Date('2018-03-24').getTime(),
      y: 159
    }, {
      x: new Date('2018-03-25').getTime(),
      y: 164
    }, {
      x: new Date('2018-03-26').getTime(),
      y: 168
    }, {
      x: new Date('2018-03-27').getTime(),
      y: 172
    }, {
      x: new Date('2018-03-28').getTime(),
      y: 169
    }, {
      x: new Date('2018-03-29').getTime(),
      y: 163
    }, {
      x: new Date('2018-03-30').getTime(),
      y: 162
    }, {
      x: new Date('2018-04-01').getTime(),
      y: 158
    }, {
      x: new Date('2018-04-02').getTime(),
      y: 152
    }, {
      x: new Date('2018-04-03').getTime(),
      y: 147
    }, {
      x: new Date('2018-04-05').getTime(),
      y: 142
    }, {
      x: new Date('2018-04-06').getTime(),
      y: 147
    }, {
      x: new Date('2018-04-07').getTime(),
      y: 151
    }, {
      x: new Date('2018-04-08').getTime(),
      y: 155
    }, {
      x: new Date('2018-04-09').getTime(),
      y: 159
    }, {
      x: new Date('2018-04-11').getTime(),
      y: 162
    }, {
      x: new Date('2018-04-12').getTime(),
      y: 157
    }, {
      x: new Date('2018-04-13').getTime(),
      y: 161
    }, {
      x: new Date('2018-04-14').getTime(),
      y: 166
    }, {
      x: new Date('2018-04-15').getTime(),
      y: 169
    }, {
      x: new Date('2018-04-16').getTime(),
      y: 172
    }, {
      x: new Date('2018-04-17').getTime(),
      y: 177
    }, {
      x: new Date('2018-04-18').getTime(),
      y: 181
    }, {
      x: new Date('2018-04-20').getTime(),
      y: 178
    }, {
      x: new Date('2018-04-21').getTime(),
      y: 173
    }, {
      x: new Date('2018-04-22').getTime(),
      y: 169
    }, {
      x: new Date('2018-04-23').getTime(),
      y: 163
    }, {
      x: new Date('2018-04-24').getTime(),
      y: 159
    }, {
      x: new Date('2018-04-25').getTime(),
      y: 164
    }, {
      x: new Date('2018-04-26').getTime(),
      y: 168
    }, {
      x: new Date('2018-04-27').getTime(),
      y: 172
    }, {
      x: new Date('2018-04-28').getTime(),
      y: 169
    }, {
      x: new Date('2018-04-29').getTime(),
      y: 163
    }, {
      x: new Date('2018-04-30').getTime(),
      y: 162
    }, {
      x: new Date('2018-05-01').getTime(),
      y: 158
    }, {
      x: new Date('2018-05-02').getTime(),
      y: 152
    }, {
      x: new Date('2018-05-03').getTime(),
      y: 147
    }, {
      x: new Date('2018-05-04').getTime(),
      y: 142
    }, {
      x: new Date('2018-05-05').getTime(),
      y: 147
    }, {
      x: new Date('2018-05-07').getTime(),
      y: 151
    }, {
      x: new Date('2018-05-08').getTime(),
      y: 155
    }, {
      x: new Date('2018-05-09').getTime(),
      y: 159
    }, {
      x: new Date('2018-05-11').getTime(),
      y: 162
    }, {
      x: new Date('2018-05-12').getTime(),
      y: 157
    }, {
      x: new Date('2018-05-13').getTime(),
      y: 161
    }, {
      x: new Date('2018-05-14').getTime(),
      y: 166
    }, {
      x: new Date('2018-05-15').getTime(),
      y: 169
    }, {
      x: new Date('2018-05-16').getTime(),
      y: 172
    }, {
      x: new Date('2018-05-17').getTime(),
      y: 177
    }, {
      x: new Date('2018-05-18').getTime(),
      y: 181
    }, {
      x: new Date('2018-05-20').getTime(),
      y: 178
    }, {
      x: new Date('2018-05-21').getTime(),
      y: 173
    }, {
      x: new Date('2018-05-22').getTime(),
      y: 169
    }, {
      x: new Date('2018-05-23').getTime(),
      y: 163
    }, {
      x: new Date('2018-05-24').getTime(),
      y: 159
    }, {
      x: new Date('2018-05-25').getTime(),
      y: 164
    }, {
      x: new Date('2018-05-26').getTime(),
      y: 168
    }, {
      x: new Date('2018-05-27').getTime(),
      y: 172
    }, {
      x: new Date('2018-05-28').getTime(),
      y: 169
    }, {
      x: new Date('2018-05-29').getTime(),
      y: 163
    }, {
      x: new Date('2018-05-30').getTime(),
      y: 162
    },]
  }],
  chart: {
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  colors: barchartColors,
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  title: {
    text: 'Stock Price Movement',
    align: 'left',
    style: {
      fontWeight: 500,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100]
    },
  },
  yaxis: {
    showAlways: true,
    labels: {
      show: true,
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
    title: {
      text: 'Price',
      style: {
        fontWeight: 500,
      },
    },
  },
  xaxis: {
    type: 'datetime',

  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0)
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#line_chart_zoomable"), options);
chart.render();



// Basic area Charts
var barchartColors = getChartColorsArray("area_chart_basic");
var options = {
  series: [{
    name: "STOCK ABC",
    data: series.monthDataSeries1.prices
  }],
  chart: {
    type: 'area',
    height: 350,
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },

  title: {
    text: 'Fundamental Analysis of Stocks',
    align: 'left',
    style: {
      fontWeight: 500,
    },
  },
  subtitle: {
    text: 'Price Movements',
    align: 'left'
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: 'left'
  },
  colors: barchartColors,
};

var chart = new ApexCharts(document.querySelector("#area_chart_basic"), options);
chart.render();


//  Spline Area Charts
var barchartColors = getChartColorsArray("area_chart_spline");
var options = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  colors: barchartColors,
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};

var chart = new ApexCharts(document.querySelector("#area_chart_spline"), options);
chart.render();



// Basic Column Chart
var barchartColors = getChartColorsArray("column_chart");
var options = {
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '45%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  series: [{
    name: 'Net Profit',
    data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
  }, {
    name: 'Revenue',
    data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
  }],
  colors: barchartColors,
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  grid: {
    borderColor: '#f1f1f1',
  },
  fill: {
    opacity: 1

  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
}

var chart = new ApexCharts(
  document.querySelector("#column_chart"),
  options
);

chart.render();


// Column with Datalabels
var barchartColors = getChartColorsArray("column_chart_datalabel");
var options = {
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#adb5bd"]
    }
  },
  series: [{
    name: 'Inflation',
    data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8]
  }],
  colors: barchartColors,
  grid: {
    borderColor: '#f1f1f1',
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'top',
    labels: {
      offsetY: -18,

    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
      offsetY: -35,

    }
  },
  fill: {
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    },
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 320,
    align: 'center',
    style: {
      color: '#444'
    },
    style: {
      fontWeight: 500,
    },
  },
}

var chart = new ApexCharts(
  document.querySelector("#column_chart_datalabel"),
  options
);

chart.render();



// Basic Bar chart
var barchartColors = getChartColorsArray("bar_chart");
var options = {
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
  }],
  colors: barchartColors,
  grid: {
    borderColor: '#f1f1f1',
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
  }
}

var chart = new ApexCharts(
  document.querySelector("#bar_chart"),
  options
);

chart.render();

// Custom DataLabels Bar
var barchartColors = getChartColorsArray("custom_datalabels_bar");
var options = {
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: 'bottom'
      },
    }
  },
  colors: barchartColors,
  dataLabels: {
    enabled: true,
    textAnchor: 'start',
    style: {
      colors: ['#fff']
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
    },
    offsetX: 0,
    dropShadow: {
      enabled: false
    }
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'India'],
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  title: {
    text: 'Custom DataLabels',
    align: 'center',
    floating: true,
    style: {
      fontWeight: 600,
    },
  },
  subtitle: {
    text: 'Category Names as DataLabels inside bars',
    align: 'center',
  },
  tooltip: {
    theme: 'dark',
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return ''
        }
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#custom_datalabels_bar"), options);
chart.render();


// Mixed - Line Column Chart
var barchartColors = getChartColorsArray("line_column_chart");
var options = {
  series: [{
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    }
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Traffic Sources',
    style: {
      fontWeight: 600,
    },
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Website Blog',
      style: {
        fontWeight: 600,
      },
    },

  }, {
    opposite: true,
    title: {
      text: 'Social Media',
      style: {
        fontWeight: 600,
      },
    }
  }],
  colors: barchartColors,
};

var chart = new ApexCharts(document.querySelector("#line_column_chart"), options);
chart.render();

// Multiple Y-Axis Charts
var barchartColors = getChartColorsArray("multi_chart");
var options = {
  series: [{
    name: 'Income',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  }, {
    name: 'Cashflow',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }],
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
    toolbar: {
      show: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4]
  },
  title: {
    text: 'XYZ - Stock Analysis (2009 - 2016)',
    align: 'left',
    offsetX: 110,
    style: {
      fontWeight: 600,
    },
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#038edc'
      },
      labels: {
        style: {
          colors: '#038edc',
        }
      },
      title: {
        text: "Income (thousand crores)",
        style: {
          color: '#038edc',
          fontWeight: 600
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Income',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#038edc'
      },
      labels: {
        style: {
          colors: '#038edc',
        }
      },
      title: {
        text: "Operating Cashflow (thousand crores)",
        style: {
          color: '#038edc',
          fontWeight: 600
        }
      },
    },
    {
      seriesName: 'Revenue',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#51d28c'
      },
      labels: {
        style: {
          colors: '#51d28c',
        },
      },
      title: {
        text: "Revenue (thousand crores)",
        style: {
          color: '#51d28c',
          fontWeight: 600
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  },
  colors: barchartColors,
};

var chart = new ApexCharts(document.querySelector("#multi_chart"), options);
chart.render();


// Basic Timeline Charts
var barchartColors = getChartColorsArray("basic_timeline");
var options = {
  series: [
    {
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-04').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ]
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-18').getTime()
          ]
        }
      ]
    }
  ],
  chart: {
    height: 350,
    type: 'rangeBar',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  xaxis: {
    type: 'datetime'
  },
  colors: barchartColors,
};

var chart = new ApexCharts(document.querySelector("#basic_timeline"), options);
chart.render();


// Different Color For Each Bar
var barchartColors = getChartColorsArray("color_timeline");
var options = {
  series: [
    {
      data: [
        {
          x: 'Analysis',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime()
          ],
          fillColor: barchartColors[0]
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ],
          fillColor: barchartColors[1]
        },
        {
          x: 'Coding',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime()
          ],
          fillColor: barchartColors[2]
        },
        {
          x: 'Testing',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ],
          fillColor: barchartColors[3]
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime()
          ],
          fillColor: barchartColors[4]
        }
      ]
    }
  ],
  chart: {
    height: 330,
    type: 'rangeBar',
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      var label = opts.w.globals.labels[opts.dataPointIndex]
      var a = moment(val[0])
      var b = moment(val[1])
      var diff = b.diff(a, 'days')
      return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
    },
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    show: true
  },

};

var chart = new ApexCharts(document.querySelector("#color_timeline"), options);
chart.render();

//  Basic Candlestick Charts
var barchartColors = getChartColorsArray("basic_candlestick");
var options = {
  series: [{
    data: [{
      x: new Date(1538778600000),
      y: [6629.81, 6650.5, 6623.04, 6633.33]
    },
    {
      x: new Date(1538780400000),
      y: [6632.01, 6643.59, 6620, 6630.11]
    },
    {
      x: new Date(1538782200000),
      y: [6630.71, 6648.95, 6623.34, 6635.65]
    },
    {
      x: new Date(1538784000000),
      y: [6635.65, 6651, 6629.67, 6638.24]
    },
    {
      x: new Date(1538785800000),
      y: [6638.24, 6640, 6620, 6624.47]
    },
    {
      x: new Date(1538787600000),
      y: [6624.53, 6636.03, 6621.68, 6624.31]
    },
    {
      x: new Date(1538789400000),
      y: [6624.61, 6632.2, 6617, 6626.02]
    },
    {
      x: new Date(1538791200000),
      y: [6627, 6627.62, 6584.22, 6603.02]
    },
    {
      x: new Date(1538793000000),
      y: [6605, 6608.03, 6598.95, 6604.01]
    },
    {
      x: new Date(1538794800000),
      y: [6604.5, 6614.4, 6602.26, 6608.02]
    },
    {
      x: new Date(1538796600000),
      y: [6608.02, 6610.68, 6601.99, 6608.91]
    },
    {
      x: new Date(1538798400000),
      y: [6608.91, 6618.99, 6608.01, 6612]
    },
    {
      x: new Date(1538800200000),
      y: [6612, 6615.13, 6605.09, 6612]
    },
    {
      x: new Date(1538802000000),
      y: [6612, 6624.12, 6608.43, 6622.95]
    },
    {
      x: new Date(1538803800000),
      y: [6623.91, 6623.91, 6615, 6615.67]
    },
    {
      x: new Date(1538805600000),
      y: [6618.69, 6618.74, 6610, 6610.4]
    },
    {
      x: new Date(1538807400000),
      y: [6611, 6622.78, 6610.4, 6614.9]
    },
    {
      x: new Date(1538809200000),
      y: [6614.9, 6626.2, 6613.33, 6623.45]
    },
    {
      x: new Date(1538811000000),
      y: [6623.48, 6627, 6618.38, 6620.35]
    },
    {
      x: new Date(1538812800000),
      y: [6619.43, 6620.35, 6610.05, 6615.53]
    },
    {
      x: new Date(1538814600000),
      y: [6615.53, 6617.93, 6610, 6615.19]
    },
    {
      x: new Date(1538816400000),
      y: [6615.19, 6621.6, 6608.2, 6620]
    },
    {
      x: new Date(1538818200000),
      y: [6619.54, 6625.17, 6614.15, 6620]
    },
    {
      x: new Date(1538820000000),
      y: [6620.33, 6634.15, 6617.24, 6624.61]
    },
    {
      x: new Date(1538821800000),
      y: [6625.95, 6626, 6611.66, 6617.58]
    },
    {
      x: new Date(1538823600000),
      y: [6619, 6625.97, 6595.27, 6598.86]
    },
    {
      x: new Date(1538825400000),
      y: [6598.86, 6598.88, 6570, 6587.16]
    },
    {
      x: new Date(1538827200000),
      y: [6588.86, 6600, 6580, 6593.4]
    },
    {
      x: new Date(1538829000000),
      y: [6593.99, 6598.89, 6585, 6587.81]
    },
    {
      x: new Date(1538830800000),
      y: [6587.81, 6592.73, 6567.14, 6578]
    },
    {
      x: new Date(1538832600000),
      y: [6578.35, 6581.72, 6567.39, 6579]
    },
    {
      x: new Date(1538834400000),
      y: [6579.38, 6580.92, 6566.77, 6575.96]
    },
    {
      x: new Date(1538836200000),
      y: [6575.96, 6589, 6571.77, 6588.92]
    },
    {
      x: new Date(1538838000000),
      y: [6588.92, 6594, 6577.55, 6589.22]
    },
    {
      x: new Date(1538839800000),
      y: [6589.3, 6598.89, 6589.1, 6596.08]
    },
    {
      x: new Date(1538841600000),
      y: [6597.5, 6600, 6588.39, 6596.25]
    },
    {
      x: new Date(1538843400000),
      y: [6598.03, 6600, 6588.73, 6595.97]
    },
    {
      x: new Date(1538845200000),
      y: [6595.97, 6602.01, 6588.17, 6602]
    },
    {
      x: new Date(1538847000000),
      y: [6602, 6607, 6596.51, 6599.95]
    },
    {
      x: new Date(1538848800000),
      y: [6600.63, 6601.21, 6590.39, 6591.02]
    },
    {
      x: new Date(1538850600000),
      y: [6591.02, 6603.08, 6591, 6591]
    },
    {
      x: new Date(1538852400000),
      y: [6591, 6601.32, 6585, 6592]
    },
    {
      x: new Date(1538854200000),
      y: [6593.13, 6596.01, 6590, 6593.34]
    },
    {
      x: new Date(1538856000000),
      y: [6593.34, 6604.76, 6582.63, 6593.86]
    },
    {
      x: new Date(1538857800000),
      y: [6593.86, 6604.28, 6586.57, 6600.01]
    },
    {
      x: new Date(1538859600000),
      y: [6601.81, 6603.21, 6592.78, 6596.25]
    },
    {
      x: new Date(1538861400000),
      y: [6596.25, 6604.2, 6590, 6602.99]
    },
    {
      x: new Date(1538863200000),
      y: [6602.99, 6606, 6584.99, 6587.81]
    },
    {
      x: new Date(1538865000000),
      y: [6587.81, 6595, 6583.27, 6591.96]
    },
    {
      x: new Date(1538866800000),
      y: [6591.97, 6596.07, 6585, 6588.39]
    },
    {
      x: new Date(1538868600000),
      y: [6587.6, 6598.21, 6587.6, 6594.27]
    },
    {
      x: new Date(1538870400000),
      y: [6596.44, 6601, 6590, 6596.55]
    },
    {
      x: new Date(1538872200000),
      y: [6598.91, 6605, 6596.61, 6600.02]
    },
    {
      x: new Date(1538874000000),
      y: [6600.55, 6605, 6589.14, 6593.01]
    },
    {
      x: new Date(1538875800000),
      y: [6593.15, 6605, 6592, 6603.06]
    },
    {
      x: new Date(1538877600000),
      y: [6603.07, 6604.5, 6599.09, 6603.89]
    },
    {
      x: new Date(1538879400000),
      y: [6604.44, 6604.44, 6600, 6603.5]
    },
    {
      x: new Date(1538881200000),
      y: [6603.5, 6603.99, 6597.5, 6603.86]
    },
    {
      x: new Date(1538883000000),
      y: [6603.85, 6605, 6600, 6604.07]
    },
    {
      x: new Date(1538884800000),
      y: [6604.98, 6606, 6604.07, 6606]
    },
    ]
  }],
  chart: {
    type: 'candlestick',
    height: 350,
    toolbar: {
      show: false,
    }
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: barchartColors[0],
        downward: barchartColors[1]
      }
    }
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left',
    style: {
      fontWeight: 600,
    },
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  },
};

var chart = new ApexCharts(document.querySelector("#basic_candlestick"), options);
chart.render();

// Candlestick Synced with Brush Chart (Combo)
var barchartColors = getChartColorsArray("combo_candlestick");
var options = {
  series: [{
    data: seriesData
  }],
  chart: {
    type: 'candlestick',
    height: 200,
    id: 'candles',
    toolbar: {
      autoSelected: 'pan',
      show: false
    },
    zoom: {
      enabled: false
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: barchartColors[0],
        downward: barchartColors[1]
      }
    }
  },
  xaxis: {
    type: 'datetime'
  }
};

var chart = new ApexCharts(document.querySelector("#combo_candlestick"), options);
chart.render();

var barchartColors = getChartColorsArray("combo_candlestick_chart");
var optionsBar = {
  series: [{
    name: 'volume',
    data: seriesDataLinear
  }],
  chart: {
    height: 150,
    type: 'bar',
    brush: {
      enabled: true,
      target: 'candles'
    },
    selection: {
      enabled: true,
      xaxis: {
        min: new Date('20 Jan 2017').getTime(),
        max: new Date('10 Dec 2017').getTime()
      },
      fill: {
        color: '#ccc',
        opacity: 0.4
      },
      stroke: {
        color: '#0d47a1',
      }
    },
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      columnWidth: '80%',
      colors: {
        ranges: [{
          from: -1000,
          to: 0,
          color: barchartColors[0]
        }, {
          from: 1,
          to: 10000,
          color: barchartColors[1]
        }],

      },
    }
  },
  stroke: {
    width: 0
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      offsetX: 13
    }
  },
  yaxis: {
    labels: {
      show: false
    }
  }
};

var chartBar = new ApexCharts(document.querySelector("#combo_candlestick_chart"), optionsBar);
chartBar.render();



var barchartColors = getChartColorsArray("basic_box");
var options = {
  series: [
    {
      type: 'boxPlot',
      data: [
        {
          x: 'Jan 2015',
          y: [54, 66, 69, 75, 88]
        },
        {
          x: 'Jan 2016',
          y: [43, 65, 69, 76, 81]
        },
        {
          x: 'Jan 2017',
          y: [31, 39, 45, 51, 59]
        },
        {
          x: 'Jan 2018',
          y: [39, 46, 55, 65, 71]
        },
        {
          x: 'Jan 2019',
          y: [29, 31, 35, 39, 44]
        },
        {
          x: 'Jan 2020',
          y: [41, 49, 58, 61, 67]
        },
        {
          x: 'Jan 2021',
          y: [54, 59, 66, 71, 88]
        }
      ]
    }
  ],
  chart: {
    type: 'boxPlot',
    height: 350,
    toolbar: {
      show: false
    }
  },
  title: {
    text: 'Basic BoxPlot Chart',
    align: 'left',
    style: {
      fontWeight: 500,
    },
  },
  plotOptions: {
    boxPlot: {
      colors: {
        upper: barchartColors[0],
        lower: barchartColors[1]
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#basic_box"), options);
chart.render();

//  Boxplot-Scatter
var barchartColors = getChartColorsArray("box_plot");
var options = {
  series: [
    {
      name: 'Box',
      type: 'boxPlot',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: [54, 66, 69, 75, 88]
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: [43, 65, 69, 76, 81]
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: [31, 39, 45, 51, 59]
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: [39, 46, 55, 65, 71]
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: [29, 31, 35, 39, 44]
        }
      ]
    },
    {
      name: 'Outliers',
      type: 'scatter',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: 32
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: 25
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: 64
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 27
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 78
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: 15
        }
      ]
    }
  ],
  chart: {
    type: 'boxPlot',
    height: 350,
    toolbar: {
      show: false
    }
  },
  colors: barchartColors,
  title: {
    text: 'BoxPlot - Scatter Chart',
    align: 'left',
    style: {
      fontWeight: 500,
    },
  },
  xaxis: {
    type: 'datetime',
    tooltip: {
      formatter: function (val) {
        return new Date(val).getFullYear()
      }
    }
  },
  plotOptions: {
    boxPlot: {
      colors: {
        upper: barchartColors[0],
        lower: barchartColors[1]
      }
    }
  },
  tooltip: {
    shared: false,
    intersect: true
  }
};

var chart = new ApexCharts(document.querySelector("#box_plot"), options);
chart.render();



// Bubble Charts Generate Data

function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

// Simple Bubble
var barchartColors = getChartColorsArray("simple_bubble");
var options = {
  series: [{
    name: 'Bubble1',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Bubble2',
    data: generateData(new Date('12 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Bubble3',
    data: generateData(new Date('13 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Bubble4',
    data: generateData(new Date('14 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }],
  chart: {
    height: 350,
    type: 'bubble',
    toolbar: {
      show: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 0.8
  },
  title: {
    text: 'Simple Bubble Chart',
    style: {
      fontWeight: 500,
    },
  },
  xaxis: {
    tickAmount: 12,
    type: 'category',
  },
  yaxis: {
    max: 70
  },
  colors: barchartColors,
};

var chart = new ApexCharts(document.querySelector("#simple_bubble"), options);
chart.render();

// 3D Bubble
var barchartColors = getChartColorsArray("bubble_chart");
var options = {
  series: [{
    name: 'Product1',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Product2',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Product3',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'Product4',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }],
  chart: {
    height: 350,
    type: 'bubble',
    toolbar: {
      show: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
  },
  title: {
    text: '3D Bubble Chart',
    style: {
      fontWeight: 500,
    },
  },
  xaxis: {
    tickAmount: 12,
    type: 'datetime',
    labels: {
      rotate: 0,
    }
  },
  yaxis: {
    max: 70
  },
  theme: {
    palette: 'palette2'
  },
  colors: barchartColors,
};

var chart = new ApexCharts(document.querySelector("#bubble_chart"), options);
chart.render();




// Basic Scatter Charts
var barchartColors = getChartColorsArray("basic_scatter");
var options = {
  series: [{
    name: "SAMPLE A",
    data: [
      [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
  }, {
    name: "SAMPLE B",
    data: [
      [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
  }, {
    name: "SAMPLE C",
    data: [
      [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
  }],
  chart: {
    height: 350,
    type: 'scatter',
    zoom: {
      enabled: true,
      type: 'xy'
    },
    toolbar: {
      show: false,
    }
  },
  xaxis: {
    tickAmount: 10,
    labels: {
      formatter: function (val) {
        return parseFloat(val).toFixed(1)
      }
    }
  },
  yaxis: {
    tickAmount: 7
  },
  colors: barchartColors,
};

var chart = new ApexCharts(document.querySelector("#basic_scatter"), options);
chart.render();

// Dtaetime - Scatter Charts

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([baseval, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
// Scatter - Images Charts
var barchartColors = getChartColorsArray("images_scatter");
var options = {
  series: [{
  name: 'User A',
  data: [
    [16.4, 5.4],
    [21.7, 4],
    [25.4, 3],
    [19, 2],
    [10.9, 1],
    [13.6, 3.2],
    [10.9, 7],
    [10.9, 8.2],
    [16.4, 4],
    [13.6, 4.3],
    [13.6, 12],
    [29.9, 3],
    [10.9, 5.2],
    [16.4, 6.5],
    [10.9, 8],
    [24.5, 7.1],
    [10.9, 7],
    [8.1, 4.7],
  ]
}, {
  name: 'User B',
  data: [
    [6.4, 5.4],
    [11.7, 4],
    [15.4, 3],
    [9, 2],
    [10.9, 11],
    [20.9, 7],
    [12.9, 8.2],
    [6.4, 14],
    [11.6, 12]
  ]
}],
  chart: {
  height: 350,
  type: 'scatter',
  animations: {
    enabled: false,
  },
  zoom: {
    enabled: false,
  },
  toolbar: {
    show: false
  }
},
colors: barchartColors,
xaxis: {
  tickAmount: 10,
  min: 0,
  max: 40
},
yaxis: {
  tickAmount: 7
},
markers: {
  size: 20
},
fill: {
  type: 'image',
  opacity: 1,
  image: {
    src: ['./build/images/users/avatar-5.jpg', './build/images/users/avatar-3.jpg'],
    width: 40,
    height: 40
  }
},
legend: {
  labels: {
    useSeriesColors: true
  },
  markers: {
    customHTML: [
      function() {
        return ''
      }, function() {
        return ''
      }
    ]
  }
}
};

var chart = new ApexCharts(document.querySelector("#images_scatter"), options);
chart.render();



// Basic Treemaps
var barchartColors = getChartColorsArray("basic_treemap");
var options = {
    series: [
    {
      data: [
        {
          x: 'New Delhi',
          y: 218
        },
        {
          x: 'Kolkata',
          y: 149
        },
        {
          x: 'Mumbai',
          y: 184
        },
        {
          x: 'Ahmedabad',
          y: 55
        },
        {
          x: 'Bangaluru',
          y: 84
        },
        {
          x: 'Pune',
          y: 31
        },
        {
          x: 'Chennai',
          y: 70
        },
        {
          x: 'Jaipur',
          y: 30
        },
        {
          x: 'Surat',
          y: 44
        },
        {
          x: 'Hyderabad',
          y: 68
        },
        {
          x: 'Lucknow',
          y: 28
        },
        {
          x: 'Indore',
          y: 19
        },
        {
          x: 'Kanpur',
          y: 29
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap',
    toolbar: {
      show: false
    }
  },
  colors: barchartColors,
  title: {
    text: 'Basic Treemap',
    style: {
      fontWeight: 500,
    }
  },
  };

  var chart = new ApexCharts(document.querySelector("#basic_treemap"), options);
  chart.render();

  // Multi - Dimensional Treemap
  var barchartColors = getChartColorsArray("multi_treemap");
  var options = {
    series: [
    {
      name: 'Desktops',
      data: [
        {
          x: 'ABC',
          y: 10
        },
        {
          x: 'DEF',
          y: 60
        },
        {
          x: 'XYZ',
          y: 41
        }
      ]
    },
    {
      name: 'Mobile',
      data: [
        {
          x: 'ABCD',
          y: 10
        },
        {
          x: 'DEFG',
          y: 20
        },
        {
          x: 'WXYZ',
          y: 51
        },
        {
          x: 'PQR',
          y: 30
        },
        {
          x: 'MNO',
          y: 20
        },
        {
          x: 'CDE',
          y: 30
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap',
    toolbar: {
      show: false
    }
  },
  title: {
    text: 'Multi-dimensional Treemap',
    align: 'center',
    style: {
      fontWeight: 500,
    }
  },
  colors: barchartColors,
  };

  var chart = new ApexCharts(document.querySelector("#multi_treemap"), options);
  chart.render();


  
//  Simple Pie Charts
var barchartColors = getChartColorsArray("simple_pie_chart");
var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
    height: 350,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  legend: {
    position: 'bottom'
  },
  dataLabels: {
    dropShadow: {
      enabled: false,
    }
  },
  colors: barchartColors,
};

var chart = new ApexCharts(document.querySelector("#simple_pie_chart"), options);
chart.render();


// Simple Donut Charts
var barchartColors = getChartColorsArray("simple_dount_chart");
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    height: 350,
    type: 'donut',
  },
  legend: {
    position: 'bottom'
  },
  dataLabels: {
    dropShadow: {
      enabled: false,
    }
  },
  colors: barchartColors,
};

var chart = new ApexCharts(document.querySelector("#simple_dount_chart"), options);
chart.render();


//  Radialbar Charts
var barchartColors = getChartColorsArray("basic_radialbar");
var options = {
    series: [70],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Cricket'],
  colors: barchartColors,
  };

  var chart = new ApexCharts(document.querySelector("#basic_radialbar"), options);
  chart.render();
 
  // Multi-Radial Bar
  var barchartColors = getChartColorsArray("multiple_radialbar");
  var options = {
    series: [44, 55, 67, 83],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            return 249
          }
        }
      }
    }
  },
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  colors: barchartColors,
  };

  var chart = new ApexCharts(document.querySelector("#multiple_radialbar"), options);
  chart.render();


  
// Basic Radar Chart
var barchartColors = getChartColorsArray("basic_radar");
var options = {
    series: [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }],
    chart: {
    height: 350,
    type: 'radar',
    toolbar: {
      show: false
    }
  },
  stroke: {
    colors: barchartColors,
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  }
  };

  var chart = new ApexCharts(document.querySelector("#basic_radar"), options);
  chart.render();


  // Radar Chart - Multi series
  var barchartColors = getChartColorsArray("multi_radar");
  var options= {
    series: [ {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    },
    {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    },
    {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }
    ],
    chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
            enabled: true, blur: 1, left: 1, top: 1
        },
        toolbar: {
            show: false
        },
    },
    stroke: {
        width: 2
    },
    fill: {
        opacity: 0.2
    },
    markers: {
        size: 0
    },
    colors: barchartColors,
    xaxis: {
        categories: ['2014', '2015', '2016', '2017', '2018', '2019']
    }
  };
  var chart=new ApexCharts(document.querySelector("#multi_radar"), options);
  chart.render();


  
// Basic Polar Area 
var barchartColors = getChartColorsArray("basic_polar_area");
var options = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
    type: 'polarArea',
    width: 400,
  },
  labels: ['Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Series G', 'Series H', 'Series I'],
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  
  legend: {
    position: 'bottom'
  },
  colors: barchartColors,
  };

  var chart = new ApexCharts(document.querySelector("#basic_polar_area"), options);
  chart.render();

  // Polar-Area Monochrome Charts
  var barchartColors = getChartColorsArray("monochrome_polar_area");
  var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
    width: 400,
    type: 'polarArea'
  },
  labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
  fill: {
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  yaxis: {
    show: false
  },
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
  theme: {
    mode: 'light', 
    palette: 'palette1',
    monochrome: {
      enabled: true,
      shadeTo: 'light',
      color: '#038edc',
      shadeIntensity: 0.6
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#monochrome_polar_area"), options);
chart.render();
  


// Pyramid Charts
var barchartColors = getChartColorsArray("basic_pyramid_area");

var options = {
  series: [
    {
      name: "",
      data: [200, 330, 548, 740, 880, 990, 1100, 1380],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  colors: [
    '#F44F5E',
    '#E55A89',
    '#D863B1',
    '#CA6CD8',
    '#B57BED',
    '#8D95EB',
    '#62ACEA',
    '#4BC3E6',
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex]
    },
    dropShadow: {
      enabled: true,
    },
  },
  xaxis: {
    categories: ['sourced', 'screened', 'Assessed', 'HR Interview', 'Technical', 'Verify', 'Offered', 'Hired'],
  },
  legend: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector("#basic_pyramid_area"), options);
chart.render();


// Pyramid Charts
var barchartColors = getChartColorsArray("basic_recruitment_area");

var options = {
  series: [
    {
      name: "Funnel Series",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
    },
    dropShadow: {
      enabled: true,
    },
  },
  xaxis: {
    categories: [
      'Sourced',
      'Screened',
      'Assessed',
      'HR Interview',
      'Technical',
      'Verify',
      'Offered',
      'Hired',
    ],
  },
  legend: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector("#basic_recruitment_area"), options);
chart.render();