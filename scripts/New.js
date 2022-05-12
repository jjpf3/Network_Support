
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=56081882220b1a7188246b1d819ab47a";


    fetch(apiUrl)
    
    .then(response => response.json())
    .then(data => console.log(data));

