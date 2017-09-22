// Plots the scatter points and best polynomial lines
function createChart(dataset){
  var ctx = document.getElementById("chart-1").getContext('2d');
  var mixedChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: dataset
    },
    options: {
      responsive: false,
      legend: {
        labels:{
          usePointStyle: true,
        },
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'x',
          },
          type: 'linear',
          position: 'bottom'
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'y'
          },
        }]
      },
    }
  });
}
