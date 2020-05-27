<?php

echo 'Storing search..';

$url = 'config.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$characters = json_decode($data); // decode the JSON feed

$servername = "localhost";
$username = "indocowo_youssef";
$password = "Youssef@123";
$dbname = "indocowo_visualprogramming";

$temp = $_GET['temp'];


$cityname=$_GET['city'];
$date = date("Y-m-d H:i:s");

$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection : " . mysqli_connect_error());
}



$sql = "INSERT INTO cities (
 name, lastsearch)
  VALUES('$cityname','$date');";

if (mysqli_query($conn, $sql)) {
    echo '<script>window.location = "index.php?temp='.$temp.'&city='.$cityname.'";</script>';
    // echo '<script>window.location.href = "index.php?temp="'. $temp.'";</script>';
    // echo '<script>window.history.back();</script>';
    // echo 'done';
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
