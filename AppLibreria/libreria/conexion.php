<?php 
function conectar() {
    $host = "localhost";
    $user = "root";
    $pass = "";
    $bd = "mvc_base";

    $con = mysqli_connect($host, $user, $pass);

    if (!$con) {
        die("Error de conexión: " . mysqli_connect_error());
    }

    if (!mysqli_select_db($con, $bd)) {
        die("Error al seleccionar la base de datos: " . mysqli_error($con));
    }

    return $con;
}

?>