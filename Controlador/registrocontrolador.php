<?php


require_once "../Modelo/UsuarioDAOimplementar.php";
require_once "../Modelo/Usuarios.php";

// Crear una instancia de UsuarioDAOimplementar
$usuarioDAO = new UsuarioDAOimplementar();

// Obtener los datos del formulario
$inputNombre = $_POST["nombreNuevo"];
$inputContrasena = $_POST["contrasenaNueva"];
$inputEmail = $_POST["email"];

// Crear un nuevo objeto Usuario
$nuevoUsuario = new Usuarios($inputNombre, $inputEmail, $inputContrasena, 0);

$array = array();

// Llamar al método crearUsuario para agregar el nuevo usuario a la base de datos
$resultado = $usuarioDAO->crearUsuario($nuevoUsuario);


// Verificar el resultado de la operación y redirigir según sea necesario
if ($resultado) {
    $array["registro"] = "registrado";
}

echo json_encode($array);
