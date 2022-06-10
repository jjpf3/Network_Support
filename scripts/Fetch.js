

async function loadIntoTable(url, table){
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const [city, currentConditions] = useState([]);

  const response = await fetch(url);
  const {city, currentConditions} = await response.json();

  console.log({city, currentConditions});

  //Clear the table

  tableHead.innerHTML = "<tr></tr>";
  tableBody.innerHTML = "";

  //Populate Headers
  const cityElement = document.createElement("th");
  cityElement.textContent = "Days";
  tableHead.querySelector("tr").appendChild(cityElement);
  const currentConditionsElement = document.createElement("th");
  currentConditionsElement.textContent = "Current conditions";
  tableHead.querySelector("tr").appendChild(currentConditionsElement);

  // Populate rows
  const row = document.createElement("tr");

  const addressElement = document.createElement("td");
  addressElement.textContent = days;

  const currentCondElem = document.createElement("td");
  currentCondElem.textContent = currentConditions.temp;

  row.appendChild(addressElement);
  row.appendChild(currentCondElem);

  tableBody.append(row);
}

loadIntoTable("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Southend-On-Sea?unitGroup=metric&key=TE5J47G72P3PUDUS8ZAQWTTUH&contentType=json", document.querySelector("table"));