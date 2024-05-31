<?php
require_once "../Modelo/ComentarioDAOimplementar.php";

$comentDao = new ComentarioDAOimplementar();


$datos = $comentDao->leerComentario();



echo $datos;