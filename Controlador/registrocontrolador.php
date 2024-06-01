<?php


require_once "../Modelo/UsuarioDAOimplementar.php";
require_once "../Modelo/Usuarios.php";

// Crear una instancia de UsuarioDAOimplementar
$usuarioDAO = new UsuarioDAOimplementar();

// Obtener los datos del formulario
$inputNombre = $_POST["nombreNuevo"];
$inputContrasena = $_POST["contrasenaNueva"];
$inputEmail = $_POST["email"];

require_once "../Modelo/UsuarioDAOimplementar.php";
$daoUsuarioImp = new UsuarioDAOimplementar();

$datosUsuario = $daoUsuarioImp->leerUsuarioPorNombre($inputNombre);

$array = array();

if (!empty($datosUsuario)) {
    // Si se encuentra el usuario con el mismo nombre, se añaden sus datos al array
    $array["error"] = "El nombre de usuario ". $inputNombre." no está disponible o ya existe. Prueba con otro.";
    echo json_encode($array);
} else {
    // Crear un nuevo objeto Usuario
    $nuevoUsuario = new Usuarios($inputNombre, $inputEmail, $inputContrasena, 0);

    

    // Llamar al método crearUsuario para agregar el nuevo usuario a la base de datos
    $resultado = $usuarioDAO->crearUsuario($nuevoUsuario);


    // Verificar el resultado de la operación y redirigir según sea necesario
    if ($resultado) {
        $array["registro"] = "registrado";
    }

    echo json_encode($array);
}