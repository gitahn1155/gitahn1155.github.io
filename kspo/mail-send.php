<?php
require('phpmailer/class.phpmailer.php');

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug = 0;
$mail->SMTPAuth = TRUE;
$mail->SMTPSecure = "tls";
$mail->Port     = 587;  
$mail->Username = "apikey";
$mail->Password = "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";
$mail->Host     = "smtp.sendgrid.net";
$mail->Mailer   = "smtp";
$mail->SetFrom($_POST["userEmail"], $_POST["userName"]);
$mail->AddReplyTo($_POST["userEmail"], $_POST["userName"]);
$mail->AddAddress("aswdaniel1155@gmail.com");	
$mail->Subject = $_POST["subject"];
$mail->WordWrap   = 80;
$mail->MsgHTML("<strong>정답1</strong>: <br />파일 이미지 참조 <br /><br /><strong>정답2</strong>: <br />삼- ".$_POST["userText1"]."<br />십- ".$_POST["userText2"]."<br />주- ".$_POST["userText3"]."<br />년(연)- ".$_POST["userText4"]."<br /><br /><strong>정답3</strong>: ".$_POST["userDate"]."<br /><br />이름: ".$_POST["userName"]."<br />연락처".$_POST["userPhone"]);


foreach ($_FILES["attachment"]["name"] as $k => $v) {
    $mail->AddAttachment( $_FILES["attachment"]["tmp_name"][$k], $_FILES["attachment"]["name"][$k] );
}

$mail->IsHTML(true);

if(!$mail->Send()) {
	echo "<p class='error'>Problem in Sending Mail.</p>";
} else {
	echo "<p class='success'>성공적으로 접수되었습니다. 감사합니다.</p>";
}	
?>