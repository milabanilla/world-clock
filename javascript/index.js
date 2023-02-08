//Seoul
function updateTime(){
let seoulElement = document.querySelector("#seoul")
let seoulDateElement= seoulElement.querySelector(".date")
let seoulTimeElement= seoulElement.querySelector(".time")
let seoulTime = moment().tz("Asia/Seoul");
seoulDateElement.innerHTML= seoulTime.format("MMMM DD, YYYY ")
seoulTimeElement.innerHTML= seoulTime.format("h:mm:ss [<small>]A[</small>]")
//Tokyo
let tokyoElement = document.querySelector("#tokyo")
let tokyoDateElement= tokyoElement.querySelector(".date")
let tokyoTimeElement= tokyoElement.querySelector(".time")
let tokyoTime = moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML= tokyoTime.format("MMMM DD, YYYY ")
tokyoTimeElement.innerHTML= tokyoTime.format("h:mm:ss [<small>]A[</small>]")

//El_Salvador
let elSalvadorElement = document.querySelector("#elSalvador")
let elSalvadorDateElement= elSalvadorElement.querySelector(".date")
let elSalvadorTimeElement= elSalvadorElement.querySelector(".time")
let elSalvadorTime = moment().tz("America/El_Salvador");
elSalvadorDateElement.innerHTML= elSalvadorTime.format("MMMM DD, YYYY ");
elSalvadorTimeElement.innerHTML= elSalvadorTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === 'current'){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities")
    citiesElement.innerHTML = `  
    <div class="city">
    <div>
      <h2>${cityName} </h2>
      <div class="date">${cityTime.format("MMMM DD, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
    <a id="homepage" href="/">Back to homepage</a>
    
`
}
setInterval(updateTime,1000);

let citiesSelectElement= document.querySelector("#city")
citiesSelectElement.addEventListener("change",updateCity)