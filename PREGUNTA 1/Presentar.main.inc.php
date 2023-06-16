<?php
session_start();
echo "<input type='hidden' name='proceso' value='".$proceso."'>";
$sql = "select * from academico.alumno where id=".$_SESSION["id"];
$resultado=mysqli_query($con, $sql);
$fila = mysqli_fetch_array($resultado);

$nombrecompleto=$fila["nombrecompleto"];
$cnacimiento=$fila["cnacimiento"];
$cidentidad=$fila["cidentidad"];
echo "<strong>".$nombrecompleto." estas segura de presentar los datos llenados?</strong>";
echo "<br>";
echo "<p>Los datos ingresados son :";
echo "<br>";
echo "<p>certificado de nacmiento: ".$cnacimiento." </p>";
echo "<p>cedula de identidad : ".$cidentidad." </p>";
?><br>