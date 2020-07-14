<?php
$servername = "localhost";
$username = "indocowo_youssef";
$password = "Youssef@123";
$dbname = "indocowo_visualprogramming";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
} 

$id = $_GET['city'];

// $sql = "SELECT DISTINCT name FROM cities WHERE name LIKE '".$id."%' limit 10";
$sql = "SELECT DISTINCT name FROM cities WHERE name IN (
        SELECT name 
          FROM cities 
          WHERE name LIKE '".$id."%'
     )";
     
// $sql = "SELECT DISTINCT name FROM cities WHERE MATCH(name) AGAINST('*c*' IN BOOLEAN MODE)";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row["name"]. "\n";
    }
} 
else {
    echo "";
}
    
$conn->close();
?>