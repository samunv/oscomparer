<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OScomparer | Actualizar SO</title>
    <link rel="stylesheet" href="../CSS/actualizar.css?v=<?php echo time() ?>">
    <script src="../JS/actualizarusuario.js?v=<?php echo time() ?>"></script>´
    <link rel="icon" href="../img/flechas-repetir (1).png" />

</head>

<body>
    <h1>Actualizar los permisos de <span id="nombre-del-usuario"></span></h1>
    <form id="formulario-actualizar">
        <label for="admin" >Permisos nuevos:</label><br>
        <select name="admin" id="input-admin">
            <option value="0">Sin permisos</option>
            <option value="1">Con permisos</option>
        </select>
       <!--<input type="number" name="admin" id="input-admin" max="1" min="0" placeholder="Permisos" required><br>-->

        <input type="text" value="idUsuario" readonly name="idUsuario" id="input-idUsuario" class="input-oculto">
       

        <button type="submit" id="btn-actualizar">Actualizar</button>

        <a href="paneldecontrol.php#seccion-administrar-usuarios"><button type="button" id="btn-volver-atras">Volver atrás</button></a>
    </form>
</body>

</html>