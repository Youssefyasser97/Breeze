<?php

$url = 'config.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$characters = json_decode($data); // decode the JSON feed

$servername = "localhost";
$username = $characters->username;
$password = $characters->password;
$dbname = "yussef";





// $firebase = new \Geckob\Firebase\Firebase('secretfile.json');



// // Set the parent node. 
// $firebase = $firebase->setPath('bookings/');

// // Create a new node with key = test and value = testValue. 
// // If the node already exist, it will update the value
// $firebase->set('test','testValue');

// // Support multiple nodes, if it doesnt exist, it will create the node
// $firebase->set('testObject/testKey', 'testValueObject');


// // Same as set but without keys. This requires to call setPath first to identify the parent
// $firebase->push([
// 	'test'  => 'value',
// 	'test1' => 'value1'
// ]);

// // Get the value of node with key = test
// $firebase->get('test');

// // Get the value of using multilevel key
// $firebase->get('testObject/testKey');




// // Delete the node with key = test
// $firebase->delete('test');

// // Delete the multilevel node and all it's children
// $firebase->delete('testObject/testKey');



$cityname=$_POST['city'];
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
    echo '<script>window.history.back();</script>';
    // echo 'done';
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
