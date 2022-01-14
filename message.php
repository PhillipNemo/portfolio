
<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$message= $_POST['message'];
$to = "philipsonokere@gmail.com";
$subject = "Mail From my Website";
$txt ="Name = ". $name . "\r\n  Email = " . $email .
"\r\n  Phone = " . $phone .
"\r\n Message =" . $message;
$headers = "From: nemobug.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

?>
