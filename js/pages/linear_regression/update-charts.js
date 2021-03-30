var paused = true, reset = false;
var initBestFitLine = [{x:0,y:0}, {x:120, y:0}];
var mixedChart, lineChart;
var dataset, gradientDescentSteps;
var chartUpdateSpeed = 300;

function initDataset(data){
  //Decleare new array
  dataset = [];

  for(var i=0;i<data.length;i++){
    dataset.push({x: data[i][0], y: data[i][1]});
  }
}

function initScatterPlot(dataset){
  for(var i=0;i<dataset.length;i++)
    mixedChart.data.datasets[0].data.push(dataset[i])
  mixedChart.update();
}

function updateCharts(){
  var counter = 0;
  var m = 0;
  var c = 0;

  var interval = setInterval(function(){
    if(reset){
      counter = 0;
      reset = false;
    }
    if(!paused){
      var newValues = gradientDescent(m,c,dataset);
      m -= 1e-5 * newValues.m;
      c -= 1e-3 * newValues.c;

      var error = calculateError(m,c)
      updateLineChart(m, c);
      updateMixedChart(m, c);

      $('#iteration-count').html(counter);
      $('#error').html(error.toFixed(4));
      $('#gradient').html(m.toFixed(3));
      $('#y-intercept').html(c.toFixed(3));

      counter++;

      if(counter >= 100)
        paused = true;


      }
  }, chartUpdateSpeed);
}

function updateLineChart(m, c){

  lineChart.data.datasets[0].data.push({x:m, y: c});
  lineChart.update();
}

function updateMixedChart(m, c){
  mixedChart.data.datasets[1].data[0].x = 0;
  mixedChart.data.datasets[1].data[0].y = m*0 + c

  mixedChart.data.datasets[1].data[1].x = 200;
  mixedChart.data.datasets[1].data[1].y = m*200 + c

  mixedChart.update();

}

function create3DSurfacePlot(points){
  // Create and populate a data table.
    var data = new vis.DataSet();
    //var surfaceplotData = getSurfacePlotData();
    var lowerBound = -10;
    var upperBound = 10;
    var numPoints = 10;
    var stepSize = upperBound / numPoints;

    for(var i=lowerBound;i<upperBound;i++){
      for(var j=lowerBound;j<upperBound;j++){
        var x = i;
        var y = j;
        var z = calculateError(x,y);

        data.add({x: x, y: y, z: z, style: z});
      }
    }
    // specify options
    var options = {
        width:  '500px',
        height: '400px',
        style: 'surface',
        tooltip: true,
        showPerspective: true,
        showGrid: true,
        showLegend: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5,
        xLabel: 'Gradient (m)',
        yLabel: 'Y-intercept (c)',
        zLabel: 'Error',
        zValueLabel: function(z) {return z.toExponential()},
        cameraPosition: {horizontal: -0.5, vertical: 0.5, distance: 2},
    };

    // Instantiate our graph object.
    var container = document.getElementById('visualization');
    var graph3d = new vis.Graph3d(container, data, options);
}

function createLineChart(){
  var ctx = document.getElementById("chart-left").getContext('2d');
  lineChart = new Chart(ctx, {
      type: 'line',
      data: {
          datasets: [{
          label: 'Response',
          data: [],
          fill: false,
          borderColor: '#636363',
          pointBorderColor: '#636363',
          backgroundColor: '#33b5e5',
          pointBackgroundColor: '#33b5e5',
          borderWidth: 0.5,
          pointBorderWidth: 0.25,
          type: 'line',
          cubicInterpolationMode: 'monotone',
        }],
      },
      options: {
        responsive: false,
        legend: {
          labels:{
            usePointStyle: true,
          },
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
          	scaleLabel: {
              display: true,
              labelString: 'gradient (m)',
            },
            ticks: {
                beginAtZero: true,
                max: 2,
            },
            type: 'linear',
            position: 'bottom'
          }],

          yAxes: [{
          	scaleLabel: {
              display: true,
              labelString: 'y intercept (c)'
            },
            ticks: {
                beginAtZero: true,
                max: 3
            },
  			}]

      }
     }
  });
}

function createMixedChart(){
  var ctx = document.getElementById("chart-right").getContext('2d');
  mixedChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{
              label: 'Arbitary Dataset',
              data: [],
              fill: false,
              showLine: false,
              backgroundColor: 'rgba(255, 0, 0, 1)',
              borderColor: 'rgba(100, 100, 100, 1)',
              pointBackgroundColor: 'rgba(255, 0, 0, 1)',
              pointBorderColor: 'rgba(100, 100, 100, 1)',
          },
          {
          label: 'Best fit line',
          data: initBestFitLine,
          fill: false,
          backgroundColor: 'rgba(0, 150, 150, 1)',
          borderColor: 'rgba(0, 150, 150, 1)',
          pointRadius: 0,
          type: 'line'
        }],
      },
      options: {
        responsive: false,
        legend: {
          labels:{
            usePointStyle: true,
          },
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
          	scaleLabel: {
              display: true,
              labelString: 'X',
            },
            ticks: {
                beginAtZero: true,
                max:100,
            },
            type: 'linear',
            position: 'bottom'
          }],

          yAxes: [{
          	scaleLabel: {
              display: true,
              labelString: 'Y'
            },
            ticks: {
                beginAtZero: true,
                max:140,
            },
  			}]

      }
     }
  });
}

function loadChartData(){
  var promise = $.ajax({
    url: "../data/linear-regression-data.csv",
    success: function (csvd) {
        data = $.csv.toArrays(csvd);
    },
    dataType: "text",
  });

  return promise;
}

$( document ).ready(function() {
  createLineChart();
  createMixedChart();
});
