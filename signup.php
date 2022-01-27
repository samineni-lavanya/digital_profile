<?php

$link = mysqli_connect("localhost", "root", "", "test");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$User_name = mysqli_real_escape_string($link, $_REQUEST['Username']);
$mbno = mysqli_real_escape_string($link, $_REQUEST['Mobilenumber']);
$email = mysqli_real_escape_string($link, $_REQUEST['E_mail']);
$pwd = mysqli_real_escape_string($link, $_REQUEST['Password']);
$conpwd = mysqli_real_escape_string($link, $_REQUEST['Confirmpassword']);

 echo $Username;
 
// Attempt insert query execution
$sql = "INSERT INTO signupform VALUES ('$User_name','$mbno ','$email ', '$pwd','$conpwd')";
if(mysqli_query($link, $sql)){
    echo "succesfull";
    header("Location: loginpage.html");
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
// Close connection
mysqli_close($link);
?>