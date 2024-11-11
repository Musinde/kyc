/*
Template Name: webadmin - Admin & Dashboard Template
Author: Themesdesign
Website: https://Themesdesign.com/
Contact: Themesdesign@gmail.com
File: Ecommerce order Js File
*/





// Chart Mini-1
var sparklineoptions1 = {
  series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  chart: {
    type: 'area',
    width: 150,
    height: 50,
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
  colors: ['#1f58c7'],
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

var sparklinechart1 = new ApexCharts(document.querySelector("#mini-1"), sparklineoptions1);
sparklinechart1.render();


// Chart Mini-2
var sparklineoptions1 = {
  series: [{
    data: [65, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  chart: {
    type: 'area',
    width: 150,
    height: 50,
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
  colors: ['#1f58c7'],
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

var sparklinechart1 = new ApexCharts(document.querySelector("#mini-2"), sparklineoptions1);
sparklinechart1.render();

// Chart Mini-3
var sparklineoptions1 = {
  series: [{
    data: [12, 75, 2, 47, 42, 15, 47, 75, 65, 19, 14]
  }],
  chart: {
    type: 'area',
    width: 150,
    height: 50,
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
  colors: ['#1f58c7'],
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

var sparklinechart1 = new ApexCharts(document.querySelector("#mini-3"), sparklineoptions1);
sparklinechart1.render();

// Chart Mini-4
var sparklineoptions1 = {
  series: [{
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 70]
  }],
  chart: {
    type: 'area',
    width: 150,
    height: 50,
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
  colors: ['#1f58c7'],
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

var sparklinechart1 = new ApexCharts(document.querySelector("#mini-4"), sparklineoptions1);
sparklinechart1.render();

// Basic Table
new gridjs.Grid({
  columns:
    [
      {
        name: '#',
        sort: {
          enabled: false
      },
        formatter: (function (cell) {
          return gridjs.html('<div class="form-check font-size-16"><input class="form-check-input" type="checkbox" id="orderidcheck01"><label class="form-check-label" for="orderidcheck01"></label></div>');
        })
      },
      {
        name: 'Order ID',
        formatter: (function (cell) {
          return gridjs.html('<span class="fw-semibold">' + cell + '</span>');
        })
      },

      {
        name: 'Billing Name',
        formatter: (function (cell) {
          return gridjs.html('<img src="build/images/users/'+ cell[0]+'" alt="" class="avatar-sm rounded-circle me-2" /><a href="#" class="text-body">' + cell[1] + "</a>");
        })
      },
      "Date", "Total",
      {
        name: 'Payment Status',
        formatter: (function (cell) {
          switch (cell) {
            case "Paid":
              return gridjs.html('<span class="badge badge-pill bg-success-subtle text-success  font-size-12">' + cell + '</span>');

            case "Chargeback":
              return gridjs.html('<span class="badge badge-pill bg-danger-subtle text-danger  font-size-12">' + cell + '</span>');

            case "Refund":
              return gridjs.html('<span class="badge badge-pill bg-warning-subtle text-warning font-size-12">' + cell + '</span>');

            default:
              return gridjs.html('<span class="badge badge-pill bg-success-subtle text-success  font-size-12">' + cell + '</span>');
          }
        })
      },
      {
        name: "Payment Method",
        formatter: (function (cell) {
          switch (cell) {
            case "Mastercard":
              return gridjs.html('<i class="fab fa-cc-mastercard me-2"></i>' + cell);
            case "Visa":
              return gridjs.html('<i class="fab fa-cc-visa me-2"></i>' + cell);
            case "Paypal":
              return gridjs.html('<i class="fab fa-cc-paypal me-2"></i>' + cell);
            case "COD":
              return gridjs.html('<i class="fas fa-money-bill-alt me-2"></i>' + cell);
          }
        })
      },
      {
        name: "View Details",
        formatter: (function (cell) {
          return gridjs.html('<button type="button" class="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">'+ cell + '</button>');
        })
      },
      {
        name: "Action",
        sort: {
          enabled: false
        },
        formatter: (function (cell) {
          return gridjs.html('<div class="d-flex gap-3"><a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" class="text-success"><i class="mdi mdi-pencil font-size-18"></i></a><a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" class="text-danger"><i class="mdi mdi-delete font-size-18"></i></a></div>');
        })
      }
    ],
  pagination: {
    limit: 7
  },
  sort: true,
  search: true,
  data: [
    ["", "#SK2540", ["avatar-1.jpg","Neal Matthews"],"07 Oct, 2021", "$400", "Paid", "Mastercard", "View Details" ],
    ["", "#SK5623", ["avatar-2.jpg","Jamal Burnett"],"05 Oct, 2021", "$452", "Chargeback", "Visa", "View Details"],
    ["", "#SK6263", ["avatar-3.jpg","Juan Mitchell"],"06 Oct, 2021", "$632", "Refund", "Paypal", "View Details"],
    ["", "#SK4521", ["avatar-4.jpg","Barry Dick"],   "07 Oct, 2021", "$521", "Refund", "COD", "View Details"],
    ["", "#SK5263", ["avatar-5.jpg","Ronald Taylor"],"07 Oct, 2021", "$521", "Paid", "Mastercard", "View Details" ],
    ["", "#SK4526", ["avatar-6.jpg","Jacob Hunter"], "06 Oct, 2021", "$365", "Chargeback", "Visa", "View Details"],
    ["", "#SK8965", ["avatar-7.jpg","William Cruz"], "07 Oct, 2021", "$452", "Paid", "Paypal", "View Details"],
    ["", "#SK9658", ["avatar-8.jpg","Dustin Moser"], "08 Oct, 2021", "$365", "Paid", "COD", "View Details"],
    ["", "#SK7458", ["avatar-6.jpg","Clark Benson"], "09 Oct, 2021", "$254", "Refund", "COD", "View Details"],
    ["", "#SK2685", ["avatar-2.jpg","John Fane"],    "07 Oct, 2021", "$400", "Paid", "Mastercard", "View Details" ],
    ["", "#SK4526", ["avatar-1.jpg","Stacie Parker"],"05 Oct, 2021", "$452", "Chargeback", "Visa", "View Details"],
    ["", "#SK8522", ["avatar-2.jpg","Betty Wilson"], "06 Oct, 2021", "$632", "Refund", "Paypal", "View Details"],
    ["", "#SK4545", ["avatar-3.jpg","Roman Crabtree"],    "07 Oct, 2021", "$521", "Refund", "COD", "View Details"],
    ["", "#SK9652", ["avatar-4.jpg","Marisela Butler"], "07 Oct, 2021", "$521", "Paid", "Mastercard", "View Details" ],
    ["", "#SK4256", ["avatar-5.jpg","Roger Slayton"],  "06 Oct, 2021", "$365", "Chargeback", "Visa", "View Details"],
    ["", "#SK4125", ["avatar-6.jpg","Barbara Torres"],  "07 Oct, 2021", "$452", "Paid", "Paypal", "View Details"],
    ["", "#SK6523", ["avatar-7.jpg","Daniel Rigney"],  "08 Oct, 2021", "$365", "Paid", "COD", "View Details"],
    ["", "#SK6563", ["avatar-8.jpg","Kenneth Linck"],  "09 Oct, 2021", "$254", "Refund", "COD", "View Details"],

  ]
}).render(document.getElementById("table-ecommerce-orders"));



flatpickr('#order-date', {
  defaultDate: new Date(),
  dateFormat: "d M, Y",
});
