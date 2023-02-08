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
}

function updateCity(event){
    let cityTimeZone = event.target.value;
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
`
}
setInterval(updateTime,1000);

let citiesSelectElement= document.querySelector("#city")
citiesSelectElement.addEventListener("change",updateCity)