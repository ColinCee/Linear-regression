<!DOCTYPE html>
<html lang="en">

<head>

    <?php
      $title = "Home";
      require_once "templates/include/header.php";
    ?>
    <!-- Custom CSS specific to this page -->
    <link href="css/pages/index.css" rel="stylesheet">
</head>

<body>
    <?php
      require_once 'templates/navbar.php';
    ?>
    <!--Mask-->
    <div class="view hm-black-strong">
        <div class="full-bg-img flex-center">
            <ul>
                <li>
                    <h1 class="h1-responsive wow fadeInDown" data-wow-delay="0.2s">Colin Cheung</h1></li>
                <li>
                    <p class="wow fadeInDown">Final Year BEng Student of Computer and Electronic Systems</p>
                </li>
                <li>
                    <a href="#projects" class="btn btn-primary wow fadeInLeft nav-link" data-wow-delay="0.2s" rel="nofollow">Projects</a>
                </li>
            </ul>
        </div>
    </div>
    <!--/.Mask-->

    <!-- Main container-->
    <div class="container">

        <div class="divider-new">
            <h2 class="h2-responsive wow fadeIn" data-wow-delay="0.2s">About me</h2>
        </div>

        <!--Section: About-->
        <section id="about" class="text-center wow fadeIn" data-wow-delay="0.6s">

            <p>I'm a undergraduate student in my final year studying a joint degree between Computer Science and Electrical Engineering.</p>
            <p>My favourite fields are in web development, software engineering and Machine Learning.</p>

        </section>
        <!--Section: About-->

        <div class="divider-new">
            <h2 class="h2-responsive wow fadeIn">Projects</h2>
        </div>

        <section id="projects">
          <div class="row">
            <!-- Linear regression -->
            <div class="col-lg-3">
                <div class="card wow fadeIn">
                    <div class="view overlay hm-white-slight">
                        <img src="img/svg/linear_regression.jpg">
                        <a href="projects/linear-regression.php">
                            <div class="mask"></div>
                        </a>
                    </div>
                    <div class="card-block text-center">
                        <h4 class="card-title">Simple Linear Regression</h4>
                        <hr>
                        <p class="card-text">In this project, I build a simple linear regression model to find the line of best fit on a dataset.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
    <!--/ Main container-->

    <?php require_once 'templates/include/footer.php'; ?>
    <!-- SCRIPTS -->
    <?php require_once 'templates/include/scripts.php'; ?>

    <!--Google Maps-->
    <script src="//maps.google.com/maps/api/js"></script>

    <!-- Animations init-->
    <script>
        new WOW().init();
    </script>


</body>

</html>
