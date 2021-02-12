<!-- 
    Desarrollo: José Miguel Molina Rondón
    BrusaCrea.com
    
    - En contrucción
 -->
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

// Creación de intancia de PHPMailer
$mail = new PHPMailer(true);

$nombre = utf8_decode($_POST['nombre']);
$correo = utf8_decode($_POST['correo']);
$asunto = utf8_decode($_POST['asunto']);
$mensaje = utf8_decode($_POST['mensaje']);

try {

    //Configuración del servidor
    $mail->SMTPDebug = 0; // Enable verbose debug output (0,1,2,3)
    $mail->isSMTP();   // Send using SMTP
    $mail->Host       = 'smtp.dominio.com';  // Set the SMTP server to send through
    $mail->SMTPAuth   = true;  // Enable SMTP authentication
    // $mail->SMTPOptions = [
    //     'ssl' => [
    //         'verify_peer' => false,
    //         'verify_peer_name' => false,
    //         'allow_self_signed' => true,
    //     ]
    // ];
    $mail->Username   = 'email@dominio.com'; // SMTP username
    $mail->Password   = 'password'; // SMTP password
    //$mail->SMTPSecure = 'tls';
    //$mail->Port       = 587;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //ssl 
    $mail->Port       = 465;

    //Receptores
    $mail->setFrom('email@dominio.com', 'Dominio');
    $mail->addAddress('email@dominio.com', 'Dominio');
    $mail->addReplyTo($correo, $nombre);
    //$mail->addCC('cc@example.com');
    $mail->addBCC('usuarioA@email.com', utf8_decode('Usuario A'));
    $mail->addBCC('usuarioB@email.com', utf8_decode('Usuario B'));

    // Contenido
    $mail->isHTML(true);
    $mail->Subject = $asunto;
    $contenido = '<h3>Formulario de contacto</h3>' .
    '<p><b>Nombre: </b>' .$nombre. '<br>' .
    '<b>Email: </b>' .$correo. '<br>' .
    '<b>Asunto: </b>' .$asunto. '<br>' .
    '<b>Mensaje: </b>' .$mensaje. '<br>' .
    '<b>Fecha: </b>' .date('d/m/Y', time()). '</p>' .
    '<i>Enviado desde <a href="https://www.brusacrea.com/">brusacrea.com</a></i>';
    $mail->Body    = $contenido;

    $contenido_plano = "FORMULARIO DE CONTACTO \r\n";
    $contenido_plano .= "Nombre: $nombre \r\n";
    $contenido_plano .= "Email: " . $correo . " \r\n";
    $contenido_plano .= "Asunto: $asunto \r\n";
    $contenido_plano .= "Mensaje: $mensaje \r\n";
    $contenido_plano .= "Fecha:  " . date('d/m/Y', time());
    $mail->AltBody = $contenido_plano;

    $mail->send();
    echo "<script> setTimeout(\"location.href='https://www.brusacrea.com/#/sent'\", 1)</script>";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    echo "<script> setTimeout(\"location.href='https://www.brusacrea.com/#/notsent'\", 1)</script>";
}
?>