// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    txt = "";

    xml = xhttp.responseXML;
    x = xml.getElementsByTagName("temperature");
    for (i = 0; i < x.length; i++) {
      if (x[i].parentNode.localName == "time") {
        console.log(x[i])
        txt += x[i].parentNode.attributes.from.nodeValue + " ";
        txt += x[i].attributes.value.nodeValue + " ";
        txt += x[i].parentNode.attributes.to.nodeValue + "<br>";
      }
    }
    document.getElementById("weathertesting").innerHTML = txt; 

    }
};

xhttp.open("GET", "forecast.xml", true);
xhttp.send();

