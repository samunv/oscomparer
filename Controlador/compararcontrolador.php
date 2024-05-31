<?php
require_once "../Modelo/SistemaOperativoDAOImplementar.php";

$daoSoImp = new SistemaOperativoDAOimplementar();


$datos = $daoSoImp->leerSO();


echo $datos;
