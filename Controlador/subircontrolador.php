<?php
require_once '../Modelo/SistemaOperativo.php';
require_once '../Modelo/SistemaOperativoDAOImplementar.php';

//Verificar que el método de solicitud es post
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Verificar que exista una imagen y que sea png o jpeg
    if (isset($_FILES['imagen']) && ($_FILES['imagen']['type'] == 'image/jpeg' || $_FILES['imagen']['type'] == 'image/png')) {

        $directorio = "../img/";
        $datosImagen = $_FILES['imagen'];
        $nombre = $_POST['nombre'];
        $fabricante = $_POST['fabricante'];
        $arquitectura = $_POST['arquitectura'];
        $comunidad = $_POST['comunidad'];
        $seguridad = $_POST['seguridad'];
        $version = $_POST['version'];
        $dispositivos = $_POST['dispositivos'];
        $imagen = $directorio . $datosImagen['name'];
        $gratis = $_POST["gratis"];
        $color = $_POST["color"];

        
            $so = new SistemaOperativo(
                $nombre,
                $fabricante,
                $arquitectura,
                $comunidad,
                $seguridad,
                $version,
                $dispositivos,
                $imagen,
                $gratis,
                $color
            );

            $soDAO = new SistemaOperativoDAOimplementar();
            $mensaje = $soDAO->subirSO($so);

            echo json_encode($mensaje);

    } else {
        echo json_encode("Sube una imagen. Debe tener una extensión de Jpeg o png.");
    }
}
?>