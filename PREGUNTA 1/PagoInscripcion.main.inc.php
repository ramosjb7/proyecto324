<?php
session_start();
$sql = "select * from academico.alumno where id=".$_SESSION["id"];
$resultado=mysqli_query($con, $sql);
$fila = mysqli_fetch_array($resultado);

$nombrecompleto=$fila["nombrecompleto"];
$cnacimiento=$fila["cnacimiento"];
$cidentidad=$fila["cidentidad"];
echo "<strong>".$nombrecompleto." debe cargar el numero de la boleta de pago y esperar nuevamente la verificacion de kardex</strong>";
echo "<br>";
?><br>