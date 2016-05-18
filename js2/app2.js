function convertendoKmParaMile() {
    var km = document.getElementById('number').value;
    var mil = km/1.6;
    document.getElementById("result").innerHTML = mil.toString() + "mil";
}