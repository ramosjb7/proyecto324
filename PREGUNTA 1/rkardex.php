<?php
include "conexion.inc.php";
$estado = $_GET["estado"];
$id= $_GET["id"];

$sql = "update academico.alumno set ";
$sql.=" estado='$estado', enespera=2 where id=".$id;
$resultado=mysqli_query($con, $sql);
header("Location: revkardex.php");

?>