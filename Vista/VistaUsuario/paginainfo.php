<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OScomparer | Buscar</title>
    <link rel="stylesheet" href="../CSS/paginainfo.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../CSS/estiloheader.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../CSS/estilofooter.css?=<?php echo time() ?>">
    <link rel="icon" href="../img/flechas-repetir (1).png" />
    <script src="../JS/paginainfo.js?v=<?php echo time(); ?>"></script>

</head>

<body>
    <?php
    include("header.php");
    ?>
    <section id="seccion-en-blanco"></section>
    <section id="seccion-filtros">
        <table class="tabla-filtros">
            <tr>
                <td><img src="../img/muesca-movil.png" alt="" width="40" height="40" id="icono-movil"></td>
                <td><img src="../img/dispositivos.png" alt="" width="40" height="40" id="icono-pc"></td>
                <td><img src="../img/mando.png" alt="" width="40" height="40" id="icono-consola"></td>
                <td><img src="../img/pantalla.png" alt="" width="40" height="40" id="icono-tv"></td>
                <td><img src="../img/volante.png" alt="" width="40" height="40" id="icono-coche"></td>
                <td> <img src="../img/gratis.png" alt="" width="40" height="40" id="icono-gratis" /></td>
                <td><img src="../img/usd-circulo.png" alt="" width="40" height="40" id="icono-de-pago"></td>
                <td><img src="../img/bordear-todo.png" alt="" width="40" height="40" id="icono-de-todo"></td>

            </tr>
            <tr>
                <td>De Móviles</td>
                <td>De Ordenadores</td>
                <td>De Consolas</td>
                <td>De Televisión</td>
                <td>De Coches</td>
                <td>De Uso Gratis</td>
                <td>De pago</td>
                <td>Todos los SO</td>
            </tr>
        </table>

    </section>
    <div class="titulo">
        <h1>Buscar</h1>
    </div>


    <section class="seccion-buscador">
        <label for="buscador">
        <div class="contenedor-buscador">

            <input type="text" id="buscador" name="buscador" class="buscador" placeholder="Buscar un S.O." />

            <div class="btn-buscar" id="btn-buscar">
                <img src="../img/busqueda (1).png" alt="" width="23" height="23" />
            </div>


        </div>
        </label>
    </section>




    <section id="seccion-principal"></section>
    <?php
    include("footer.php");
    ?>
</body>

</html>