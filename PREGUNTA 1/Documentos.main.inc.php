<?php
session_start();
echo "<h3><strong>Hola usuario nro°: ".$_SESSION["id"]."</strong></h3>";

$sql = "select * from academico.alumno where id=".$_SESSION["id"];
$resultado=mysqli_query($con, $sql);
$fila = mysqli_fetch_array($resultado);

$nombrecompleto=$fila["nombrecompleto"];

?><br>