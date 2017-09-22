function parseScatterData(inputs, outputs){
  var sData = [];

  for(var i=0;i<inputs.length;i++)
    sData.push({x: inputs[i], y: outputs[i]});

  return sData;
}

function parseRegressionData(inputs, weights){
  var rData = [];
  var numVars = math.size(weights)._data[0];

  for(var i=0;i<inputs.length;i++){
    var x = inputs[i];
    var xVector = [];
    for(var j=0;j<numVars;j++)
      xVector.push(x**j);
    // y = c0 + c1*x + c2*x^2 + c3*x^3
    var y = math.multiply(weights, math.matrix(xVector));
    rData.push({x: x, y: y})
  }
  return rData;
}

function main(){
  /*From calculate-weights file*/
  var data = initData();
  var Y = math.matrix(data.Y);
  var X2 = toMatrixForm(data.X, 2);
  var X3 = toMatrixForm(data.X, 3);

  var w2 = calculateWeights(X2,Y);
  var w3 = calculateWeights(X3,Y);
  /* END */
  var sData = parseScatterData(data.X, data.Y)
  var rData2 = parseRegressionData(data.X, w2);
  var rData3 = parseRegressionData(data.X, w3);

  createChart(sData, rData2, rData3);
}

main();
