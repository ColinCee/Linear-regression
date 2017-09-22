function startAnimation(){
  $('#popover-start').popover('hide');
  if(paused)
    paused = false;
}

function pauseAnimation(){
  if(!paused)
    paused = true;
}

function resetAnimation(){
  //Clear the line graph & reset best fit line
  paused = true;
  reset = true;

  lineChart.data.datasets[0].data = [];
  lineChart.update();
  updateMixedChart(0,0);

  //Reset table
  $('#iteration-count').html(0);
  $('#error').html(0);
  $('#gradient').html(0);
  $('#y-intercept').html(0);
}

$( document ).ready(function() {
  var promise = loadChartData();
  promise.done(function(){
    initDataset(data);
    initScatterPlot(dataset);
    create3DSurfacePlot(dataset);

    updateCharts();

  });
  promise.fail(function() { console.log("An error has occured whilst trying to retrieve the CSV data")});
});
