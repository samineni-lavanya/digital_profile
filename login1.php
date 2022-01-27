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

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    //echo $row['user_name']." ".$row['Pin']." ".$row["Balance"]."<br>";
    $username[$row['Username']] = $row['Password'];
    }
  }
else {
  echo "0 results";
}
if($username[$_REQUEST['Username']] == $_REQUEST['Password']){
    //echo $_REQUEST['money'];
    //echo " ";
    //echo "successfully withdrawn";
    header("Location: CARTT.html");
}else{
    //echo "
    header("Location: liki.html");
}
$conn->close();
?>