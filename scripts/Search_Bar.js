//Pulls the Search bar ID from HTML.
let search = document.getElementById("cocktailSe");
//Creates a Fetch Async function to pull from the API.
async function newScript(val) {



    let tableContent = "";



    let origExp = "origExp";
    let newExp = "newExp";

    let medi = [];
    let expMedi = [];


    //Pulls the Table body from out HTML.
    let myTableBody = document.getElementById("tableapiBody");

    let newSearch = val.target.value;

    //Sets the url we are pulling the API from into a variable.
    let url = "https:thecocktaildb.com/api/json/v1/1/search.php?s=" + newSearch;

    let newUrl = await fetch(url).then((response) => {
        return response.json();
    });

    let { drinks } = newUrl;

    drinks.forEach((drink, index) => {
        let classID = origExp + index;
        let expClassID = newExp + index;

        let drinkRow = document.createElement("tr");

        drinkRow.addEventListener("click", event => {
            event.preventDefault();
            // if (newTest.style.display == "block") {
            //     newTest.style.display = "none";
            // } else {
            //     newTest.style.display = "block";
            // }
            console.log("Drink row pressed");
        });

        drinkRow.id = drink.strDrink;
        drinkRow.type = "button";

        drinkRow.innerHTML = `<td>${drink.strDrink}</td><td>${drink.strCategory}</td>`;

        let ingredientRow = `<tr id="${drink.strDrink}-${drink.strIngredient1}" type="button"><td>${drink.strMeasure1}</td>`;

        // tableContent += `< tr id = "${expClassID}" style = "display:none" > `
        // tableContent += `< td > ${drink.strIngredient1}</td > <td>${drink.strMeasure1}</td>`;
        // tableContent += "</tr>"

        // tableContent += `< tr id = "${expClassID}" style = "display:none" > `
        // tableContent += `< td > ${drink.strIngredient2}</td > <td>${drink.strMeasure2}</td>`;
        // tableContent += "</tr>"

        tableContent += drinkRow + ingredientRow;

        medi.push(classID.substring(7, 8));
        expMedi.push(expClassID.substring(6, 7));
    });


    myTableBody.innerHTML = tableContent;


    console.log(drinks);



    for (let i = 0; i < 100; i++) {

        let newTest = document.getElementById("newExp" + `${medi[i]} `);

        let test = document.getElementById("origExp" + `${medi[i]} `);

        test.addEventListener('click', event => {
            event.preventDefault();

            if (newTest.style.display == "block") {
                newTest.style.display = "none";
            } else {
                newTest.style.display = "block";
            }

            console.log(newTest);

        })
    }

}

search.addEventListener('change', newScript);
