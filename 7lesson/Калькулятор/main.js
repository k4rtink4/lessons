 let btnPlus = document.querySelector(".plus");
 let btnMinus = document.querySelector(".minus");
 let btnMulti = document.querySelector(".multi");
 let btnDivide = document.querySelector(".divide");
 let text = document.querySelector(".result");

 function plus(){

  let num1 =  Number(document.querySelector(".num1").value);
  let num2 = Number(document.querySelector(".num2").value);
  let result = num1 + num2;
  text.innerHTML = result;

 }
btnPlus.onclick = plus;

function minus(){

  let num1 =  Number(document.querySelector(".num1").value);
  let num2 = Number(document.querySelector(".num2").value);
  let result = num1 - num2;
  text.innerHTML = result;

 }
btnMinus.onclick = minus;

function multi(){

  let num1 =  Number(document.querySelector(".num1").value);
  let num2 = Number(document.querySelector(".num2").value);
  let result = num1 * num2;
  text.innerHTML = result;

 }
btnMulti.onclick = multi;

function divide(){

  let num1 =  Number(document.querySelector(".num1").value);
  let num2 = Number(document.querySelector(".num2").value);
  let result = num1 / num2;
  text.innerHTML = result;

 }
btnDivide.onclick = divide;