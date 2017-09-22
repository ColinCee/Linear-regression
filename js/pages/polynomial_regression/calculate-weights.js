//Initialise the dataset
function initData(){
  var X = [1,1.5,2.5,3,4,5,6];
  var Y = [1,2,3,3.5,3.75,4,5];

  return {X: X, Y: Y};
}
//Transform the input array into a matrix
function toMatrixForm(input, pOrder){
  var inputMatrix = [];

  for(var i=0;i<input.length;i++){
    var x = input[i];
    var vector = []
    for(var j=0;j<=pOrder;j++)
      vector.push(x**j);

    inputMatrix.push(vector);
  }

  return math.matrix(inputMatrix);
}
//Calculate the weight values
function calculateWeights(inputMatrix, outputVector){
  var xT = math.transpose(inputMatrix);
  var xTx = math.multiply(xT, inputMatrix);
  var xTxinv = math.inv(xTx);
  var xs = math.multiply(xTxinv,xT);

  var w = math.multiply(xs,outputVector)

  return w;
}
