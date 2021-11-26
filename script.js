
// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sideCloseIcon = document.getElementById("sidebarIcon");


function toggleSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar_responsive");
        sidebarOpen = true;
    }
}


function closeSidebar(){

    if(sidebarOpen){
        sidebar.classList.remove("sidebar_responsive");
        sidebarOpen = false;
    }
}
 

// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts 
var options = {
    series: [
      {
        name: "Gloves",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Mask",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Apron",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 250, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "Violations",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " Violations";
        },
      },
    },
  };
  
  
var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();


Morris.Donut({
  element: 'pie-chart',
  data: [
    {label: "Male", value: 43},
    {label: "Female", value: 57},
    
    
  ],
  formatter: function (x) { return x + "%"}
}).on('click', function(i, row){
  console.log(i, row);
  
});
  



