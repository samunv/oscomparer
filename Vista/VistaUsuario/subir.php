<?php


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OScomparer | Subir SO</title>
    <link rel="icon" href="../img/flechas-repetir (1).png" />
    <link rel="stylesheet" href="../CSS/subir.css?v=<?php echo time(); ?>">
    <script src="../JS/subir.js?v=<?php echo time(); ?>"></script>
</head>

<body>
    <h1>Subir un nuevo Sistema Operativo</h1>
    <form method="post" enctype="multipart/form-data" id="formulario-subida">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" value="1" required maxlength="20"><br>

        <label for="fabricante">Fabricante:</label><br>
        <input type="text" id="fabricante" name="fabricante" value="1" required maxlength="20"><br>

        <label for="arquitectura">Arquitectura:</label><br>
        <input type="text" id="arquitectura" name="arquitectura" value="1" required maxlength="20"><br>

        <label for="comunidad">Comunidad:</label><br>
        <input type="number" id="comunidad" name="comunidad" value="1" required><br>

        <label for="seguridad">Seguridad:</label><br>
        <input type="number" id="seguridad" name="seguridad" min="1" max="10" value="1" required><br>

        <label for="version">Versión:</label><br>
        <input type="text" id="version" name="version"  value ="1" required maxlength="10"><br>

        <label for="dispositivos">Dispositivo:</label><br>
        <select name="dispositivos" id="dispositivos" required>
            <option value="Móviles">Móviles</option>
            <option value="Ordenadores">ordenadores</option>
            <option value="Consola">Consola</option>
            <option value="TV">TV</option>
            <option value="Coches">Coches</option>
        </select><br>

        <label for="imagen">Imagen:</label><br>
        <input type="file" id="imagen" name="imagen" required><br>

        <label for="gratis">Gratis:</label><br>
        <select name="gratis" id="gratis" required>
            <option value="Si">Si</option>
            <option value="No">No</option>
        </select><br>

        <input type="submit" value="Subir" id="btn-subir">

        

        <a href="paneldecontrol.php"><button type="button" id="btn-volver-atras">Volver atrás</button></a>
    </form>
</body>

</html>