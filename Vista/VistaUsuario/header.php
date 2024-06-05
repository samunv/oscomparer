<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="../JS/header.js?v=<?php echo time(); ?>"></script>
</head>

<body>
  <header id="header">
    <div class=" menu" id="menu">
      <img src="../img/menu-hamburguesa.png" alt="" width="25" height="25">
    </div>

    <div class="logo">
      <a href="inicio.php#header">
        <img src="../img/OScomparerlogogrande.png" alt="" width="160" height="60" id="img-logo" />
      </a>
    </div>
    <nav class="nav-principal">
      <ul>
        <li id="li-inicio"><a href="inicio.php#header">Inicio</a></li>

        <li id="li-comparar"><a href="comparar.php">Comparar</a></li>

        <li id="li-buscar"><a href="paginainfo.php">Buscar</a></li>

        <li id="li-comentarios"><a href="comentarios.php">Comentarios</a></li>

      </ul>
    </nav>



    <div class="sesionusuario" id="sesionusuario">
      <p id="nombre-usuario"></p>
      <img src="../img/iconoUsuario2.png.png" alt="" width="35" height="35" id="icono-usuario">
    </div>




  </header>

  <div id="pestana-cerrar-sesion">
    <p id="cerrar-sesion">Cerrar sesión</p>
    <a href='paneldecontrol.php' id="enlace-panel-oculto">Panel de Control</a>
  </div>



  <nav class=" nav-movil" id="nav-movil">
    <ul>
      <li><a href="inicio.php#header">Inicio</a></li>

      <li><a href="comparar.php">Comparar</a></li>

      <li><a href="paginainfo.php">Buscar</a></li>

      <li><a href="comentarios.php">Comentarios</a></li>

    </ul>
  </nav>
</body>

</html>