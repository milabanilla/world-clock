//Los angeles

let losAngelesElement = document.querySelector("#los-angeles")
let losAngelesDateElement= losAngelesElement.querySelector(".date")
let losAngelesTimeElement= losAngelesElement.querySelector(".time")
losAngelesDateElement.innerHTML= moment().format("MMMM DD YYYY")
losAngelesTimeElement.innerHTML= moment().format("h:mm:ss")