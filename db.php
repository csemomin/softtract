<?php  
try {
    // $db = new PDO('mysql:host=localhost;dbname=softtrac_softtract;charset=utf8', 'softtrac_softtract', 'fk3VQ,YWiMm)');
    $db = new PDO('mysql:host=localhost;dbname=softtrac_softtract;charset=utf8', 'root', '');
} catch (PDOException $ex) {
    die('Database connection error!');
}
    