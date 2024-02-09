const inputName = document.getElementById("fname");

const botonJugar = document.getElementById("jugar");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
let colorSelected = ""

box1.addEventListener("click", ()=>{
    console.log(window.getComputedStyle(box1).backgroundColor)
    colorSelected= window.getComputedStyle(box1).backgroundColor
})

box2.addEventListener("click", ()=>{
    box2.style.backgroundColor = colorSelected
})



botonJugar.addEventListener("click", ()=>{
    console.log(inputName.value);
    localStorage.setItem("nombreJugador", inputName.value) 

    if (inputName.value==="") {
        alert("Debes introducir un nombre")
    } else {
        localStorage.setItem("nombreJugador", inputName.value) 
        window.location.href="Seleccioncolor.html"
    }

})
