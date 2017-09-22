<!DOCTYPE html>
<html lang="en">

<head>
    <?php
      $title = "Simple Linear Regression";
      require_once "../templates/include/header.php";
    ?>

    <!-- Custom CSS specific to this page -->
    <link href="../css/pages/linear-regression.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.20.0/vis.min.css" rel="stylesheet">
</head>

<body>
  <?php require_once '../templates/navbar.php'; ?>

  <main>
  <div class="container">
    <!-- intro row -->
    <div class="intro row">
      <div class="col-lg-12">
        <div class="divider-new">
            <h1 class="h1-responsive">What is Linear Regression?</h1>
        </div>
        <div class="streak">
            <div class="flex-center">
                <ul>
                  <li>
                    <h2 class="h2-responsive wow fadeIn"><i class="fa fa-quote-left" aria-hidden="true">
                    </i>In simple linear regression, we predict scores on one variable from the scores on a second variable.
                    The variable we are predicting is called the criterion variable and is referred to as Y.
                    The variable we are basing our predictions on is called the predictor variable and is referred to as X.
                    <i class="fa fa-quote-right" aria-hidden="true"></i></h2></li>
                  <li>
                    <h5 class="text-center font-italic wow fadeIn" data-wow-delay="0.2s">~ David M. Lane</h5>
                  </li>
              </ul>
            </div>
        </div>
        <p class="wow fadeInRight" data-wow-delay='1.2s'>
          In other words, given some X value we're going to try to predict its corresponding Y value. An easy method to
          do this is by fitting a <mark>regression line</mark>, i.e a line of best fit.
        </p>

        <p class="wow fadeInRight" data-wow-delay='1.2s'>
          Below is the sample dataset we will be using to perform simple linear regression on.
          We will be using a method called <mark>gradient descent</mark> to iteratively find the <mark>minimum error</mark>.
        </p>

      </div>
    </div>
    <!-- Canvas row -->
    <div class="row charts">
      <div class="col-lg-6">
        <div class="chart flex-center">
          <canvas id="chart-left" width="400" height="400"></canvas>
        </div>
        <p class="caption text-center"><em>This plot shows the variables <b>m</b> & <b>c</b> at each iteration.</em></p>
      </div>
      <div class="col-lg-6">
        <div class="chart flex-center">
          <canvas id="chart-right" width="400" height="400"></canvas>
        </div>
        <p class="caption text-center"><em>The best fit line is plotted using the variables <b>m</b> & <b>c</b>.</em></p>
      </div>
    </div>
    <!-- Chart control row-->
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th>Iteration#</th>
              <th>Error</th>
              <th>Gradient (m)</th>
              <th>Y-intercept (c)</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td id="iteration-count">0</td>
            <td id="error">0</td>
            <td id="gradient">0</td>
            <td id="y-intercept">0</td>
          </tr>
          </tbody>
        </table>
        <p class="text-center" style="padding-top: 2rem;">
          <button type="button" class="btn btn-success hidden-lg-down" onclick="startAnimation()" data-trigger="manual" id="popover-start"
            title="Example" data-placement="left" data-content="Press the button to watch the algorithm in action.">Start</button>
          <button type="button" class="btn btn-success hidden-xl-up" onclick="startAnimation()">Start</button>
          <button type="button" class="btn btn-primary" onclick="pauseAnimation()">Pause</button>
          <button type="button" class="btn btn-warning" onclick="resetAnimation()">Reset</button>
        </p>
      </div>
    </div>
    <!-- explaination row -->
    <div class="row" style="padding-top: 2rem;">
      <div class="col-lg-12">
        <div class="divider-new">
            <h2 class="h2-responsive">How does it work?</h2>
        </div>
        <p>
          Recall that the equation of a straight line is given by:
        </p>
        <blockquote class="blockquote wow fadeInRight" data-wow-delay='1.2s' >
          <p class="mb-0">$$ y = mx + c $$</p>
        </blockquote>
        <p>
          Since x and y are constants, the only two variables are:
        </p>
        <ul class="list-group wow fadeInRight" data-wow-delay='1.2s' style="margin-top: 2rem; margin-bottom: 2rem; ">
          <li class="list-group-item">m - The gradient</li>
          <li class="list-group-item">c - The y intercept</li>
        </ul>

        <p>We thus need to find the optimum values of the gradient (m) and the y-intercept (c).</p>
        <p>To do this we need to find the values of m and c that minimizes the <mark>error function</mark>,
          specifically the <a href="">mean squared error.</a></p>
        <blockquote class="blockquote wow fadeInRight" data-wow-delay='1.2s'>
          <p class="mb-0">$$Error(m,c) = \frac{1}{N}\sum_{n=1}^{N} (y_{i} - (mx_{i} + c))^2$$</p>
        </blockquote>

        <p>This is an example of optimisation from high school maths, albeit with 2 variables instead of 1.</p>
        <p>Finding the partial derivatives of this function will give us the
          <a href="https://betterexplained.com/articles/vector-calculus-understanding-the-gradient/">gradient</a>
          which will give us the direction of steepest ascent.
        </p>
      </div>
    </div>

    <!-- partial derivative row-->
    <div class="row">
      <div class="col-lg-6 wow fadeInLeft" data-wow-delay='1.2s'>
        <blockquote class="blockquote">
          <p class="mb-0">$$ \frac{\partial E}{\partial m} = \frac{2}{N} \cdot \sum_{n=1}^{N} -x_{i}\cdot(y_{i} - (mx_{i} + c))$$</p>
        </blockquote>
      </div>
      <div class="col-lg-6 wow fadeInRight" data-wow-delay='1.2s'>
        <blockquote class="blockquote">
          <p class="mb-0">$$ \frac{\partial E}{\partial c} = \frac{2}{N} \cdot \sum_{n=1}^{N} -1\cdot(y_{i} - (mx_{i} + c))$$</p>
        </blockquote>
      </div>
    </div>
    <!-- alogorithm row-->
    <div class="row">
      <div class="col-lg-6 wow fadeInLeft" data-wow-delay='1.2s'>
        <div class="divider-new">
          <h2 class="h2-responsive">The algorithm</h2>
        </div>
        <blockquote class="blockquote bq-success">
          <p>
          <ol>
            <li>Initialise m and b to some value, e.g m = 0, c = 0</li>
            <li>For a certain number of iterations
              <ol>
                <li>step_m = m</li>
                <li>step_c = c</li>
                <li>For each data point
                  <ol>
                    <li>step_m -= (2/N) * x * (y - (m*x + c))</li>
                    <li>step_c -= (2/N) * (y - (m*x + c))</li>
                  </ol>
                </li>
                <li>m -= learningRate * step_m</li>
                <li>c -= learningRate * step_c</li>
              </ol>
            </li>
          </ol>
          </p>
        </blockquote>
      </div>
      <div class="col-lg-6 wow fadeInRight" data-wow-delay='1.2s'>
        <div class="divider-new">
          <h2 class="h2-responsive">Plotting the error surface</h2>
        </div>
        <div id="visualization"></div>
      </div>
    </div>

    <!-- algorithm explaination-->
    <div class="row">
      <div class="col-lg-6 wow fadeInLeft" data-wow-delay='1.2s' style="padding-top: 2rem;">
        <h2 class="h2-responsive">About the algorithm</h2>
        <p>
          A <mark>learning rate</mark> is needed to control the step-distance towards the minima.
          If your learning rate is too big it will cause it to overshoot the minimum, whilst
          a learning rate that is too small will take much longer to converge.
        </p>
        <p>
          Also note that because the gradient of a function gives us the direction of steepest ascent, we take the negative
          of the gradient to get the direction of steepest descent instead.
        </p>
      </div>
      <div class="col-lg-6 wow fadeInRight" data-wow-delay='1.2s' style="padding-top: 2rem;">
        <h2 class="h2-responsive">About the Error Surface</h2>
        <p>
          The error surface is plotted by calculating the error for each m and c value between -10 & 10.
        </p>
        <p>
          This 20 * 20 grid produces 400 points as shown on the plot above. The plot is fully interactable,
           <mark>hover over one of the points to view its values or drag to move the camera around.</mark>
        </p>
        <p>
          This plot also gives an intuitive sense to how gradient descent works. By finding the partial derivatives,
          we can step towards the direction of minimum error.
        </p>
      </div>
    </div>

    <!--Jumbotron-->
    <div class="jumbotron">
        <h1 class="h1-responsive">Concluding Remarks</h1>
        <hr class="my-2">
        <p>Using gradient descent for a simple example like this is completely uncessary
          as one can simply use calculus to find the values of m & c that minimise the error directly.</p>
        <p>However as the dimensions in the data gets larger, computing the answer directly through calculus becomes very costly.
          The gradient descent algorithm is a popular algorithm used for optimisation in machine learning because of it's ease of implementation
            and requires less resources.</p>
        <p class="lead">
            <a href="https://en.wikipedia.org/wiki/Gradient_descent" class="btn btn-primary" role="button">Learn more</a>
        </p>
    </div>
    <!--/.Jumbotron-->

  </div>
  <?php require_once '../templates/include/footer.php'; ?>
  </main>
  <!-- SCRIPTS -->
  <?php require_once '../templates/include/scripts.php'; ?>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.bundle.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.20.0/vis.min.js"></script>
  <script src="../js/jquery.csv.js"></script>

  <script src="../js/pages/linear_regression/gradient-descent.js"></script>
  <script src="../js/pages/linear_regression/update-charts.js"></script>
  <script src="../js/pages/linear_regression/animation-control.js"></script>

  <!-- Animations init-->
  <script>
    new WOW().init();
    $('#popover-start').popover('show');
  </script>
  <!-- latex -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_CHTML'></script>

</body>
</html>
