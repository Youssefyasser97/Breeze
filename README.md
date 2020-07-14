Breeze is a web-based application that provides its users by the current tempreature in any city they choose. It also has a search history for the searched cities.

The technologies used for this website are: PHP and phpmyadmin

The website is deployed at url : https://www.startapphub.com/breeze/



config file:

json file created under the name config.json, this file includes all the credentials that are needed to connect to the server and to the database.


config file:

json file created under the name config.json,
this file includes all the credentials that are needed to connect to the server and to the database.



docker file:

The FROM instruction means we are building our image on top of the tagged official php:7.1.8-apache image.

The COPY instruction is copying our project’s files into the “/srv/app” folder. This folder doesn’t exist so the COPY instruction creates it too. The second COPY is copying our vhost.conf

The last RUN instruction changes ownership of the application files to the Apache www-data user, making files writable by the Apache user.


The last RUN instruction changes ownership of the application files to the Apache www-data user, making files writable by the Apache user.




docker compose:

this file runs the docker file in our directory through the build context:.

dependencies:


"http://api.openweathermap.org/data/2.5/weather?q=" + citytext + "&appid=" + APIkey; // the api used to fetch the temperture per the entered city

Xampp application installed to run the database locally by running the apache server and mysql
then the php files have local access to the database in phpmyadmin where the sql code snippets can affect or access the data.
