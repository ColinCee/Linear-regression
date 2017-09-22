<!DOCTYPE html>
<html lang="en">

<head>
    <?php
      $title = "Polynomial Regression";
      require_once "../templates/include/header.php";
    ?>

    <!-- Custom CSS specific to this page -->
</head>

<body>
  <?php require_once '../templates/navbar.php'; ?>
<main>
<div class="container">
  <!-- Intro row -->
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      <div class="divider-new">
          <h1 class="h1-responsive">Polynomial Regression</h1>
      </div>
    </div>
  </div>

  <!-- Charts -->
  <div class="row">
    <div class="col-lg-10">
      <div class="chart flex-center">
        <canvas id="chart-1" width="400" height="400"></canvas>
      </div>
    </div>
  </div>
</div>
</main>


<!-- Math JS -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.13.3/math.min.js'></script>
<!-- Charts js -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js'></script>
<!-- Custom JS specific to this page -->
<script src="../js/pages/polynomial_regression/calculate-weights.js"></script>
<script src="../js/pages/polynomial_regression/update-charts.js"></script>

</body>
