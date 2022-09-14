let text = document.querySelector(".text");
let btn = document.querySelector(".btn");

function func(){
    let a = "Хочу кошку!";
    text.innerHTML = a;
}
btn.onclick = func;