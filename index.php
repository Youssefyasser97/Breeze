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
   <link rel="shortcut icon" href="breezelogo5.png" type="image/x-icon">
   <head>
      <meta name="viewport" >
      <meta charset="windows-1252">
      <link rel="stylesheet" type="text/css" href="mystyle.css">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <title>
         Breeze
      </title>
      <!--<link rel="stylesheet" type="text/css" href="style.css" />-->
      <!--<script type="text/javascript" src="jquery-1.4.2.min_.js"></script>-->
      <!--<script type="text/javascript" src="jquery.autocomplete.js"></script>-->

   </head>
   <body onload="first()">
      <audio hidden id="myAudio" class="audioclass" controls>
         <source id="src1" src="https://listen.hs.llnwd.net/g3/6/5/3/9/7/1329679356.mp3" controls>
      </audio>
      
      <div class="header">
             <img src="images/breezelogo6.png" alt="logo" />
      </div>
      
      <div class="clouds">
         <div class="cloud s1">
            <h3 style="padding-top:25px; font-size: 20px; color:#153607; font-family: Snell Roundhand, cursive; text-align: center;">Feel the Breeze</h3>
         </div>
         <div class="cloud s2"></div>
         <div class="cloud s3"></div>
         <div class="cloud s4"></div>
         <br>
         <br>
         <div class="cloud s5"></div>
      </div>
      <div class = "content" id="content">
         <h1 class="description" id="songname"></h1>
         <!--<form>-->
         <div class="autocomplete" id="autocomplete">
            <?php
               echo '<input type="text" id="city" name="city" autocomplete="off" placeholder="City or Country" value="'.$city.'">';
               ?>
         </div>
         <input type="button" id="btn" onclick="getWeather2()" value="Get Info"/>
         <br/>
         <br/>
         <h1 class="cityname" id="cityname"></h1>
         <div id="descriptiondiv" class="descriptiondiv">
            <h1 class="degree" id="weather"></h1>
            <!--<br>-->
            <h1 class="description" id="time"></h1>
            <h1 class="description" id="description"></h1>
            <h1 class="description" id="pressure"></h1>
            <h1 class="description" id="wind"></h1>
            <hr>
            <h1 class="description" id="pop"></h1>
         </div>
         <h1 class="corona" id="corona"></h1>
      </div>
   </body>

    <script src="myscript.js"></script>


</html>