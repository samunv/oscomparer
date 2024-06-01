<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OScomparer | Inicio</title>
  <link rel="stylesheet" href="../CSS/estiloindex.css?v=<?php echo time(); ?>" />
  <link rel="stylesheet" href="../CSS/estiloheader.css?v=<?php echo time(); ?>">
  <link rel="stylesheet" href="../CSS/estilofooter.css?=<?php echo time() ?>">
  <link rel="icon" href="../img/flechas-repetir (1).png" />
  <script src="../JS/inicio.js?v=<?php echo time(); ?>"></script>
</head>

<body>
  <?php
  include("header.php");
  ?>



  <section class="seccion-presentacion" id="seccion-presentacion">
    <div class="botones-presentacion">
      <h1>Compara Sistemas Operativos</h1>
      <a href="comparar.php"> <button type="button" id="btn-comparar">Comparar</button></a>
    </div>
   <div class="imagen-presentacion">
      <img src="../img/dibujo-grafico-de-linea.png" alt="" />
    </div>
  </section>


  <section class="seccion-presentacion2" id="seccion-presentacion2">
    <h1>Top de SO por <span id="span-comunidad">Comunidad</span></h1>
    <div id="datos-top-so"></div>
    
  </section>

<section id="seccion-separacion"></section>

  <section class="seccion-cuadrado" id="seccion-cuadrado">
    <a href="inicio.php#seccion-cajas-info">
      <img src="../img/WINDOWS.png" alt="" id="foto-carrusel" />
    </a>
  </section>



  <section class="seccion-cuadrado2">
    <section class="seccionAndroid" id="seccionAndroid">
      <div class="Android">
        <h1>Android 14</h1>
      </div>
      <img src="../img/INTERFAZ_ANDROID.jpg" alt="" width="400px" />

      <button type="submit" class="btn-Android" id="btn-Android">
        Ver Detalles
      </button>
    </section>

    <section id="seccionAndroid-oculta">
      <div id="contenedor-oculto1">
        <div class="android-oculto">
          <h1>Android 14</h1>
        </div>

        <table id="tabla1">
          <tr>
            <th>
              <img src="../img/verificacion-de-escudo (1).png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/usuarios (1).png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/circulo-v.png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/gratis.png" alt="" width="50" height="50" />
            </th>
          </tr>
          <tr id="tr-1">

          </tr>
        </table>

        <button type="submit" id="btnoculto1">Menos Detalles</button>
      </div>
    </section>

    <section class="seccioniOS" id="seccioniOS">
      <div class="iOS">
        <h1>iOS 17</h1>

        <button type="submit" class="btn-iOS" id="btn-iOS">
          Ver Detalles
        </button>
      </div>

      <img src="../img/interfaz_iOS.png" alt="" height="500px" />
    </section>
    <section id="seccioniOS-oculta">
      <div id="contenedor-oculto2">
        <div class="ios-oculto">
          <h1>iOS 17</h1>
        </div>

        <table id="tabla2">
          <tr>
            <th>
              <img src="../img/verificacion-de-escudo (1).png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/usuarios (1).png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/circulo-v.png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/gratis.png" alt="" width="50" height="50" />
            </th>
          </tr>
          <tr id="tr-2">

          </tr>
        </table>

        <button type="submit" id="btnoculto2">Menos Detalles</button>
      </div>
    </section>
  </section>



  <section class="seccion-cajas-info" id="seccion-cajas-info">
    <h1 class="texto-descubre">Descubre más</h1>
    <div id="seccion-principal" class="seccion-principal"></div>
    <a href="paginainfo.php"><button type="button" id="btn-ver-todo">Ver Todo</button></a>
  </section>



  <section class="seccion-cuadrado3" id="seccion-cuadrado3">
    <h1 class="texto-deConsolas">Lo último de Consolas</h1>
    <section class="seccionPS5" id="seccionPS5">
      <img src="../img/interfaz_PS4.jpg" alt="" width="800px" height="550px" id="imagen-ps5" />
    </section>

    <section id="seccionPS5-oculta">
      <div id="contenedor-oculto3">
        <div class="texto-ps5">
          <h1>PS5 OS</h1>
        </div>

        <table id="tabla3">
          <tr>
            <th>
              <img src="../img/verificacion-de-escudo (1).png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/usuarios (1).png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/circulo-v.png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/gratis.png" alt="" width="50" height="50" />
            </th>
          </tr>
          <tr id="tr-3">

          </tr>
        </table>

        <button type="submit" id="btnoculto3">Menos Detalles</button>
      </div>
    </section>

    <section class="seccionXbox" id="seccionXbox">
      <img src="../img/INTERFAZ_XBOX.webp" alt="" height="550px" width="800px" id="imagen-xbox" />
    </section>

    <section id="seccionXbox-oculta">
      <div id="contenedor-oculto4">
        <div class="texto-xbox">
          <h1>XBOX OS</h1>
        </div>

        <table id="tabla4">
          <tr>
            <th>
              <img src="../img/verificacion-de-escudo (1).png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/usuarios (1).png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/circulo-v.png" alt="" width="50" height="50" />
            </th>
            <th>
              <img src="../img/gratis.png" alt="" width="50" height="50" />
            </th>
          </tr>
          <tr id="tr-4">

          </tr>
        </table>

        <button type="submit" id="btnoculto4">Menos Detalles</button>
      </div>
    </section>

  </section>


  <?php
  include("footer.php")
  ?>
</body>

</html>