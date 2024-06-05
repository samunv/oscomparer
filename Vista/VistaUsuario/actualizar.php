<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OScomparer | Actualizar SO</title>
    <link rel="stylesheet" href="../CSS/actualizar.css?v=<?php echo time() ?>">
    <script src="../JS/actualizar.js?v=<?php echo time() ?>"></script>
    <link rel="icon" href="../img/flechas-repetir (1).png" />

</head>

<body>
    <h1>Actualizar los datos necesarios de <span id="nombre-del-so"></span></h1>
    <form id="formulario-actualizar">
        <label for="input-nombre">Nombre:</label><br>
        <input type="text" value="nombre" name="nombre" id="input-nombre"><br>

        <label for="input-fabricante">Fabricante:</label><br>
        <input type="text" value="fabricante" name="fabricante" id="input-fabricante"><br>

        <label for="input-arquitectura">Arquitectura:</label><br>
        <input type="text" value="arquitectura" name="arquitectura" id="input-arquitectura"><br>

        <label for="input-comunidad">Comunidad:</label><br>
        <input type="number" name="comunidad" max="7000" placeholder="Comunidad" id="input-comunidad"><br>

        <label for="input-seguridad">Seguridad:</label><br>
        <input type="number" name="seguridad" min="1" max="10" placeholder="Seguridad" id="input-seguridad"><br>

        <label for="input-version">Versión:</label><br>
        <input type="text" name="version" maxlength="15" placeholder="Versión" id="input-version"><br>

        <label for="input-dispositivos">Dispositivos:</label><br>
        <input type="text" value="dispositivos" name="dispositivos" id="input-dispositivos"><br>

        <label for="input-gratis">Gratis:</label><br>
        <input type="text" value="gratis" name="gratis" id="input-gratis"><br>

        <label for="input-color">Color:</label>
        <input type="color" name="color" id="input-color"><br>


       
        <input type="text" value="idSO" readonly name="idSO" id="input-idSO" class="input-oculto">
        <input type="text" value="imagen" readonly name="imagen" id="input-imagen" class="input-oculto">
        <img src="" alt="" whidth="100" height="100" id="img-so">
        <button type="submit" id="btn-actualizar">Actualizar</button>

        <a href="paneldecontrol.php#seccion-administrar-datos"><button type="button" id="btn-volver-atras">Volver atrás</button></a>
    </form>
</body>

</html>