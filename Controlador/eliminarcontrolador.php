<?php
require_once "../Modelo/SistemaOperativoDAOImplementar.php";

$nombreSO = $_GET["nombreSO"];

// Instanciar el DAO
$daoSoImp = new SistemaOperativoDAOimplementar();



$datos = $daoSoImp->eliminar($nombreSO);

// Crear un array para almacenar los datos de respuesta
$array = array();


if (!empty($nombreSO)) {
    $array["exito"] = "exito";

    // Si no se elimina
    $array["error"] = "Error";
}


// Convertir el array de respuesta como JSON y enviarlo como respuesta
echo json_encode($array);
?>