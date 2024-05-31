<?php
require_once "../Modelo/UsuarioDAOimplementar.php";


$nombreUsuario = $_GET["nombreusuario"];

$daoUsuarioImp = new UsuarioDAOimplementar();


$usuario = $daoUsuarioImp->eliminarUsuario($nombreUsuario);

// Crear un array para almacenar los datos de respuesta
$array = array();


// Si se elimina
if (!empty($nombreUsuario)) {
    $array["exito"] = "exito";

    // Si no se elimina
    $array["error"] = "Error";
}



// Convertir el array de respuesta como JSON y enviarlo como respuesta
echo json_encode($array);
