<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OScomparer | Login</title>
    <link rel="icon" href="Vista/img/flechas-repetir (1).png">
    <link rel="stylesheet" href="Vista/CSS/login.css?v=<?php echo time() ?>">
    <script src="Vista/JS/login.js?v=<?php echo time() ?>"></script>
</head>

<body>

    <div id="logo">
        <img src="Vista/img/OScomparerlogogrande.png" alt="">
    </div>

    <form class="formulario" id="formulario">
        <label for="nombre">Nombre de Usuario</label>
        <input type="text" id="nombre" name="nombre" required placeholder="Nombre"><br>
        <label for="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" required placeholder="Contraseña"><br>
        <button type="submit" class="btn-iniciarsesion">Iniciar sesión</button>
    </form>

    <div class="contenedor-botones">
        <a href="registro.php">
            <button type="submit" class="btn-registrarse">Registrarse</button>
        </a>
    </div>

    <div id="alerta">
        <img src="Vista/img/cerrar.png" alt="" width="100" height="100">
        <h1>Inicio de sesión incorrecto</h1>
        <p>Prueba a inicar sesión de nuevo.</p>
        <button type="button" id="btn-alerta">Continuar</button>
    </div>

    <div id="overlay" class="overlay"></div>


    <p class="texto-proteccion">OScomparer | Todos los derechos reservados</p>

</body>

</html>
