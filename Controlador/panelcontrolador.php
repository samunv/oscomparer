<?php
require_once "../Modelo/SistemaOperativoDAOImplementar.php";
require_once "../Modelo/UsuarioDAOimplementar.php";

$daoSoImp = new SistemaOperativoDAOimplementar();
$daoUsuarioImp = new UsuarioDAOimplementar(); 


$array = array(); 

$datos = $daoSoImp->leerSOsinJson();

$usuarios = $daoUsuarioImp->leerUsuarios(); 

$array["usuarios"] = $usuarios;
$array["datos"] = $datos; 


echo json_encode($array);