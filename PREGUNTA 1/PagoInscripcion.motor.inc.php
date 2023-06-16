<?php 
session_start();
$nroboleta=$_GET["nroboleta"];

$sql = "update academico.alumno set ";
$sql.=" nroboleta='$nroboleta' where id=".$_SESSION["id"];
$resultado=mysqli_query($con, $sql);
?>