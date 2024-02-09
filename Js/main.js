const inputName = document.getElementById("fname");

const botonJugar = document.getElementById("jugar");



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
