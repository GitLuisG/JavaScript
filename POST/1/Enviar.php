<?php

header('Content-Type: application/json; charset=UTF-8');
require_once './models/Herramientas/conexion.php';
$Datos = array(
    'ID' => filter_input(INPUT_POST, 'ID'),
    'ES' => filter_input(INPUT_POST, 'ES'),
    'ED' => filter_input(INPUT_POST, 'ED'),
    'DES' => filter_input(INPUT_POST, 'DES'),
    'Peso' => filter_input(INPUT_POST, 'PESO'),
    'UM' => filter_input(INPUT_POST, 'UM'),
    'PG' => filter_input(INPUT_POST, 'PG'),
    'CAN' => filter_input(INPUT_POST, 'CAN'),
    'RE' => filter_input(INPUT_POST, 'RE'),
    'COM' => filter_input(INPUT_POST, 'COM'),
    'Prov' => filter_input(INPUT_POST, 'Prov'),
);
$res = array('autentificado' => false, 'nombre' => NULL);
$res['autentificado'] = true;
$res['nombre'] = $Datos['ID'];
$stmt = Conexion::conectar()->prepare("CALL Update_insumo(:ID,:insumos,:des,
 :UM,:insumoPeso,:Precio_Insumo,
 :CantidadenExistencia,:Re_Orden,
 :Comentarios,:Proveedor_Insumo,:Estado);");
$stmt->bindParam(':ID', $Datos['ID']);
$stmt->bindParam(':insumos', $Datos['ED']);
$stmt->bindParam(':des', $Datos['DES']);
$stmt->bindParam(':UM', $Datos['UM']);
$stmt->bindParam(':insumoPeso', $Datos['Peso']);
$stmt->bindParam(':Precio_Insumo', $Datos['PG']);
$stmt->bindParam(':CantidadenExistencia', $Datos['CAN']);
$stmt->bindParam(':Re_Orden', $Datos['RE']);
$stmt->bindParam(':Comentarios', $Datos['COM']);
$stmt->bindParam(':Proveedor_Insumo', $Datos['Prov']);
$stmt->bindParam(':Estado', $Datos['ES']);
$stmt->execute();
echo json_encode($res);
?>