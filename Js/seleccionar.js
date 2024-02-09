const box1 = document.getElementById("box1");

const box2 = document.getElementById("box2");

const box3 = document.getElementById("box3");

const box4 = document.getElementById("box4");


const box5 = document.getElementById("box5");

const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");


let colorSelected = ""

box1.addEventListener("click", ()=>{
    console.log(window.getComputedStyle(box1).backgroundColor)
    colorSelected= window.getComputedStyle(box1).backgroundColor
})


box2.addEventListener("click", ()=>{
    console.log(window.getComputedStyle(box2).backgroundColor)
    colorSelected=window.getComputedStyle(box2).backgroundColor
})

box3.addEventListener("click", ()=>{
    console.log(window.getComputedStyle(box3).backgroundColor)
    colorSelected= window.getComputedStyle(box3).backgroundColor
})


box4.addEventListener("click", ()=>{
    console.log(window.getComputedStyle(box4).backgroundColor)
    colorSelected=window.getComputedStyle(box4).backgroundColor
})


box5.addEventListener("click", ()=>{
    box5.style.backgroundColor = colorSelected
})
box6.addEventListener("click", ()=>{
    box6.style.backgroundColor = colorSelected
})
box7.addEventListener("click", ()=>{
    box7.style.backgroundColor = colorSelected
})
box8.addEventListener("click", ()=>{
    box8.style.backgroundColor = colorSelected
})



