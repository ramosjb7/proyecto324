<?php
session_start();
$sql = "select * from academico.alumno where id=".$_SESSION["id"];
$resultado=mysqli_query($con, $sql);
$fila = mysqli_fetch_array($resultado);

$nombrecompleto=$fila["nombrecompleto"];
$cnacimiento=$fila["cnacimiento"];
$cidentidad=$fila["cidentidad"];
echo "<strong>".$nombrecompleto." emepzo el cotejo de sus datos</strong>";
echo "<br>";
?><br>