<?php 
session_start();
$cnacimiento=$_GET["cnacimiento"];
$cidentidad=$_GET["cidentidad"];

$sql = "update academico.alumno set ";
$sql.=" cnacimiento='$cnacimiento', cidentidad='$cidentidad' where id=".$_SESSION["id"];
$resultado=mysqli_query($con, $sql);
?>