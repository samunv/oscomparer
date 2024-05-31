<?php
require_once '../Modelo/SistemaOperativo.php';
require_once '../Modelo/SistemaOperativoDAO.php';
require_once '../Modelo/SistemaOperativoDAOImplementar.php';

// Verificar si se recibieron los datos del formulario


    $idSO = $_POST["idSO"]; 

    // Mover el archivo


    
    $nombre = $_POST['nombre'];
    $fabricante = $_POST['fabricante'];
    $arquitectura = $_POST['arquitectura'];
    $comunidad = $_POST['comunidad'];
    $seguridad = $_POST['seguridad'];
    $version = $_POST['version'];
    $dispositivos = $_POST['dispositivos'];
    $imagen = $_POST["imagen"]; // Ruta de la imagen
    $gratis = $_POST["gratis"];


    // Verificar que los campos no estén vacíos

     // Crear un nuevo objeto so con los datos del formulario
     $so = new SistemaOperativo(
        $nombre,
        $fabricante,
        $arquitectura,
        $comunidad,
        $seguridad,
        $version,
        $dispositivos,
        $imagen,
        $gratis
    );

    // Crear una instancia del DAO
    $soDAO = new SistemaOperativoDAOimplementar();

    // Llamar al método crearSO del DAO para insertar el nuevo sistema operativo
    $mensaje = $soDAO->actualizarSO($so, $idSO);

    // Mostrar un mensaje al usuario
    echo json_encode($mensaje);
    


    

   
?>