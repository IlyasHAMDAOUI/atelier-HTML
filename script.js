const button = document.querySelector("headerBottom")
const nav = document.querySelector("#headerBottomNav")
console.log(button)

button.addEventListener("click", function(){
console.log("tu as cliqué !")
nav.classList.toggle("is-open")
})