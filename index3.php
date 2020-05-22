<?php
$url = 'config.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$characters = json_decode($data); // decode the JSON feed


$servername = "localhost";
$username = $characters->username;
$password = $characters->password;
$dbname = "yussef";

$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection : " . mysqli_connect_error());
}


$sql = "SELECT * FROM cities;";


$result = $conn->query($sql);





$query = mysqli_query($conn, $sql);

if (!$query) {
	die ('SQL Error: ' . mysqli_error($conn));
}
?>


<html>

	<style type="text/css">
		body {
			font-size: 15px;
			color: #343d44;
			font-family: "segoe-ui", "open-sans", tahoma, arial;
			padding: 0;
			margin: 0;
			background: url(mountain.jpg);
			/* background-repeat: no-repeat; */
			background-size: 100%;
		}

		table {
			margin: auto;
			font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
			font-size: 12px;
		}

		h1 {
			margin: 25px auto 0;
			text-align: center;
			text-transform: uppercase;
			font-size: 17px;
		}

		table td {
			transition: all .5s;
		}

		/* Table */
		.data-table {
			border-collapse: collapse;
			font-size: 14px;
			min-width: 537px;
		}

		.data-table th,
		.data-table td {
			border: 1px solid #e1edff;
			padding: 7px 17px;
		}
		.data-table caption {
			margin: 7px;
		}

		/* Table Header */
		.data-table thead th {
			background-color: #a7c44c;
			color: #FFFFFF;
			border-color: #e0eabf !important;
			text-transform: uppercase;
		}

		/* Table Body */
		.data-table tbody td {
			color: #353535;
		}
		.data-table tbody td:first-child,
		.data-table tbody td:nth-child(4),
		.data-table tbody td:last-child {
			text-align: right;
		}

		.data-table tbody tr:nth-child(odd) td {
			background-color: #ecf2d9;
		}
		.data-table tbody tr:hover td {
			background-color: #ffffa2;
			border-color: #ffff0f;
		}

		/* Table Footer */
		.data-table tfoot th {
			background-color: #e5f5ff;
			text-align: right;
		}
		.data-table tfoot th:first-child {
			text-align: left;
		}
		.data-table tbody td:empty
		{
			background-color: #ffcccc;
		}
		.middle{
		    text-align: center;
            position: relative;
            left:40%;
		}

.dropbtn {
    margin:10px;
    background-color: #a7c44c;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
    background-color: #768d2e;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
        margin-left:25px;
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}

div.ex1 {
    width:100%;
    margin: auto;
    border: 3px solid #73AD21;
}

.righty {
    margin:10px;
    background-color: #a7c44c;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    position:absolute;
    right:0.2%;
}
</style>
<head>	<title>History</title></head>
<body>
	<br>
<h1 style="font-size:24px; color: #9dc648">Search History</h1>
<br><br><br>
	<table id="myTable" class="data-table">
		<thead>
		  <tr>
		            <th>City Name</th>
                    <th>Last Search Time</th>

         </tr>
		</thead>
		<tbody>
		<?php
		$no 	= 1;
		$total 	= 0;
		while ($row = mysqli_fetch_array($query))
		{
			echo '<tr>
					<td>'.$row['name'].'</td>
					<td>'.$row['lastsearch'].'</td>
				</tr>';
			$no++;
		}?>
		</tbody>
		<tfoot>
			<tr>

			</tr>
		</tfoot>
	</table>
	<br><br><br>
	</body>


</html>
