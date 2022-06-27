
let search = document.getElementById("cocktailSe");

async function newScript(val){

    

    let tableContent = "";


    let myTableBody = document.getElementById("tableapiBody");

    let newSearch = val.target.value;

    let url = "https:thecocktaildb.com/api/json/v1/1/search.php?s=" + newSearch;

    let newUrl = await fetch(url).then((response) => {
        return response.json();
    });

    let {drinks} = newUrl;

    drinks.forEach((value) => {

        tableContent += "<tr>"
        tableContent += `<td>${value.strDrink}</td><td>${value.strCategory}</td>`;

        tableContent += "</tr>"

        });
        
myTableBody.innerHTML = tableContent;

}

search.addEventListener('change',newScript);
