<?php

$link = mysqli_connect("localhost","root","","test");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$Fullname = mysqli_real_escape_string($link, $_REQUEST['address']);
$Email = mysqli_real_escape_string($link, $_REQUEST['amount']);
$Address= mysqli_real_escape_string($link, $_REQUEST['name']);
$State = mysqli_real_escape_string($link, $_REQUEST['card_number']);
$Cardowner = mysqli_real_escape_string($link, $_REQUEST['card_type']);
$Cardnumber = mysqli_real_escape_string($link, $_REQUEST['Expiry']);
$Expdate = mysqli_real_escape_string($link, $_REQUEST['CVV']);


 
 echo $address;
 
// Attempt insert query execution
$sql = "INSERT INTO orderform VALUES ('$Fullname', '$Email', '$Address','$State','$Cardowner','$Cardnumber','$Expdate')";
if(mysqli_query($link, $sql)){
    echo " Your order is successfull.";
    header("Location: Index.html");
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>