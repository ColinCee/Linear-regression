<!DOCTYPE html>
<html lang="en">

<head>
    <?php
      $title = "Teris AI";
      require_once "../templates/include/header_bulma.php";
    ?>

    <!-- Custom CSS specific to this page -->
    <link href="../css/pages/tetris.css" rel="stylesheet">
</head>

<body>
  <section class="section">
    <div class="container">
      <div class="game">
          <h1 class="title">
            Hello World
          </h1>
          <p class="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <div class="game-container">

          </div>
      </div>
    </div>
  </section>
<!-- JQuery -->
<script type="text/javascript" src="https://devweb2015.cis.strath.ac.uk/~qhb13183/home/js/jquery-2.2.3.min.js"></script>

<!-- Page specific JS -->
  <script src="../js/pages/tetris/tetrimino.js"></script>
<script src="../js/pages/tetris/board.js"></script>
<script src="../js/pages/tetris/game.js"></script>

</body>

</body>
</html>
