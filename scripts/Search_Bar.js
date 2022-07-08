//Pulls the Search bar ID from HTML.
let search = document.getElementById("cocktailSe");
let ingArray = [];

let drinks;
let closeMod = document.getElementById("closeID");
let modal = document.getElementById("myModal")
let modalContent = document.getElementById("imgP");
let ingOne = document.getElementById("ing1");
let ingTwo = document.getElementById("ing2");
let ingThree = document.getElementById("ing3");
let ingFour = document.getElementById("ing4");
let ingFive = document.getElementById("ing5");
let ingSix = document.getElementById("ing6");
let ingSeven = document.getElementById("ing7");
let ingEight = document.getElementById("ing8");
let ingNine = document.getElementById("ing9");
let ingTen = document.getElementById("ing10");
let ingEleven = document.getElementById("ing11");
let ingTwelve = document.getElementById("ing12");
let ingThirteen = document.getElementById("ing13");
let ingFourteen = document.getElementById("ing14");
let ingFifthteen = document.getElementById("ing15");
let instructions = document.getElementById("instructions");
let drinkClass = document.getElementById("drinkClass");

//Creates a Fetch Async function to pull from the API.
async function newScript(val){
    let tableContent = "";


    //Pulls the Table body from out HTML.
    let myTableBody = document.getElementById("drinkBody");

    let newSearch = val.target.value;

    //Sets the url we are pulling the API from into a variable.
    let url = "https:thecocktaildb.com/api/json/v1/1/search.php?s=" + newSearch;

    let newUrl = await fetch(url).then((response) => {
        return response.json();
    });

    drinks = newUrl.drinks.filter(drink => drink !== null);

    drinks.forEach((value) => {

        tableContent += `<tr id="${value.idDrink}" type="button" onClick="appendIngredients(${value.idDrink})">`
        tableContent += `<td>${value.strDrink}</td><td>${value.strCategory}</td>`;
        tableContent += "</tr>"
    
    });

    


    myTableBody.innerHTML = tableContent;

    console.log(drinks);
    
}
function appendIngredients(drinkId) {
    let drink = drinks.find(d => parseInt(d.idDrink) === drinkId);

    
    if((drinkClass.innerText = `${drink.strDrink}`) == "null") {drinkClass.innerText = "";}
    if((ingOne.innerText = `${drink.strIngredient1}` + " | " + `${drink.strMeasure1}`) == "null | null") {ingOne.innerText = "";}
    if((ingTwo.innerText = `${drink.strIngredient2}` + " | " + `${drink.strMeasure2}`) == "null | null") {ingTwo.innerText = "" ;}
    if((ingThree.innerText = `${drink.strIngredient3}` + " | " + `${drink.strMeasure3}`) == "null | null") {ingThree.innerText = "" ;}
    if((ingFour.innerText = `${drink.strIngredient4}` + " | " + `${drink.strMeasure4}`) == "null | null") {ingFour.innerText = "" ;}
    if((ingFive.innerText = `${drink.strIngredient5}` + " | " + `${drink.strMeasure5}`) == "null | null") {ingFive.innerText = "" ;}
    if((ingSix.innerText = `${drink.strIngredient6}` + " | " + `${drink.strMeasure6}`) == "null | null") {ingSix.innerText = "" ;}
    if((ingSeven.innerText = `${drink.strIngredient7}` + " | " + `${drink.strMeasure7}`) == "null | null") {ingSeven.innerText = "" ;}
    if((ingEight.innerText = `${drink.strIngredient8}` + " | " + `${drink.strMeasure8}`) == "null | null") {ingEight.innerText = "" ;}
    if((ingNine.innerText = `${drink.strIngredient9}` + " | " + `${drink.strMeasure9}`) == "null | null") {ingNine.innerText = "" ;}
    if((ingTen.innerText = `${drink.strIngredient10}` + " | " + `${drink.strMeasure10}`) == "null | null") {ingTen.innerText = "" ;}
    if((ingEleven.innerText = `${drink.strIngredient11}` + " | " + `${drink.strMeasure11}`) == "null | null") {ingEleven.innerText = "" ;}
    if((ingTwelve.innerText = `${drink.strIngredient12}` + " | " + `${drink.strMeasure12}`) == "null | null") {ingTwelve.innerText = "" ;}
    if((ingThirteen.innerText = `${drink.strIngredient13}` + " | " + `${drink.strMeasure13}`) == "null | null") {ingThirteen.innerText = "";}
    if((ingFourteen.innerText = `${drink.strIngredient14}` + " | " + `${drink.strMeasure14}`) == "null | null")  {ingFourteen.innerText = "";}
    if((ingFifthteen.innerText = `${drink.strIngredient15}` + " | " + `${drink.strMeasure15}`) == "null | null") {ingFifthteen.innerText = "";}
    if((instructions.innerText = `${drink.strInstructions}`) == "null") {ingFifthteen.innerText = "";}

    modalContent.innerHTML += `<img src="${drink.strDrinkThumb}" class="imgClass"/>`;


    modal.style.display = "block";


}



function closeModal(){


    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


search.addEventListener('change',newScript);

