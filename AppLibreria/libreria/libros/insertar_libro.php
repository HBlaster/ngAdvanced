<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include("../conexion.php");
$con = conectar();

//obtener los datos del libro enviados
$data=json_decode(file_get_contents("php://input"));

// Extraer los valores de los campos del libro
$nombre = $data->nombre;
$nombre_corto = $data->nombre_corto;
$fecha_ingreso = $data->fecha_ingreso;

//Verificar que campos requeridos no esten vacios
if(!empty($nombre) && !empty($nombre_corto)){
    //Preparacion consulta para insertar libro
    $sql = "INSERT INTO libros (nombre, nombre_corto, fecha_ingreso) VALUES ('$nombre', '$nombre_corto', '$fecha_ingreso')";
    $query = mysqli_query($con,$sql);

    if($query){
        echo (json_encode(["success"=>1]));
    } else{
        echo json_encode(["success" => 0, "error" => mysqli_error($con)]);
    }
}else 
{
   // Si faltan campos requeridos, enviar una respuesta JSON con un mensaje de error
   echo (json_encode(["success" => 0, "error" => "Campos requeridos faltantes"]));
}

?>