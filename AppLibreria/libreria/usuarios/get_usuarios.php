<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

include("../conexion.php");
$con = conectar();

$sql="SELECT * FROM usuarios";

$query = mysqli_query($con, $sql);

// Crear un array para almacenar los datos
$datos = array();

// Recorrer los resultados de la consulta
while ($fila = mysqli_fetch_assoc($query)) {
    $datos[] = $fila;
}

// Convertir el array a JSON
$json = json_encode($datos);

// Enviar el JSON como respuesta
header('Content-Type: application/json');
echo $json;

?>