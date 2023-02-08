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

setInterval(updateTime,1000);