<?php


$name = $_POST['name'];
$email = $_POST['email'];
$countryCode = $_POST['countryCode'];
$phone = $_POST['phone'];
$resume = $_POST['resume'];
$coverLetter = $_POST['coverLetter'];
$URLlinkedin = $_POST['URLlinkedin'];
$URLgithub = $_POST['URLgithub'];

echo $name."--".$email."--".$countryCode."--".$phone."--".$resume."--".$coverLetter."--".$URLlinkedin."--".$URLgithub;


$to =  $mail;
$subject  = "Aplication for Software Developer Successfully accepted";
$message = "
Hello ".$name.",

Thank you for your interest in Cozee Homes. We are working on some very exciting products with interesting technical challenges. We are looking for  motivated developers who are strong in programming, can pick up new technologies and can write elegant code.

To determine whether you fit our requirements, we are sending you this small set of simple programming and analytical puzzles.

Careers @ Cozee Homes

"

mail ( $to , $subject , $message);