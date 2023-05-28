<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST,DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "libreria_cuadra";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta libro
if (isset($_GET["consultarl"])){
    $sqllibro = mysqli_query($conexionBD,"SELECT * FROM libros WHERE id=".$_GET["consultarl"]);
    if(mysqli_num_rows($sqllibro) > 0){
        $libro = mysqli_fetch_all($sqllibro,MYSQLI_ASSOC);
        echo json_encode($libro);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

// Consulta usuario
if (isset($_GET["consultaru"])){
    $sqlusuario = mysqli_query($conexionBD,"SELECT * FROM usuarios WHERE id=".$_GET["consultaru"]);
    if(mysqli_num_rows($sqlusuario) > 0){
        $usuario = mysqli_fetch_all($sqlusuario,MYSQLI_ASSOC);
        echo json_encode($usuario);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

//borrar libro
if (isset($_GET["borrarl"])){
    $sqllibro = mysqli_query($conexionBD,"DELETE FROM libros WHERE id=".$_GET["borrarl"]);
    if($sqllibro){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

//borrar usuario
if (isset($_GET["borraru"])){
    $sqlusuario = mysqli_query($conexionBD,"DELETE FROM usuarios WHERE id=".$_GET["borraru"]);
    if($sqlusuario){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}


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

//Inserta un nuevo registro tabla de libros
if(isset($_GET["insertarl"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $nombre_corto=$data->nombre_corto;
    $fecha_ingreso=$data->fecha_ingreso;
        if(($nombre!="")&&($nombre_corto!="")){
            
    $sqlLibros = mysqli_query($conexionBD,"INSERT INTO libros(nombre, nombre_corto, fecha_ingreso) VALUES('$nombre','$nombre_corto','$fecha_ingreso') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}

//Inserta un nuevo registro tabla de usuarios
if(isset($_GET["insertaru"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $nombre_corto=$data->nombre_corto;
    $fecha_ingreso=$data->fecha_ingreso;
        if(($nombre!="")&&($nombre_corto!="")){
            
    $sqlUsuarios = mysqli_query($conexionBD,"INSERT INTO usuarios(nombre, nombre_corto, fecha_ingreso) VALUES('$nombre','$nombre_corto','$fecha_ingreso') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}

// Actualiza datos tabla libros
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $nombre=$data->nombre;
    $nombre_corto=$data->nombre_corto;
    
    $sqlLibros = mysqli_query($conexionBD,"UPDATE libros SET nombre='$nombre',nombre_corto='$nombre_corto' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

// Actualiza datos tabla usuarios
if(isset($_GET["actualizaru"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizaru"];
    $nombre=$data->nombre;
    $nombre_corto=$data->nombre_corto;
    // $fecha_ingreso=$data->fecha_ingreso;
    
    $sqlUsuarios = mysqli_query($conexionBD,"UPDATE usuarios SET nombre='$nombre',nombre_corto='$nombre_corto' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}


// Consulta todos los registros de la tabla libros
if(isset($_GET["libros"])){
$sqlLibros = mysqli_query($conexionBD,"SELECT * FROM libros ");
if(mysqli_num_rows($sqlLibros) > 0){
    $libros = mysqli_fetch_all($sqlLibros,MYSQLI_ASSOC);
    echo json_encode($libros);
}
else{ echo json_encode([["success"=>0]]); }
}

// Consulta todos los registros de la tabla empleados
if(isset($_GET["usuarios"])){
$sqlUsuarios = mysqli_query($conexionBD,"SELECT * FROM usuarios ");
if(mysqli_num_rows($sqlUsuarios) > 0){
    $usuarios = mysqli_fetch_all($sqlUsuarios,MYSQLI_ASSOC);
    echo json_encode($usuarios);
}
else{ echo json_encode([["success"=>0]]); }
}


?>
