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
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <!-- Any other Bulma elements you want -->
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
      <div class="game">
          <h1 class="title">
            Tetris!
          </h1>
          <div class="game-container">

          </div>
      </div>
    </div>
  </section>
<!-- JQuery -->
<script type="text/javascript" src="../js/jquery-2.2.3.min.js"></script>

<!-- Page specific JS -->
<script src="../js/pages/tetris/tetriminoes/iblock.js"></script>
<script src="../js/pages/tetris/tetriminoes/zblock.js"></script>
<script src="../js/pages/tetris/board.js"></script>
<script src="../js/pages/tetris/game.js"></script>

</body>

</body>
</html>
