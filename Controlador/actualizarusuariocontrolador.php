<?php

require_once '../Modelo/UsuarioDAOimplementar.php';


    // Verificar si se recibieron los datos del formulario

 
    $permisos = $_POST['admin'];
    $idUsuario= $_POST['idUsuario'];
  


    // Crear una instancia del DAO
    $usuarioDAOimp= new UsuarioDAOimplementar();

    // Llamar al método crearSO del DAO para insertar el nuevo sistema operativo
    $mensaje = $usuarioDAOimp->actualizarPermisos($idUsuario, $permisos); 

    // Mostrar un mensaje al usuario
    echo json_encode($mensaje);

    

