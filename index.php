<?php
$temp = "";
    if(isset($_GET['temp'])){
      $temp = $_GET["temp"];
    }

$city = "";
    if(isset($_GET['city'])){
      $city = $_GET["city"];
    }
?>
<!DOCTYPE html>
<html>		


<style>

body{
	background: url(mountain.jpg);
  /*background-repeat: no-repeat;*/
  background-size: cover;
}

.content {
    position: absolute;
    left: 50%;
    top: 60%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align:center;
}

header{
    margin-top: 4px;
	overflow:auto;
}
.header img {
    width: 200px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 8%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align:center;
}

input[type=text] {
          margin: auto;
      border-radius: 4px;
      padding: 5px 0px 5px 10px;
    }
input[type=submit] {
        margin: auto;
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
        background-color: #8AC53F;
    }

.degree{
    font-size: 48px;
    color: black;
    background-color: rgba(230,230,230,0.3);

}
.description{
    margin-top: -5px;
    font-size: 22px;
    color: black;
    background-color: rgba(230,230,230,0.3);
}

/*----------------------------Screens----------------------------------*/

/*Iphone X screen*/
@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) {

 body{
    background: url(portraitmountain.jpg);
    background-size: cover;

    }
    .content{
    	top: 45%;
    }
    .header img{
        width: 450px;
        height: 225px;
    }
    input[type=text] {
        font-size: 30px;
        border-radius: 14px;
        padding: 35px 30px 35px 40px;
    }
        input[type=submit] {
        font-size: 28px;
        border-radius: 14px;
        /*background-color: #8AC53F;*/
        padding: 30px 30px 35px 40px;
    }
    .degree{
        color: white;
        font-size: 78px;
    }
    .description{
        font-size: 35px;
        color: white;
    }
    }
    
    
    
/*Iphone 8 screen*/
@media only screen 
    and (device-width : 375px) 
    and (device-height : 667px) 
    and (-webkit-device-pixel-ratio : 2) { 
        
    body{
    background: url(portraitmountain.jpg);
    background-size: cover;
    }
    
    .content{
    	top: 50%;
    }
    .header img{
        width: 450px;
        height: 225px;
    }
    input[type=text] {
        font-size: 30px;
        border-radius: 14px;
        padding: 35px 30px 35px 40px;
    }
        input[type=submit] {
        font-size: 28px;
        border-radius: 14px;
        /*background-color: #8AC53F;*/
        padding: 30px 30px 35px 40px;
    }
    .degree{
        color: white;
        font-size: 78px;
    }
    .description{
        font-size: 35px;
        color: white;
    }
    }
    
    /*Iphone 8 plus*/
    @media only screen 
    and (device-width : 414px) 
    and (device-height : 736px) 
    and (-webkit-device-pixel-ratio : 3) {
            body{
    background: url(portraitmountain.jpg);
    background-size: cover;

    }
    .content{
    	top: 50%;
    }
    .header img{
        width: 450px;
        height: 225px;
    }
    input[type=text] {
        font-size: 30px;
        border-radius: 14px;
        padding: 35px 30px 35px 40px;
    }
        input[type=submit] {
        font-size: 28px;
        border-radius: 14px;
        /*background-color: #8AC53F;*/
        padding: 30px 30px 35px 40px;
    }
    .degree{
        color: white;
        font-size: 78px;
    }
    .description{
        font-size: 35px;
        color: white;
    }
    }
    
    /* iphone XR, 11 */
        @media only screen and (min-device-width : 414px) and (max-device-height : 896px) and (-webkit-device-pixel-ratio : 2) { 
                        body{
    background: url(portraitmountain.jpg);
    background-size: cover;

    }
    .content{
    	top: 50%;
    }
    .header img{
        width: 450px;
        height: 225px;
    }
    input[type=text] {
        font-size: 30px;
        border-radius: 14px;
        padding: 35px 30px 35px 40px;
    }
        input[type=submit] {
        font-size: 28px;
        border-radius: 14px;
        /*background-color: #8AC53F;*/
        padding: 30px 30px 35px 40px;
    }
    .degree{
        color: white;
        font-size: 78px;
    }
    .description{
        font-size: 35px;
        color: white;
    }
        }
        
        /* iphone 5 */
        @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) { 
             body{
    background: url(portraitmountain.jpg);
    background-size: cover;

    }
    .content{
    	top: 50%;
    }
    .header img{
        width: 450px;
        height: 225px;
    }
    input[type=text] {
        font-size: 30px;
        border-radius: 14px;
        padding: 35px 30px 35px 40px;
    }
        input[type=submit] {
        font-size: 28px;
        border-radius: 14px;
        /*background-color: #8AC53F;*/
        padding: 30px 30px 35px 40px;
    }
    .degree{
        color: white;
        font-size: 78px;
    }
    .description{
        font-size: 35px;
        color: white;
    }
    
        }


    
</style>


<head><meta charset="windows-1252">
		<link rel="shortcut icon" href="breezelogo.png" type="image/x-icon">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
		
	<title>
		Breeze
	</title>
</head>

<body onload="first()">
    <div class="header">
		<img src="breezelogo.png"  width="10%" height="15%" alt="logo" />
    </div>	

<div class = "content">
	<form>
	    <?php
	    echo '<input type="text" id="city" name="city" placeholder="Enter city name" value="'.$city.'">';
	    ?>

        <input type="submit" id="btn" onclick="getWeather()" value="Get Weather">
        <br/>
        <br/>
        <h1 class="degree" id="weather"></h1>
        <br>
        <h1 class="description" id="description"></h1>
        <h1 class="description" id="pressure"></h1>
        <h1 class="description" id="wind"></h1>
        <br/>
    </form>


<form action="/breeze/index3.php">
     <input type="submit" id="history" class="btn btn-secondary"  value="History">
</form>
</div>

</body>


<script>
		
	function first(){
		getWeather2();
	}
	
	function getWeather(){
		var citytext = document.getElementById("city").value;
		var APIkey = "c9b40de482a05cf285c63aadfcc30543";
		var URL = "https://api.openweathermap.org/data/2.5/weather?q="+citytext +"&appid="+APIkey;
		var temp="";
	
	if(citytext!=""){
			fetch(URL)
	  .then((resp) => resp.json())
	  .then(function(data) {
	    let wind = data.wind.speed;
	  	let description = data.weather[0].description;
	    let humidity = data.main.humidity;
		let temp = data.main.temp;
		 document.getElementById("weather").innerHTML = Math.trunc(temp-273) + "&#8451";
		 document.getElementById("pressure").innerHTML = "humidity: " + humidity;
		 document.getElementById("wind").innerHTML = "wind speed: " + wind;
		 document.getElementById("description").innerHTML = description;
		 
        window.location = "index2.php?temp="+temp+"&city="+citytext;

		})
	
	  .catch(function(error) {
	  });
	
	}
	else{
		alert("Please enter the city's name!");
	}
	
		}
	
		function getWeather2(){
		var citytext = document.getElementById("city").value;
		var APIkey = "c9b40de482a05cf285c63aadfcc30543";
		var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + citytext + "&appid=" + APIkey;
		var temp="";
	
			fetch(URL)
	  .then((resp) => resp.json())
	  .then(function(data) {
	    let wind = data.wind.speed;
	  	let description = data.weather[0].description;
	    let humidity = data.main.humidity;
		let temp = data.main.temp;
		let tempc = temp - 273;
		var screenwidth = screen.width;
		 document.getElementById("weather").innerHTML = Math.trunc(temp-273) + "&#8451";
		 document.getElementById("pressure").innerHTML = "humidity: " + humidity;
		 document.getElementById("wind").innerHTML = "wind speed: " + wind;
		 document.getElementById("description").innerHTML = description;
		 
		if(tempc >= 25){
		    if(screenwidth < 415){ //for phones
    		    document.body.style.background = "url('sunnyportrait.jpg')";
    	        document.body.style.backgroundSize= "cover";
		    }
		    else{
		    document.body.style.background = "url('sunny.jpg')";
	        document.body.style.backgroundSize= "cover";
		    }
		}
		else{
		    if(tempc < 25 && tempc >= 15){
    		    if(screenwidth < 415){ //for phones
    		        document.body.style.background = "url('middleportrait.jpg')";
        	        document.body.style.backgroundSize= "cover";
    		    }
    		    else{
        		    document.body.style.background = "url('middle.jpg')";
        	        document.body.style.backgroundSize= "cover";
    		    }
    		}
		    if(tempc < 15){
    		    if(screenwidth < 415){ //for phones
        		    document.body.style.background = "url('winterportrait.jpg')";
        	        document.body.style.backgroundSize= "cover";
    		    }
    		    else{
    	        document.body.style.background = "url('winter.jpg')";
    	        document.body.style.backgroundSize= "cover";
    		    }
		    }
		    
		}
		})
	
	  .catch(function(error) {
	  });
	    }
		
		function getHistory(){
			window.location = "/breeze/index3.php";
		}

	</script>

</html>
