<?php 
session_start();
$enespera=1;

$sql = "update academico.alumno set ";
$sql.=" enespera='$enespera', estado='' where id=".$_SESSION["id"];
$resultado=mysqli_query($con, $sql);
?>