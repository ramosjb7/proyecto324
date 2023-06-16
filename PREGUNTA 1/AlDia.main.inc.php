<?php
session_start();


$sql = "select * from academico.alumno where id=".$_SESSION["id"];
$resultado=mysqli_query($con, $sql);
$fila = mysqli_fetch_array($resultado);

if($fila["enespera"]<2){
    echo "<p>Se esperara a que kardex revise los datos no pierda vista los datos</p>";
}else{
    if($fila["estado"]=='aceptar')
    {
        echo "<p>Los datos han sido aceptados por kardex</p>";
    }else{
        header("Location: principal.php?flujo=F1&proceso=P5");
    }
}