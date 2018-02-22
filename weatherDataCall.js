//this is a module file
module.exports = {
  weatherData: function() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var weather = JSON.parse(this.responseText);
        return weather;
      }
    }
    xhttp.open("GET","https://api.darksky.net/forecast/355c9574914c83b28623931d0c693e32/50.4452,104.6189?exclude=currently,minutely,daily,alerts,flags",true);

    xhttp.send();
  }
}
