// Your code here!
// Your code here!

var api="https://openweathermap.org/data/2.5/find?";
var lon = "156";
var lat = "185";
var apiKey = "&APPID=d719c01cf81b957caff18cdb3a02ffe2";
var units = "&units=metric";

var weather;
function setup() {
    createCanvas(400, 200);
    var url = api + city + apiKey + units;
    loadJSON(url, gotData);
}



function gotData(data) {
    weather = data;
}