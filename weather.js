
function getXMLData(){

  var tempdata = [];
  var labels = [];
  var dayIndexToString = ["Søndag", "Mandag", "Tirsdag", "Onsdag",
                          "Torsdag", "Fredag", "Lørdag"];
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      xml = xhttp.responseXML;
      x = xml.getElementsByTagName("temperature");

      for (i = 0; i < 16; i++) {
        if (x[i].parentNode.localName == "time") {
          
          date = new Date(x[i].parentNode.attributes.from.nodeValue);
          temp = x[i].attributes.value.nodeValue;

          labels.push(dayIndexToString[date.getDay()] + " " + date.getHours());
          tempdata.push(temp);

        }
      }
    }
  };

  xhttp.open("GET", "forecast.xml", false);
  xhttp.send();

  return {temperatures: tempdata, labels: labels};
}

data = getXMLData()
console.log(data.t);
//console.log(data.keys());
console.log(data.length);

function createChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: data.labels,
          datasets: [{
              label: false,
              borderColor: 'rgb(200, 100, 0)',
              data: data.temperatures
          }]
      },
  
      // Configuration options go here
      options: {
        legend: {
          display: false
        }
      }
  });
}

createChart();