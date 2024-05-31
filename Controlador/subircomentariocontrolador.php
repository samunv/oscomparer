<?php
require_once '../Modelo/Comentario.php';
require_once '../Modelo/ComentarioDAOimplementar.php';

$idUsuario = $_POST["idUsuario"];
$contenido = $_POST["contenido"];
$nombreUsuario = $_POST["nombreUsuario"];

// Verificar que los datos se recibieron correctamente
if (!isset($idUsuario) || !isset($contenido) || !isset($nombreUsuario)) {
    echo json_encode("Datos no recibidos correctamente");
    exit;
}

// Crear un nuevo objeto comentario con los datos del comentario
$comentario = new Comentario($idUsuario, $contenido, $nombreUsuario);

// Crear una instancia del DAO
$comentDao = new ComentarioDAOimplementar();

// Subir comentario y obtener el mensaje
$mensaje = $comentDao->subirComentario($comentario);

// Mostrar un mensaje al usuario
echo json_encode($mensaje);
?>