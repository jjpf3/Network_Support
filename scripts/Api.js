

async function searchTwo(val){



    let myTable = document.getElementById("tableapiBody");
    let tableContent = "";


    let search = val.target.value;

    let url = "https:thecocktaildb.com/api/json/v1/1/search.php?s=" + search;
    
    let newUrl = await fetch(url).then (response => response.json());

    let {drinks} = newUrl;

    console.log(drinks);


    drinks.forEach((value) => {
        tableContent += "<tr>"
        tableContent += `<td>${value.strDrink}</td><td>${value.strCategory}</td>`;
        tableContent += "</tr>"

        

            }
        )
    



myTable.innerHTML = tableContent;
}

    let test = document.getElementById("cocktailSe");
    
    
    test.addEventListener('change', searchTwo);

