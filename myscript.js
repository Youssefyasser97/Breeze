      function first() {

          //   var audio = document.getElementById("myAudio"); 
          //      audio.play(); 
          introsong = "https://listen.hs.llnwd.net/g3/6/5/3/9/7/1329679356.mp3";
          playAudio(introsong);

          var screenwidth = screen.width;
          document.getElementById("city").focus();

          var cityinput = document.getElementById("city");
          cityinput.addEventListener("keyup", function (event) {
              if (event.keyCode === 13) {
                  event.preventDefault();
                  document.getElementById("btn").click();
              }
          });

          var citytext2 = document.getElementById("city").value;
          if (citytext2 != "") {
              document.getElementById("descriptiondiv").style.backgroundColor = "rgba(0,0,0,0.45)";
              document.getElementById("cityname").style.backgroundColor = "rgba(0,0,0,0.35)";
          }

      }
      var myVar;
      var imagevar;
      var x = document.getElementById("myAudio");
      var mycod = 0;


      function getWeather2() {

          clearInterval(imagevar);
          imagevar = false;

          clearInterval(myVar);

          pauseAudio();

          var audio = document.getElementById("myAudio");
          audio.play();

          myVar = setInterval(function () {
              updateTime();
          }, 1000);

          var citytext = document.getElementById("city").value;

          if (citytext == "") {
              alert("Please enter the city or country");
          }
          var APIkey = "c9b40de482a05cf285c63aadfcc30543";

          var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + citytext + "&appid=" + APIkey;

          if (citytext == "geneva" || citytext == "Geneva") {
              URL = "https://api.openweathermap.org/data/2.5/weather?lat=46.2044&lon=6.1432&appid=" + APIkey;
          }
          if (citytext == "South Africa" || citytext == "South africa" || citytext == "south Africa" || citytext == "south africa") {
              URL = "https://api.openweathermap.org/data/2.5/weather?q=cape+town&appid=c9b40de482a05cf285c63aadfcc30543";
          }

          if (citytext == "South Korea" || citytext == "South korea" || citytext == "south Korea" || citytext == "south korea") {
              URL = "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=c9b40de482a05cf285c63aadfcc30543";
          }

          if (citytext == "North Korea" || citytext == "North korea" || citytext == "north Korea" || citytext == "north korea") {
              URL = "https://api.openweathermap.org/data/2.5/weather?q=Pyongyang&appid=c9b40de482a05cf285c63aadfcc30543";
          }


          if (citytext == "cairo" || citytext == "Cairo") {
              URL = "https://api.openweathermap.org/data/2.5/weather?q=" + citytext + ",egypt&appid=" + APIkey;
          }
          if (citytext == "gouna" || citytext == "Gouna") {
              URL = "https://api.openweathermap.org/data/2.5/weather?q=Hurghada&appid=" + APIkey;
          }

          var temp = "";
          var screenwidth = screen.width;

          fetch(URL)
              .then((resp) => resp.json())
              .then(function (data) {

                  let cod = data.cod;
                  if (cod == 200) {
                      //  clearInterval(imagevar);
                      mycod = 200;
                      var citytext2 = document.getElementById("city").value;
                      if (citytext2 != "") {
                          document.getElementById("descriptiondiv").style.backgroundColor = "rgba(0,0,0,0.45)";
                          document.getElementById("cityname").style.backgroundColor = "rgba(0,0,0,0.35)";



                          // --------------------------beginning of image part--------------------------
                          var citytext = document.getElementById("city").value;

                          var client_id = "QK5gSIzx6YOu3facyKYQNrPiT7wCDzrsgXqkT-xc3zk";
                          var URLimage = "";
                          if (screenwidth < 415) { //for phones
                              URLimage = "https://api.unsplash.com/search/photos?orientation=portrait&query=" + citytext + "&client_id=" + client_id;
                              fetch(URLimage)
                                  .then((resp) => resp.json())
                                  .then(function (data) {

                                      let myurl = data.results[0].urls.regular;
                                      document.body.style.background = "url('" + myurl + " ') no-repeat center center fixed";
                                      document.body.style.backgroundSize = "cover";

                                      var count = data.results.length;
                                      i = 1;
                                      clearInterval(imagevar);

                                      imagevar = setInterval(function () {
                                          if (i < count) {
                                              let myurl = data.results[i].urls.regular;
                                              document.body.style.background = "url('" + myurl + " ') no-repeat center center fixed";
                                              document.body.style.backgroundSize = "cover";
                                              i++;
                                          }
                                      }, 6500);


                                  })
                                  .catch(function (error) {
                                      console.log(error);
                                      clearInterval(imagevar);
                                  });
                          } else {
                              URLimage = "https://api.unsplash.com/search/photos?query=" + citytext + "&client_id=" + client_id;
                              fetch(URLimage)
                                  .then((resp) => resp.json())
                                  .then(function (data) {

                                      let myurl = data.results[0].urls.regular;
                                      document.body.style.background = "url('" + myurl + " ') no-repeat center center fixed";
                                      document.body.style.backgroundSize = "cover";

                                      var count = data.results.length;

                                      var i = 1;
                                      clearInterval(imagevar);

                                      imagevar = setInterval(function () {
                                          if (i < count) {
                                              let myurl = data.results[i].urls.regular;
                                              document.body.style.background = "url('" + myurl + " ') no-repeat center center fixed";
                                              document.body.style.backgroundSize = "cover";
                                              i++;
                                          }
                                      }, 6500);

                                  })
                                  .catch(function (error) {
                                      console.log(error);
                                      clearInterval(imagevar);
                                  });
                          }

                          //  end of image part---------------------------------------

                      }

                  } else {
                      audio.pause();
                  }
                  let wind = data.wind.speed;
                  let description = data.weather[0].description;
                  let humidity = data.main.humidity;
                  let temp = data.main.temp;
                  let tempc = temp - 273;
                  let timezone = data.timezone;
                  var mytimezone = timezone;

                  var screenwidth = screen.width;
                  let country = data.sys.country;
                  var citytext = document.getElementById("city").value;
                  if (citytext == "Egypt" || citytext == "egypt" || citytext == "taba" || citytext == "Taba" || citytext == "sinai" || citytext == "Sinai" || citytext == "Saint Catherine" || citytext == "Saint catherina" || citytext == "saint Catherina" || citytext == "saint catherina") {
                      country = "EG";
                  }
                  if (citytext == "Rome" || citytext == "rome" || citytext == "Venice" || citytext == "venice" || citytext == "italy" || citytext == "Italy") {
                      country = "IT";
                  }
                  if (citytext == "Dublin" || citytext == "dublin") {
                      country = "IE";
                  }
                  if (citytext == "Geneva" || citytext == "geneva") {
                      country = "CH";
                  }
                  if (citytext == "Morocco" || citytext == "morocco") {
                      country = "MA";
                  }
                  if (citytext == "Greece" || citytext == "greece") {
                      country = "GR";
                  }
                  if (citytext == "Italy" || citytext == "italy") {
                      country = "IT";
                  }
                  var countryname = getCountryName(country);
                  var citytext = document.getElementById("city").value;
                  if (citytext == "Egypt" || citytext == "egypt") {
                      timezone = 7200;
                  }
                  if (citytext == "Rome" || citytext == "rome" || citytext == "Italy" || citytext == "italy" || citytext == "brussels" || citytext == "Brussels" || citytext == "Belgium" || citytext == "belgium") {
                      timezone = 7200;
                  }
                  if (citytext == "Russia" || citytext == "russia") {
                      timezone = 10800;
                  }

                  let timezone2 = timezone / 3600;
                  var mytimezone2 = timezone2;
                  if (cod == 200) {
                      mycod = 200;
                      var arr = [];
                      for (var key in isoCountries) {
                          if (isoCountries.hasOwnProperty(key)) {
                              arr.push([key, isoCountries[key]]);
                          }
                      }
                      var x = arr.toString();
                      var countryname2 = citytext.toLocaleLowerCase();
                      var countryname3 = countryname2[0].toLocaleUpperCase();
                      var final = countryname3 + countryname2.substring(1);
                      var y = x.includes(final);

                      if (y == true) {
                          countryname = citytext;
                      }

                      if (citytext == "Rome" || citytext == "rome" || citytext == "como" || citytext == "Como" || citytext == "Venice" || citytext == "venice") {
                          if (screenwidth < 415) {
                              document.getElementById("cityname").innerHTML = citytext + ",<br> " + "Italy";
                          } else {
                              document.getElementById("cityname").innerHTML = citytext + ", " + "Italy";
                          }
                      } else {
                          if (y == true) {

                              URLcapital = "https://restcountries.eu/rest/v2/name/" + citytext;
                              if (citytext == "United States" || citytext == "United states" || citytext == "united States" || citytext == "united states" || citytext == "america" || citytext == "America") {
                                  URLcapital = "https://restcountries.eu/rest/v2/name/america";
                              }

                              fetch(URLcapital)
                                  .then((resp) => resp.json())
                                  .then(function (data) {
                                      let capital = data[0].capital;
                                      if (citytext == "United States" || citytext == "United states" || citytext == "united States" || citytext == "united states" || citytext == "america" || citytext == "America") {
                                          capital = data[1].capital;
                                      }
                                      if (screenwidth < 415) {
                                        console.log("citytext: ", citytext, ", countryname: ", countryname, ", capital: ", capital);
                                        document.getElementById("cityname").innerHTML = capital + ",<br> " + citytext;
                                      } else {
                                        console.log("citytext: ", citytext, ", countryname: ", countryname, ", capital: ", capital);
                                        document.getElementById("cityname").innerHTML = capital + ", " + citytext;
                                      }

                                  })
                                  .catch(function (error) {
                                      console.log(error);
                                      clearInterval(imagevar);
                                  });

                          } else {
                              if (screenwidth < 415) {
                                  document.getElementById("cityname").innerHTML = citytext + ",<br> " + countryname;
                              } else {
                                  document.getElementById("cityname").innerHTML = citytext + ", " + countryname;
                              }
                          }
                      }

                      document.getElementById("weather").innerHTML = Math.trunc(temp - 273) + "&#8451";
                      document.getElementById("pressure").innerHTML = "Humidity: " + humidity;
                      document.getElementById("wind").innerHTML = "Wind Speed: " + wind;
                      document.getElementById("description").innerHTML = description;

                      document.getElementById("time").innerHTML = calcTime(citytext, mytimezone2);
                  } else {
                      //  window.alert("Please enter a valid city or country");
                  }

                  // ---------------------------begin for song--------------------------
                  // Napster API:


                  var URLsong = "https://api.napster.com/v2.2/search/verbose?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=" + citytext + " music" + "&type=track";
                  fetch(URLsong)
                      .then(result => result.json())
                      .then(data => {
                          let song;
                          if (data.search.data.tracks[0] != "undefined" && data.search.data.tracks[0] != null) {
                              console.log("defined the songggggg");
                              song = data.search.data.tracks[0].previewURL;
                          }


                          if (citytext == "new york" || citytext == "New York" || citytext == "New york" || citytext == "new York") {
                              song = "https://cdns-preview-9.dzcdn.net//stream//c-915cab471c0edf568401fd8b875d2f3a-6.mp3";
                          } else if (citytext == "cairo" || citytext == "Cairo" || citytext == "egypt" || citytext == "Egypt") {
                              song = "https://cdns-preview-3.dzcdn.net//stream//c-3b3772135b5494cc37d60807f6b4b792-3.mp3";
                          } else if (citytext == "France" || citytext == "france" || citytext == "Paris" || citytext == "paris") {
                              song = "https://listen.hs.llnwd.net/g3/prvw/0/0/6/6/6/2085366600.mp3";
                          } else if (citytext == "cuba" || citytext == "Cuba" || citytext == "havana" || citytext == "Havana") {
                              song = "https://cdns-preview-7.dzcdn.net//stream//c-7320500dc9a22fb26efd85d1f8433b82-8.mp3";
                          }
                          else if (citytext == "canberra" || citytext == "Canberra" || citytext == "Australia" || citytext == "australia") {
                              song = "https://cdns-preview-4.dzcdn.net//stream//c-4e5b27070b5ce9fc36e4dc89e1b47bde-2.mp3";
                          } else if (citytext == "barcelona" || citytext == "Barcelona") {
                              song = "https://listen.hs.llnwd.net/g3/prvw/3/4/0/6/9/2420996043.mp3";
                          } else if (citytext == "Gouna" || citytext == "gouna" || citytext == "Hurghada" || citytext == "hurghada") {
                              song = "https://cdns-preview-f.dzcdn.net//stream//c-f967d16ad9f89e9dade97cdfc9d2d167-6.mp3";
                          }
                          if (song != null) {
                              document.getElementById("src1").setAttribute("src", song);
                          }
                          document.getElementById("myAudio").innerHTML = document.getElementById("myAudio").innerHTML;
                          document.getElementById("myAudio").innerHTML.reload;
                          document.getElementById("src1").innerHTML.reload;

                          if (citytext != "") {
                              playAudio(song);
                          }
                      });


                  //  ---------------------------end for song--------------------------

                  // -----------------Corona part-----------------
                  console.log("y is : " + y);
                  console.log("citytext : " + citytext);
                  console.log("countryname : " + countryname);

                  var URLcorona = "";
                  if (y == true) {
                      URLcorona = "https://api.covid19api.com/total/dayone/country/" + citytext;
                  } else {
                      console.log("you entered a city not country");
                      URLcorona = "https://api.covid19api.com/total/dayone/country/" + countryname;
                  }

                  if (citytext == "america" || citytext == "America" || citytext == "USA" || countryname == "United states" || countryname == "united states" || countryname == "United States" || citytext == "usa" || citytext == "USA" || citytext == "Usa" || citytext == "United states") {
                      URLcorona = "https://api.covid19api.com/total/dayone/country/us";
                  }
                  console.log("urlcorona :" + URLcorona);

                  fetch(URLcorona)
                      .then((resp) => resp.json())
                      .then(function (data) {
                          let activecases = data[data.length - 1].Active;
                          console.log("active corona: " + activecases);
                          let code = data.code;
                          if (y == true) {
                              document.getElementById("corona").innerHTML = "Active Covid-19 Cases in " + citytext[0].toLocaleUpperCase() + citytext.substring(1) + ": " + Math.ceil(activecases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                          } else {
                              document.getElementById("corona").innerHTML = "Active Covid-19 Cases in " + countryname + ": " + Math.ceil(activecases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
                          }

                      })
                      .catch(function (error) {
                          clearInterval(imagevar);
                          document.getElementById("corona").innerHTML = "";
                          console.log(error);
                      });

                  //-------------------------end of corona part---------------------

                  //-----------------population part--------------------------

                  if (y == true) {
                      var URLpopulation = "https://restcountries-v1.p.rapidapi.com/name/" + citytext;
                  } else {
                      var URLpopulation = "https://restcountries-v1.p.rapidapi.com/name/" + countryname;
                  }

                  fetch(URLpopulation, {
                          "method": "GET",
                          "headers": {
                              "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
                          }
                      }).then((resp) => resp.json())
                      .then(function (data) {
                          let name = data[0].name;
                          let population = data[0].population;
                          let population2 = population + population * 0.1;
                          if (countryname == "china" || countryname == "China") {
                              document.getElementById("pop").innerHTML = "Country Population: 1,439,323,776";
                          } else if (countryname == "india" || countryname == "India") {
                              document.getElementById("pop").innerHTML = "Country Population: 1,439,323,776";
                          } else if (countryname == "Egypt" || countryname == "egypt") {
                              document.getElementById("pop").innerHTML = "Country Population: 102,320,095";
                          } else if (countryname == "peru" || countryname == "Peru" || citytext == "peru" || citytext == "Peru") {
                              document.getElementById("pop").innerHTML = "Country Population: 32,510,453";
                          } else if (y == false) {
                              if (countryname == "United states" || countryname == "united states" || countryname == "United States" || citytext == "usa" || citytext == "USA" || citytext == "Usa" || citytext == "United states") {
                                  document.getElementById("pop").innerHTML = "Country Population: 331,002,651";
                              } else {
                                  document.getElementById("pop").innerHTML = "Country Population: " + Math.ceil(population2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                              }
                          } else {
                              document.getElementById("pop").innerHTML = "Country Population: " + Math.ceil(population2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                          }
                      })
                      .catch(function (error) {
                          clearInterval(imagevar);
                          console.log(error);
                      });

                  // --------------------------end of population-------------------

                  //  updateTime();

              })
              .catch(function (error) {
                  console.log(error);
                  clearInterval(imagevar);
                  //  commented because populaion api is not working any more
                  // if(citytext != ""){
                  // window.alert("Please enter a valid city or country");
                  // }
              });

      }

      function getHistory() {
          window.location = "/breeze/index3.php";
      }


      function updateTime() {
          if (mycod == 200) {
              console.log("function called");
              var curtime = document.getElementById("time").innerHTML;
              curdate = new Date(curtime);
              curdate.setSeconds(curdate.getSeconds() + 1);
              document.getElementById("time").innerHTML = curdate.toLocaleString();
          }
      }


      function calcTime(city, offset) {
          d = new Date();
          utc = d.getTime() + (d.getTimezoneOffset() * 60000);
          nd = new Date(utc + (3600000 * offset));
          return nd.toLocaleString();
      }

      var isoCountries = {
          'Brt': 'Britain',
          'Eng': 'England',
          'Egypt': 'Egypt',
          'AF': 'Afghanistan',
          'AX': 'Aland islands',
          'AL': 'Albania',
          'DZ': 'Algeria',
          'AS': 'American samoa',
          'AD': 'Andorra',
          'AO': 'Angola',
          'AI': 'Anguilla',
          'AQ': 'Antarctica',
          'AG': 'Antigua And Barbuda',
          'AR': 'Argentina',
          'AM': 'Armenia',
          'AW': 'Aruba',
          'AU': 'Australia',
          'AT': 'Austria',
          'AZ': 'Azerbaijan',
          'BS': 'Bahamas',
          'BH': 'Bahrain',
          'BD': 'Bangladesh',
          'BB': 'Barbados',
          'BY': 'Belarus',
          'BE': 'Belgium',
          'BZ': 'Belize',
          'BJ': 'Benin',
          'BM': 'Bermuda',
          'BT': 'Bhutan',
          'BO': 'Bolivia',
          'BA': 'Bosnia And Herzegovina',
          'BW': 'Botswana',
          'BV': 'Bouvet island',
          'BR': 'Brazil',
          'IO': 'British indian Ocean Territory',
          'BN': 'Brunei darussalam',
          'BG': 'Bulgaria',
          'BF': 'Burkina faso',
          'BI': 'Burundi',
          'KH': 'Cambodia',
          'CM': 'Cameroon',
          'CA': 'Canada',
          'CV': 'Cape verde',
          'KY': 'Cayman Islands',
          'CF': 'Central african republic',
          'TD': 'Chad',
          'CL': 'Chile',
          'CN': 'China',
          'CX': 'Christmas island',
          'CO': 'Colombia',
          'KM': 'Comoros',
          'CG': 'Congo',
          'CD': 'Congo, democratic republic',
          'CK': 'Cook Islands',
          'CR': 'Costa Rica',
          'CI': 'Cote D\'Ivoire',
          'HR': 'Croatia',
          'CU': 'Cuba',
          'CY': 'Cyprus',
          'CZ': 'Czech republic',
          'DK': 'Denmark',
          'DJ': 'Djibouti',
          'DM': 'Dominica',
          'DO': 'Dominican republic',
          'EC': 'Ecuador',
          'EG': 'Egypt',
          'SV': 'El salvador',
          'GQ': 'Equatorial guinea',
          'ER': 'Eritrea',
          'EE': 'Estonia',
          'ET': 'Ethiopia',
          'FK': 'Falkland Islands',
          'FO': 'Faroe Islands',
          'FJ': 'Fiji',
          'FI': 'Finland',
          'FR': 'France',
          'GF': 'French guiana',
          'PF': 'French polynesia',
          'TF': 'French southern Territories',
          'GA': 'Gabon',
          'GM': 'Gambia',
          'GE': 'Georgia',
          'DE': 'Germany',
          'GH': 'Ghana',
          'GI': 'Gibraltar',
          'GR': 'Greece',
          'GL': 'Greenland',
          'GD': 'Grenada',
          'GP': 'Guadeloupe',
          'GU': 'Guam',
          'GT': 'Guatemala',
          'GG': 'Guernsey',
          'GN': 'Guinea',
          'GW': 'Guinea-bissau',
          'GY': 'Guyana',
          'HT': 'Haiti',
          'VA': 'Holy See',
          'HN': 'Honduras',
          'HK': 'Hong Kong',
          'HU': 'Hungary',
          'IS': 'Iceland',
          'IN': 'India',
          'ID': 'Indonesia',
          'IR': 'Iran',
          'IQ': 'Iraq',
          'IE': 'Ireland',
          'IM': 'Isle Of Man',
          'IL': 'Israel',
          'IT': 'Italy',
          'JM': 'Jamaica',
          'JP': 'Japan',
          'JE': 'Jersey',
          'JO': 'Jordan',
          'KZ': 'Kazakhstan',
          'KE': 'Kenya',
          'KI': 'Kiribati',
          'KR': 'Korea',
          'KW': 'Kuwait',
          'KG': 'Kyrgyzstan',
          'LA': 'Lao People',
          'LV': 'Latvia',
          'LB': 'Lebanon',
          'LS': 'Lesotho',
          'LR': 'Liberia',
          'LY': 'Libyan Arab Jamahiriya',
          'LI': 'Liechtenstein',
          'LT': 'Lithuania',
          'LU': 'Luxembourg',
          'MO': 'Macao',
          'MK': 'Macedonia',
          'MG': 'Madagascar',
          'MW': 'Malawi',
          'MY': 'Malaysia',
          'MV': 'Maldives',
          'ML': 'Mali',
          'MT': 'Malta',
          'MH': 'Marshall Islands',
          'MQ': 'Martinique',
          'MR': 'Mauritania',
          'MU': 'Mauritius',
          'YT': 'Mayotte',
          'MX': 'Mexico',
          'FM': 'Micronesia, Federated States Of',
          'MD': 'Moldova',
          'MC': 'Monaco',
          'MN': 'Mongolia',
          'ME': 'Montenegro',
          'MS': 'Montserrat',
          'MA': 'Morocco',
          'MZ': 'Mozambique',
          'MM': 'Myanmar',
          'NA': 'Namibia',
          'NR': 'Nauru',
          'NP': 'Nepal',
          'NL': 'Netherlands',
          'AN': 'Netherlands Antilles',
          'NC': 'New caledonia',
          'NZ': 'New zealand',
          'NI': 'Nicaragua',
          'NE': 'Niger',
          'NG': 'Nigeria',
          'NU': 'Niue',
          'NF': 'Norfolk Island',
          'MP': 'Northern Mariana Islands',
          'NO': 'Norway',
          'OM': 'Oman',
          'PK': 'Pakistan',
          'PW': 'Palau',
          'PS': 'Palestine',
          'PA': 'Panama',
          'PG': 'Papua New Guinea',
          'PY': 'Paraguay',
          'PE': 'Peru',
          'PH': 'Philippines',
          'PN': 'Pitcairn',
          'PL': 'Poland',
          'PT': 'Portugal',
          'PR': 'Puerto rico',
          'QA': 'Qatar',
          'RE': 'Reunion',
          'RO': 'Romania',
          'RU': 'Russian federation',
          'RW': 'Rwanda',
          'BL': 'Saint Barthelemy',
          'SH': 'Saint Helena',
          'KN': 'Saint Kitts And Nevis',
          'LC': 'Saint Lucia',
          'MF': 'Saint Martin',
          'PM': 'Saint Pierre And Miquelon',
          'VC': 'Saint Vincent And Grenadines',
          'WS': 'Samoa',
          'SM': 'San Marino',
          'ST': 'Sao Tome And Principe',
          'SA': 'Saudi arabia',
          'SN': 'Senegal',
          'RS': 'Serbia',
          'SC': 'Seychelles',
          'SL': 'Sierra Leone',
          'SG': 'Singapore',
          'SK': 'Slovakia',
          'SI': 'Slovenia',
          'SB': 'Solomon islands',
          'SO': 'Somalia',
          'ZA': 'South africa',
          'GS': 'South Georgia And Sandwich Isl.',
          'ES': 'Spain',
          'LK': 'Sri lanka',
          'SD': 'Sudan',
          'SR': 'Suriname',
          'SJ': 'Svalbard And Jan Mayen',
          'SZ': 'Swaziland',
          'SE': 'Sweden',
          'CH': 'Switzerland',
          'SY': 'Syrian Arab Republic',
          'TW': 'Taiwan',
          'TJ': 'Tajikistan',
          'TZ': 'Tanzania',
          'TH': 'Thailand',
          'TL': 'Timor-Leste',
          'TG': 'Togo',
          'TK': 'Tokelau',
          'TO': 'Tonga',
          'TT': 'Trinidad And Tobago',
          'TN': 'Tunisia',
          'TR': 'Turkey',
          'TM': 'Turkmenistan',
          'TC': 'Turks And Caicos Islands',
          'TV': 'Tuvalu',
          'UG': 'Uganda',
          'UA': 'Ukraine',
          'AE': 'United arab emirates',
          'GB': 'United kingdom',
          'US': 'United states',
          'UM': 'United states outlying islands',
          'UY': 'Uruguay',
          'UZ': 'Uzbekistan',
          'VU': 'Vanuatu',
          'VE': 'Venezuela',
          'VN': 'Viet nam',
          'VG': 'Virgin Islands, British',
          'VI': 'Virgin Islands, U.S.',
          'WF': 'Wallis And Futuna',
          'EH': 'Western sahara',
          'YE': 'Yemen',
          'ZM': 'Zambia',
          'ZW': 'Zimbabwe'
      };

      function getCountryName(countryCode) {
          if (isoCountries.hasOwnProperty(countryCode)) {
              return isoCountries[countryCode];
          } else {
              return countryCode;
          }

      }




      function Interval(fn, time) {
          var timer = false;
          this.start = function () {
              if (!this.isRunning())
                  timer = setInterval(fn, time);
          };
          this.stop = function () {
              clearInterval(timer);
              timer = false;
          };
          this.isRunning = function () {
              return timer !== false;
          };
      }



      document.getElementById("myAudio").preload = "auto";

      function playAudio(song) {
          //   if(imagevar){
          // clearInterval(imagevar);
          // console.log("cleared imagevar");
          //   }

          document.getElementById("myAudio").preload = "auto";

          var x = document.getElementById("myAudio");
          //   x.pause();

          // Audio file
          var src = song;
          // Initialize Aduio
          // var audio = new Audio();
          var audio = document.getElementById("myAudio");
          var playPromise;

          audio.src = src;

          playPromise = audio.play();

          if (playPromise) {
              playPromise.then(() => {
                  // Audio Loading Successful
                  // Audio playback takes time
                  // setTimeout(() => {
                  //     // Follow up operation
                  //     console.log("done.");
                  // }, 30000); // audio.duration is the length of the audio in seconds.


              }).catch((e) => {
                  // Audio loading failure
              });
          }


      }


      function playAudioOld(song) {
          //   pauseAudio();
          x = document.getElementById("myAudio");
          document.getElementById("myAudio").preload = "auto";

          x.pause();
          x.removeAttribute("src");

          setTimeout(function () {

              var att = document.createAttribute("src");
              att.value = song;
              x.setAttributeNode(att);

              x.play();

          }, 1000);


      }

      function pauseAudio() {
          x.pause();
      }


      // ----------------for autocomplete-----------------------

      function autocomplete(inp, arr) {
          /*the autocomplete function takes two arguments,
          the text field element and an array of possible autocompleted values:*/
          var currentFocus;
          /*execute a function when someone writes in the text field:*/
          inp.addEventListener("input", function (e) {
              var a, b, i, val = this.value;
              /*close any already open lists of autocompleted values*/
              closeAllLists();
              if (!val) {
                  return false;
              }
              currentFocus = -1;
              /*create a DIV element that will contain the items (values):*/
              a = document.createElement("DIV");
              a.setAttribute("id", this.id + "autocomplete-list");
              a.setAttribute("class", "autocomplete-items");

              var screenwidth = screen.width;
              // if(screenwidth<415){
              a.setAttribute("onclick", "getWeather2()");
              // }
              /*append the DIV element as a child of the autocomplete container:*/
              this.parentNode.appendChild(a);
              /*for each item in the array...*/
              counter = 0;
              for (i = 0; i < arr.length; i++) {
                  /*check if the item starts with the same letters as the text field value:*/
                  if (counter < 8) {
                      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                          counter++;
                          /*create a DIV element for each matching element:*/
                          b = document.createElement("DIV");
                          /*make the matching letters bold:*/
                          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                          b.innerHTML += arr[i].substr(val.length);
                          /*insert a input field that will hold the current array item's value:*/
                          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                          /*execute a function when someone clicks on the item value (DIV element):*/
                          b.addEventListener("click", function (e) {
                              /*insert the value for the autocomplete text field:*/
                              inp.value = this.getElementsByTagName("input")[0].value;
                              /*close the list of autocompleted values,
                              (or any other open lists of autocompleted values:*/
                              closeAllLists();
                          });
                          a.appendChild(b);
                      }
                  }
              }
          });
          /*execute a function presses a key on the keyboard:*/
          inp.addEventListener("keydown", function (e) {
              var x = document.getElementById(this.id + "autocomplete-list");
              if (x) x = x.getElementsByTagName("div");
              if (e.keyCode == 40) {
                  /*If the arrow DOWN key is pressed,
                  increase the currentFocus variable:*/
                  currentFocus++;
                  /*and and make the current item more visible:*/
                  addActive(x);
              } else if (e.keyCode == 38) { //up
                  /*If the arrow UP key is pressed,
                  decrease the currentFocus variable:*/
                  currentFocus--;
                  /*and and make the current item more visible:*/
                  addActive(x);
              } else if (e.keyCode == 13) {
                  /*If the ENTER key is pressed, prevent the form from being submitted,*/
                  e.preventDefault();
                  if (currentFocus > -1) {
                      /*and simulate a click on the "active" item:*/
                      if (x) x[currentFocus].click();
                  }
              }
          });

          function addActive(x) {
              /*a function to classify an item as "active":*/
              if (!x) return false;
              /*start by removing the "active" class on all items:*/
              removeActive(x);
              if (currentFocus >= x.length) currentFocus = 0;
              if (currentFocus < 0) currentFocus = (x.length - 1);
              /*add class "autocomplete-active":*/
              x[currentFocus].classList.add("autocomplete-active");
          }

          function removeActive(x) {
              /*a function to remove the "active" class from all autocomplete items:*/
              for (var i = 0; i < x.length; i++) {
                  x[i].classList.remove("autocomplete-active");
              }
          }

          function closeAllLists(elmnt) {
              /*close all autocomplete lists in the document,
              except the one passed as an argument:*/
              var x = document.getElementsByClassName("autocomplete-items");
              for (var i = 0; i < x.length; i++) {
                  if (elmnt != x[i] && elmnt != inp) {
                      x[i].parentNode.removeChild(x[i]);
                  }
              }
          }
          /*execute a function when someone clicks in the document:*/
          document.addEventListener("click", function (e) {
              closeAllLists(e.target);
          });
      }


      // /*An array containing all the country names in the world:*/
      var countries = ["Afghanistan", "Albania", "Algeria", "America", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Britain", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "England", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Moro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Vatican", "Venezuela", "Vietnam", "Wales", "Yemen", "Zambia", "Zimbabwe"

          ,
          "Cairo", "California", "Port Said", "Ismailia", "Luxor", "Saint Catherine", "Sinai", "Taba", "Aswan", "Giza", "Asyut", "Suez", "Faiyum", "Tanta", "Minya", "Banha", "Qalyub", "Marsa Alam", "Dahab", "Kenitra", "Korea", "Fiorentina", "Gouna", "Damascus", "Algiers", "Meknes", "Tangier", "Delhi", "New Delhi", "Jeddah", "Beirut", "Riyadh", "Jaipur", "Islamabad", "Dammam", "Mecca", "Taif", "Tabuk", "Al Khubar", "Medina", "Hurghada", "Sharm El Sheikh", "Bali", "Yogyakarta", "Jakarta", "Surabaya", "Batu", "Malang", "A Coruña", "Aachen", "Aarhus", "Abbeville", "Aberdeen", "Abu Dhabi", "Acapulco", "Adelaide", "Adelboden", "Agadir", "Agde", "Agen", "Agios Nikolaos", "Agrigento", "Agropoli", "Aigues-Mortes", "Aix-en-Provence", "Lima", "Aix-les-Bains", "Ajaccio", "Ajman", "Akron", "Al Ain", "Alanya", "Albacete", "Albany", "Albenga", "Albi", "Albufeira", "Albuquerque", "Alcudia", "Alessandria", "Ålesund", "Alexandria", "Algeciras", "Alghero", "Alicante", "Alkmaar", "Alpe d'Huez", "Alta Badia", "Altea", "Amalfi", "Amarillo", "Amersfoort", "Amiens", "Amsterdam", "Anaheim", "Anchorage", "Ancona", "Andalo", "Andermatt", "Andria", "Angers", "Ankara", "Ann Arbor", "Annapolis", "Annecy", "Antalya", "Antibes", "Antwerp", "Anzio", "Ao Nang", "Aosta", "Appleton", "Aracaju", "Arcachon", "Arenzano", "Arezzo", "Argostoli", "Arica", "Arles", "Arlington", "Arlington", "Armagh", "Arnhem", "Arosa", "Arras", "Arrecife", "Artà", "Ascoli Piceno", "Ashdod", "Ashkelon", "Aspen", "Asti", "Athens", "Athlone", "Atlanta", "Atlantic City", "Auckland", "Augsburg", "Augusta", "Augusta", "Aurora", "Aurora", "Austin", "Auxerre", "Aveiro", "Avellino", "Avignon", "Avoriaz", "Axamer Lizum", "Ayia Napa", "Bad Gastein", "Bad Hofgastein", "Baden", "Baiona", "Bakersfield", "Baltimore", "Bandar Seri Begawan", "Bandol", "Bangkok", "Bangor", "Bar", "Barcelona", "Bari", "Barletta", "Barstow", "Basel", "Bastia", "Bath", "Baton Rouge", "Batumi", "Bayonne", "Beaulieu-sur-Mer", "Beersheba", "Beijing", "Belfast", "Belfort", "Belgrade", "Belize City", "Belluno", "Belmopan", "Belo Horizonte", "Bemidji", "Benalmadena", "Bendigo", "Benevento", "Benicàssim", "Benidorm", "Bergamo", "Bergen", "Bergerac", "Berkeley", "Berlin", "Bern", "Besançon", "Beverly Hills", "Béziers", "Biarritz", "Biel/Bienne", "Bielefeld", "Biella", "Bilbao", "Billings", "Birmingham", "Birmingham", "Bismarck", "Blanes", "Bled", "Blois", "Blumenau", "Boca Chica", "Boca Raton", "Bochum", "Bodrum", "Boise", "Bologna", "Bolzano", "Bonifacio", "Bonn", "Bordeaux", "Bordighera", "Bormio", "Boston", "Boulder", "Boulogne-sur-Mer", "Bourges", "Boynton Beach", "Bradenton", "Bradford", "Braga", "Brampton", "Brasilia", "Bratislava", "Braunschweig", "Breda", "Bregenz", "Brela", "Bremen", "Bremerhaven", "Brescia", "Brest", "Brighton", "Brindisi", "Brisbane", "Bristol", "Brixen", "Brixental", "Brno", "Brownsville", "Bruges", "Brussels", "Bucharest", "Budapest", "Budva", "Buenos Aires", "Buffalo", "Burgas", "Cabo San Lucas", "Cádiz", "Caen", "Cagliari", "Cagnes-sur-Mer", "Cairns", "Cala Bona", "Cala d'Or", "Cala Millor", "Cala Ratjada", "Calais", "Calella", "Calgary", "Caloundra", "Calp", "Caltanissetta", "Calvi", "Cambridge", "Cambrils", "Campinas", "Campobasso", "Can Picafort", "Canazei", "Canberra", "Cancun", "Cannes", "Canterbury", "Canyamel", "Capdepera", "Cape Canaveral", "Cape Coral", "Cape May", "Cape Town", "Carbonia", "Carcassonne", "Cardiff", "Carlisle", "Carlsbad", "Carpi", "Carpinteria", "Carrara", "Carson City", "Cartagena", "Casablanca", "Caserta", "Casper", "Cassis", "Castelrotto", "Catania", "Catanzaro", "Caxias do Sul", "Cervinia", "Cesena", "?eský Krumlov", "Çe?me", "Chamonix", "Chandler", "Chania", "Charleroi", "Charleston", "Charleston", "Charlotte", "Charlottetown", "Chartres", "Chattanooga", "Chefchaouen", "Chelmsford", "Chemnitz", "Cherbourg", "Chesapeake", "Chester", "Cheyenne", "Chiang Mai", "Chiang Rai", "Chiavari", "Chicago", "Chieti", "Chioggia", "Chios", "Chonburi", "Christchurch", "Chula Vista", "Chur", "Cincinnati", "Ciutadella de Menorca", "Civitavecchia", "Clearwater", "Clermont-Ferrand", "Cleveland", "Cocoa Beach", "Coconut Creek", "Coimbra", "Collioure", "Colmar", "Cologne", "Colorado Springs", "Columbia", "Columbus", "Como", "Concepción", "Concord", "Conil de la Frontera", "Copenhagen", "Coral Springs", "Córdoba", "Córdoba", "Corfu", "Corinth", "Cork", "Corpus Christi", "Corralejo", "Cortina d'Ampezzo", "Cosenza", "Costa Adeje", "Courchevel", "Courmayeur", "Coventry", "Coyhaique", "Cozumel", "Crans-Montana", "Cremona", "Crotone", "Cuneo", "Da Nang", "Dallas", "Dana Point", "Darmstadt", "Darwin", "Daugavpils", "Davos", "Daytona Beach", "Deerfield Beach", "Del Mar", "Delft", "Delray Beach", "Denia", "Denver", "Derby", "Derry", "Des Moines", "Detroit", "Didim", "Dieppe", "Dijon", "Doha", "Dolomiti Superski", "Dorfgastein", "Dortmund", "Dover", "Dresden", "Dubai", "Dublin", "Dubrovnik", "Duisburg", "Duluth", "Dundalk", "Dundee", "Dunedin", "Dunkirk", "Durham", "Durham", "Dusseldorf", "Eau Claire", "Edinburgh", "Edmonton", "Eilat", "Eindhoven", "El Paso", "Elche", "Ellmau", "Elm", "Empuriabrava", "Encinitas", "Engelberg", "Enna", "Enschede", "Erfurt", "Erie", "Erlangen", "Esbjerg", "Espace Killy", "Essaouira", "Essen", "Estepona", "Eugene", "Exeter", "Faenza", "Falmouth", "Famagusta", "Fano", "Fargo", "Faro", "Fayetteville", "Fermo", "Fernandina Beach", "Ferrara", "Fes", "Fethiye", "Fez", "Fieberbrunn", "Filzmoos", "Finale Ligure", "Fiumicino", "Flagstaff", "Flaine", "Florence", "Foggia", "Folgarida", "Fontana", "Forlì", "Fort Collins", "Fort Lauderdale", "Fort Myers", "Fort Wayne", "Fort Worth", "Forte dei Marmi", "Foz do Iguaçu", "Frankfort", "Frankfurt am Main", "Fredericton", "Freeport", "Freiburg", "Fremont", "Fresno", "Fribourg", "Frosinone", "Fuengirola", "Fujairah", "Fukuoka", "Funchal", "Gainesville", "Galtür", "Galway", "Garden Grove", "Garland", "Gatineau", "Gdansk", "Gdynia", "Geelong", "Gelsenkirchen", "Geneva", "Genoa", "George Town", "Ghent", "Gijón", "Gilbert", "Girona", "Glasgow", "Glendale", "Glendale", "Gloucester", "Gold Coast", "Gorizia", "Dachstein-West", "Gothenburg", "Göttingen", "Granada", "Grand Prairie", "Grand Rapids", "Granville", "Grasse", "Graz", "Great Falls", "Green Bay", "Greensboro", "Grenoble", "Grindelwald", "Groningen", "Grossarl", "Grosseto", "Gstaad", "Guadalajara", "Guangzhou", "Guimarães", "Haarlem", "Haifa", "Halifax", "Halle", "Hamburg", "Hamilton", "Hampton", "Hangzhou", "Hannover", "Hanoi", "Harrisburg", "Hartford", "Hasselt", "Hat Yai", "Havana", "Heidelberg", "Heilbronn", "Heiligenblut", "Helena", "Helsinki", "Henderson", "Heraklion", "Herceg Novi", "Hereford", "Hermosa Beach", "Hervey Bay", "Hialeah", "Hinterglemm", "Hinterstoder", "Hiroshima", "Hoi An", "Hobart", "Ho Chi Minh City", "Hollywood", "Hong Kong", "Honolulu", "Horsens", "Houston", "Hua Hin", "Hue", "Huntington Beach", "Huntsville", "Hvar", "Hyères", "Ibiza", "Imola", "Imperia", "Inca", "Indianapolis", "Ingolstadt", "Innsbruck", "Interlaken", "Inverness", "Ioannina", "Irvine", "Irving", "Ischgl", "Isernia", "Islamorada", "Istanbul", "?zmir", "Izola", "Jackson", "Jacksonville", "Jefferson City", "Jena", "Jerez de la Frontera", "Jersey City", "Jerusalem", "Johannesburg", "Joinville", "Juiz de Fora", "Juneau", "Jupiter", "J?rmala", "Kalamata", "Kanchanaburi", "Kansas City", "Kansas City", "Kappl", "Kaprun", "Karlovy Vary", "Karlsruhe", "Kassel", "Kastoria", "Kaunas", "Kavala", "Kemer", "Key Largo", "Key West", "Khao Lak", "Kiel", "Kilkenny", "Kingston", "Kissimmee", "Kitzbühel", "Klagenfurt", "Klaip?da", "Knoxville", "Kobe", "Koblenz", "Kolding", "Komotini", "Koper", "Kos", "Košice", "Kotor", "Krabi", "Krakow", "Krefeld", "Kuah", "Kuala Lumpur", "Ku?adas?", "Kutná Hora", "Kyoto", "Kyrenia", "La Ciotat", "La Clusaz", "La Laguna", "La Maddalena", "La Manga", "La Plagne", "La Plata", "La Rochelle", "La Romana", "La Serena", "La Spezia", "La Thuile", "Laax", "Lagos", "Laguna Beach", "Lakeland", "Lamezia Terme", "Lancaster", "Lancaster", "Lansing", "L'Aquila", "Laredo", "Largo", "Larnaca", "Las Palmas", "Las Vegas", "Latina", "Lausanne", "Laval", "Le Havre", "Le Lavandou", "Le Mans", "Lecce", "Lecco", "Lech", "Leeds", "Legnano", "Leicester", "Leiden", "Leipzig", "Leogang", "Les Arcs", "Les Deux Alpes", "Les Gets", "Les Houches", "Les Menuires", "Leuven", "Lexington", "Liberec", "Liège", "Lienz", "Liep?ja", "Lille", "Limassol", "Limerick", "Limoges", "Lincoln", "Lincoln", "Lindos", "Linz", "Lisbon", "Lisburn", "Little Rock", "Liverpool", "Livigno", "Livorno", "Ljubljana", "Lloret de Mar", "Loano", "Locarno", "Lodi", "Lodz", "Logroño", "London", "London", "Londrina", "Long Beach", "Los Angeles", "Los Cabos", "Los Cristianos", "Louisville", "Lourdes", "Loutraki", "Louvain-la-Neuve", "Lubbock", "Lübeck", "Lublin", "Lucca", "Lucerne", "Lugano", "Lund", "Lyon", "Maastricht", "Macerata", "Madison", "Madonna di Campiglio", "Madrid", "Magaluf", "Magdeburg", "Mahón", "Mainz", "Makarska", "Malaga", "Malia", "Malibu", "Malmö", "Manacor", "Manchester", "Manhattan Beach", "Mannheim", "Manosque", "Mantua", "Mar del Plata", "Marathon", "Marbella", "Maria Alm", "Maribor", "Markham", "Marmaris", "Maroochydore", "Marrakesh", "Marsala", "Marseille", "Maspalomas", "Massa", "Matera", "Mayrhofen", "Mazara del Vallo", "Mechelen", "Megève", "Melbourne", "Melbourne", "Memphis", "Menton", "Merano", "Meribel", "Mérida", "Mesa", "Messina", "Mestre", "Metz", "Mexico City", "Miami", "Middelburg", "Midland", "Mijas", "Milan", "Millau", "Milwaukee", "Minneapolis", "Miramar", "Mississauga", "Moab", "Mobile", "Modena", "Modesto", "Modica", "Moena", "Mogi das Cruzes", "Mons", "Monte Rosa", "Montego Bay", "Montepulciano", "Monterey", "Montgomery", "Montpelier", "Montpellier", "Montreal", "Montreux", "Monza", "Moraira", "Moreno Valley", "Morzine", "Moscow", "Mountain View", "Mulhouse", "Munich", "Münster", "Murcia", "Murter", "Mykonos", "Mytilene", "Nafplio", "Nagoya", "Namur", "Nancy", "Nantes", "Napa", "Naples", "Naples", "Narbonne", "Narva", "Nashville", "Nassau", "Naxos", "Nazareth", "Negril", "Nelson", "Nerja", "Netanya", "Nevers", "New Haven", "New Orleans", "New Smyrna Beach", "New York", "Newark", "Newcastle", "Newcastle", "Newport", "Newport Beach", "Newport News", "Nha Trang", "Niagara Falls", "Nice", "Nicosia", "Nijmegen", "Nimes", "Niort", "Noosa Heads", "Norfolk", "North Las Vegas", "North Port", "Norwich", "Nottingham", "Novara", "Novigrad", "Nuoro", "Nürnberg", "Nyon", "Oakland", "Oaxaca", "Obergurgl", "Oberhausen", "Ocala", "Oceanside", "Ocho Rios", "Odense", "Odessa", "Ogden", "Oia", "Oklahoma City", "Olbia", "Oldenburg", "Olomouc", "Olympia", "Omaha", "Opatija", "Oristano", "Orlando", "Orléans", "Ortisei", "Osaka", "Oslo", "Osnabrück", "Ostrava", "Ottawa", "Oulu", "Overland Park", "Oviedo", "Oxford", "Oxnard", "Paderborn", "Padova", "Palanga", "Palavas-les-Flots", "Palermo", "Palm Bay", "Palm Beach", "Palma", "Hawai", "Palmetto", "Palo Alto", "Pamplona", "Panama City", "Paphos", "Paradiski", "Paralia", "Paris", "Parma", "Pärnu", "Pasadena", "Passo del Tonale", "Passo Rolle", "Patras", "Pattaya", "Pau", "Pavia", "Peguera", "Pembroke Pines", "Pensacola", "Perast", "Perpignan", "Perros-Guirec", "Perth", "Perugia", "Pesaro", "Pescara", "Pescasseroli", "Petah Tikva", "Peterborough", "Petrovac", "Pforzheim", "Phang Nga", "Phetchabun", "Philadelphia", "Phoenix", "Phuket City", "Piacenza", "Pierre", "Piraeus", "Piran", "Pisa", "Pistoia", "Pittsburgh", "Placencia", "Plano", "Playa Blanca", "Playa de las Américas", "Playa del Carmen", "Plovdiv", "Plymouth", "Plze?", "Podgorica", "Poitiers", "Pollença", "Pompano Beach", "Pontevedra", "Pordenone", "Pore?", "Port Charlotte", "Port St. Lucie", "Portimão", "Portland", "Portland", "Porto", "Porto Cervo", "Porto Cristo", "Porto Torres", "Portocolom", "Portofino", "Portorož", "Porto-Vecchio", "Portsmouth", "Portsmouth", "Positano", "Potenza", "Potsdam", "Poznan", "Pozzuoli", "Prague", "Praia da Rocha", "Prato", "Preston", "Pretoria", "Propriano", "Protaras", "Providence", "Provo", "Puerto de la Cruz", "Puerto Plata", "Puerto Rico de Gran Canaria", "Puerto Vallarta", "Pula", "Punta Arenas", "Punta Cana", "Punta Gorda", "Pyeongchang", "Quarteira", "Quebec", "Quimper", "Rabat", "Ragusa", "Railay Beach", "Raleigh", "Rancho Cucamonga", "Randers", "Rapallo", "Rapid City", "Ras al-Khaimah", "Ravello", "Ravenna", "Rayong", "Redding", "Redondo Beach", "Regensburg", "Reggio Calabria", "Reggio Emilia", "Regina", "Rehovot", "Reims", "Rennes", "Reno", "Rethymno", "Reus", "Reutlingen", "Reykjavik", "Rhodes", "Richmond", "Rieti", "Riga", "Rijeka", "Rimini", "Rio de Janeiro", "Riomaggiore", "Rishon LeZion", "Riverside", "Riviera Maya", "Roanoke", "Rochester", "Rochester", "Rodez", "Rome", "Rosario", "Roskilde", "Rostock", "Rotterdam", "Roubaix", "Rouen", "Rovigo", "Rovinj", "Sa Coma", "Saalbach", "Saarbrücken", "Saas-Fee", "Sacramento", "Saint Paul", "Saint Petersburg", "Saint-Brieuc", "Saint-Étienne", "Saint-Jean-Cap-Ferrat", "Saint-Malo", "Saint-Tropez", "Salamanca", "Salem", "Salem", "Salerno", "Salinas", "Salou", "Salt Lake City", "Salta", "Salvador", "Salzburg", "Samaná", "San Antonio", "San Bernardino", "San Clemente", "San Diego", "San Francisco", "San Jose", "San Juan", "San Mateo", "San Pedro", "San Pedro de Atacama", "San Sebastián", "Sanford", "Sanremo", "Sant Antoni de Portmany", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Cruz de Tenerife", "Santa Eulària des Riu", "Santa Fe", "Santa Margherita Ligure", "Santa Monica", "Santa Pola", "Santa Ponsa", "Santa Rosa", "Santander", "Santiago", "Santiago", "Santiago de Compostela", "Santo Domingo", "Sao Paulo", "Sapporo", "Sarasota", "Saskatoon", "Sassari", "Saumur", "Savannah", "Savona", "Schaffhausen", "Schladming", "Scottsdale", "Seal Beach", "Seattle", "Sedona", "Seefeld", "Segovia", "Seoul", "Serre Chevalier", "Sète", "Seville", "Shanghai", "Sharjah", "Sheffield", "Shenzhen", "Shreveport", "Šiauliai", "Šibenik", "Side", "Siegen", "Siena", "Singapore", "Sion", "Sioux Falls", "Sitges", "Skiathos", "Sofia", "Sölden", "Söll", "Soller", "Sondrio", "Sopot", "Sorocaba", "Sorrento", "Southampton", "Split", "Spokane", "Springfield", "Springfield", "Springfield", "Springfield", "St Albans", "St. Anton", "St. Augustine", "St. Gallen", "St. George", "St. John's", "St. Louis", "St. Moritz", "St. Petersburg", "Stavanger", "Stockholm", "Stockton", "Stoke-on-Trent", "Strasbourg", "Stuttgart", "Sukhothai", "Sunderland", "Sunnyvale", "Sunshine Coast", "Superior", "Surrey", "Sveti Stefan", "Swansea", "Sydney", "Syracuse", "Syracuse", "Szczecin", "Tacoma", "Tallahassee", "Tallinn", "Tampa", "Tampere", "Tamworth", "Tangier", "Taormina", "Taranto", "Tarifa", "Tarragona", "Tartu", "Tauplitz", "Tauranga", "Tavira", "Tbilisi", "Tel Aviv", "Temecula", "Tempe", "Teramo", "Terni", "The Hague", "Thessaloniki", "Tignes", "Tijuana", "Tilburg", "Tinos", "Tivat", "Tivoli", "Tokyo", "Toledo", "Toledo", "Toowoomba", "Topeka", "Toronto", "Torre del Greco", "Torre del Mar", "Torremolinos", "Torrevieja", "Toru?", "Tossa de Mar", "Toulon", "Toulouse", "Tours", "Townsville", "Trani", "Trapani", "Trento", "Trenton", "Treviso", "Trier", "Trieste", "Trogir", "Tromsø", "Trondheim", "Troy", "Troyes", "Tucson", "Tui", "Tulsa", "Tulum", "Turin", "Turku", "Twin Falls", "Udine", "Udon Thani", "Ulcinj", "Ulm", "Umag", "Uppsala", "Urbino", "Ushuaia", "Utrecht", "Val Thorens", "Valence", "Valencia", "Valladolid", "Valle Isarco", "Valletta", "Valparaíso", "Vancouver", "Vancouver", "Varazze", "Varese", "Varna", "Vaughan", "Vejle", "Venice", "Ventimiglia", "Ventspils", "Ventura", "Verbania", "Verbier", "Vercelli", "Vero Beach", "Verona", "Versailles", "Vevey", "Viareggio", "Vibo Valentia", "Viborg", "Vicenza", "Vichy", "Victoria", "Vienna", "Vigo", "Vilamoura", "Villach", "Villefranche-sur-Mer", "Vilnius", "Viña del Mar", "Virginia Beach", "Viterbo", "Vitoria-Gasteiz", "Volos", "Vrsar", "Wakefield", "Warsaw", "Warth", "Washington D.C.", "Waterford", "Wellington", "Wellington", "Wengen", "West Palm Beach", "Westendorf", "Westminster", "Weston", "Wichita", "Wiesbaden", "Wilmington", "Winchester", "Windsor", "Winnipeg", "Winston–Salem", "Winterthur", "Wolfsburg", "Wollongong", "Wolverhampton", "Worcester", "Worcester", "Wroclaw", "Wuppertal", "Würzburg", "Yakima", "Yokohama", "Yonkers", "York", "Yuma", "Zadar", "Zagreb", "Zakopane", "Zaragoza", "Zell am See", "Zell am Ziller", "Zermatt", "Zug", "Zurich"
      ];

      // /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
      autocomplete(document.getElementById("city"), countries);