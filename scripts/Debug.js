

function searchTwo(val){

let search = val.target.value;

fetch("https:thecocktaildb.com/api/json/v1/1/search.php?s=" + search).then (response => console.log(response));

}
let test = document.getElementById("search");


test.addEventListener('change', searchTwo);