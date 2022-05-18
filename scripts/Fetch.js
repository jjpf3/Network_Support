

async function loadIntoTable(url, table){
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch(url);
  const {address, currentConditions} = await response.json();

  console.log({address, currentConditions});

  //Clear the table

  tableHead.innerHTML = "<tr></tr>";
  tableBody.innerHTML = "";

  //Populate Headers

  for(const cityText of address){
    const cityElement = document.createElement("th");

    cityElement.textContent = cityText;
    tableHead.querySelector("tr").appendChild(cityElement);
  }
}

loadIntoTable("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Southend-On-Sea?unitGroup=metric&key=TE5J47G72P3PUDUS8ZAQWTTUH&contentType=json", document.querySelector("table"));
  

