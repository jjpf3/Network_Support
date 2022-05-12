
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=56081882220b1a7188246b1d819ab47a";

async function getlist(){

  try{
    let b = await fetch(apiUrl);
    return await b.json();
  }catch(error){
  console.log(error)

  }

}


async function renderCountries(){


  let users = await getlist();
  let html = "";

  users.forEach(user => {
    let htmlSegment = `<div class="country">
                        <td>${user.weather}</td>
                        <td>${user.city}</td>
                    </div>`;

                    html += htmlSegment;
    
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderCountries();
  