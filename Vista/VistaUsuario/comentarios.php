<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OScomparer | Comentarios</title>
    <script src="../JS/comentario.js?v=<?php echo time() ?>"></script>
    <link rel="stylesheet" href="../CSS/estiloheader.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="../CSS/estilofooter.css?=<?php echo time() ?>">
    <link rel="stylesheet" href="../CSS/comentarios.css?v=<?php echo time() ?>">
    <link rel="icon" href="../img/flechas-repetir (1).png" />
</head>

<body>
    <?php
    include "header.php";
    ?>


    <h1 class="titulo">Comentarios</h1>


    <form id="formulario-comentario">
        <h2>Publica tus Opiniones</h2>
        <input type="text" name="contenido" id="input-contenido" required maxlength="255" minlength="1" placeholder="Escribir...">
        <input type="text" readonly name="idUsuario" id="input-idUsuario" value="idUsuario" class="input-invisible">
        <input type="text" readonly name="nombreUsuario" id="input-nombreUsuario" value="nombreUsuario" class="input-invisible">
        <br>
        <button type="submit" id="btn-publicar">Publicar</button>
    </form>

    <p id="texto-ordenados">Ordenados por: más recientes</p>
    <section id="seccion-comentarios"></section>


    <?php
    include "footer.php";
    ?>
</body>

</html>