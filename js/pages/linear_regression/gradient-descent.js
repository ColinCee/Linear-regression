function calculateError(current_m, current_c){
  var error = 0;
  var points = dataset;
  var N = points.length;

  for(var i=0;i<points.length;i++){
    var x = points[i].x;
    var y = points[i].y;

    error += (1/N) * (y - (current_m*x + current_c))**2;
  }
  return error;
}

function gradientDescent(current_m, current_c, points){

  var step_m = current_m;
  var step_c = current_c;

  for(var i=0;i<points.length;i++){
    var x = points[i].x;
    var y = points[i].y;
    var N = points.length;

    step_m -= (2/N) * x * (y - (current_m*x + current_c))
    step_c -= (2/N) * (y - (current_m*x + current_c))

  }

  return {m: step_m, c: step_c}
}

function sgd(current_m, current_c, point){

  var step_m = 0;
  var step_c = 0;

  var x = point.x;
  var y = point.y;

  step_m -= 2 * x * (y - (current_m*x + current_c))
  step_c -= 2 * (y - (current_m*x + current_c))

  return {m: step_m, c: step_c}
}

function runGradientDescent(dataset){
  var m = 0;
  var c = 0;

  const numIterations = 100;
  const learningRate = 1e-5;

  var response = [];
  response.push({m: m, c: c, error: calculateError(m, c)});
  for(var i=0; i<numIterations; i++){

    var update = gradientDescent(m, c, dataset);
    m -= learningRate * update.m;
    c -= 1e-3 * update.c;


    var error = calculateError(m, c);
    response.push({m: m, c: c, error: error});

  }

  return response;
}
