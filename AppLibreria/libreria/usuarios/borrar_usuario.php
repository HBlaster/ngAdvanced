<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include("../conexion.php");
$con = conectar();

// Obtener el ID del usuario a eliminar desde la URL
$id = $_GET['id'];

// Realizar la lógica para eliminar el libro con el ID proporcionado
$sql = "DELETE FROM usuarios WHERE id = '$id'";
$query = mysqli_query($con, $sql);

if ($query) {
    // Si la eliminación fue exitosa, enviar una respuesta JSON con éxito
    echo json_encode(["success" => 1]);
} else {
    // Si ocurrió un error durante la eliminación, enviar una respuesta JSON con el mensaje de error
    echo json_encode(["success" => 0, "error" => mysqli_error($con)]);
}
?>
