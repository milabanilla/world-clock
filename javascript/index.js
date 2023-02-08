//Los angeles
function updateTime(){
let losAngelesElement = document.querySelector("#los-angeles")
let losAngelesDateElement= losAngelesElement.querySelector(".date")
let losAngelesTimeElement= losAngelesElement.querySelector(".time")
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML= losAngelesTime.format("MMMM DD, YYYY ")
losAngelesTimeElement.innerHTML= losAngelesTime.format("h:mm:ss [<small>]A[</small>]")
//Tokyo
let tokyoElement = document.querySelector("#tokyo")
let tokyoDateElement= tokyoElement.querySelector(".date")
let tokyoTimeElement= tokyoElement.querySelector(".time")
let tokyoTime = moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML= tokyoTime.format("MMMM DD, YYYY ")
tokyoTimeElement.innerHTML= tokyoTime.format("h:mm:ss [<small>]A[</small>]")

//Puerto Rico
let puertoRicoElement = document.querySelector("#puertoRico")
let puertoRicoDateElement= puertoRicoElement.querySelector(".date")
let puertoRicoTimeElement= puertoRicoElement.querySelector(".time")
let puertoRicoTime = moment().tz("America/Puerto_Rico");
puertoRicoDateElement.innerHTML= puertoRicoTime.format("MMMM DD, YYYY ");
puertoRicoTimeElement.innerHTML= puertoRicoTime.format("h:mm:ss [<small>]A[</small>]");
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