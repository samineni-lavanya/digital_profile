<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$username = array();
$sql = "SELECT * FROM loginform";
$result = $conn->query($sql);

  
if($username[$_REQUEST['Username']] == $_REQUEST['Password']){
    //echo $_REQUEST['money'];
    //echo " ";
    echo "successfully withdrawn";
    header("Location: fruits.html");
}else{
    echo "not correct";
    //header("Location: withd.html");
}
$conn->close();
?>