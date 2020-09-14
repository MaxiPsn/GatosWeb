"use strict"

var boton = document.querySelector(".btn");
var pq = document.querySelector("#porque");

boton.addEventListener('click', () =>{

    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
      
        var html = '<img src="' + data[0]["url"] + '">';
        let img = document.createElement('img');
        img.className = "image";
        console.log(img);
        img.src=data[0]["url"];
        document.getElementById("catcontainer").appendChild(img);
      });
    

});

pq.addEventListener('click', () =>{
  alert("No hay por que");
})
function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
          var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };
  
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
