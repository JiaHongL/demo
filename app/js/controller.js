console.log('hi');

var getData = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Json").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost:8080/info", true);
    xhttp.send();
}
