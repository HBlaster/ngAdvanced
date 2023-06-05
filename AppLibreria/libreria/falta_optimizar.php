<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST,DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "libreria_cuadra";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);



//Inserta un nuevo prestamo tabla de prestamos
if(isset($_GET["prestamo"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre_usuario=$data->nombre_usuario;
    $nombre_libro=$data->nombre_libro;
    $fecha_prestamo=$data->fecha_prestamo;
        if(($nombre_usuario!="")&&($nombre_libro!="")){
            
    $sqlLibros = mysqli_query($conexionBD,"INSERT INTO prestamo (nombre_usuario, nombre_libro, fecha_prestamo) VALUES('$nombre_usuario','$nombre_libro','$fecha_prestamo') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}

?>
