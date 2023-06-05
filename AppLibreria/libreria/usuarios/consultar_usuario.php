<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include("../conexion.php");
$con = conectar();

// Obtener el ID del usuario a eliminar desde la URL
$id = $_GET['id'];

// Realizar la lógica para eliminar el libro con el ID proporcionado
$sql = "SELECT * FROM usuarios WHERE id='$id'";
$query = mysqli_query($con, $sql);

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
