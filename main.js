


let result = document.getElementById("result");

let keyAc = document.getElementById("ac").addEventListener('click', function () {result.innerHTML = "";});
let keyDivide = document.getElementById("divide").addEventListener('click', function () {result.innerHTML += "/";});
let keySeven = document.getElementById("seven").addEventListener('click', function () {result.innerHTML += "7";});
let keyEight = document.getElementById("eight").addEventListener('click', function () {result.innerHTML += "8";});
let keyNine = document.getElementById("nine").addEventListener('click', function () {result.innerHTML += "9";});
let keyMulti = document.getElementById("multi").addEventListener('click', function () {result.innerHTML += "*";});
let keyFour = document.getElementById("four").addEventListener('click', function () {result.innerHTML += "4";});
let keyFive = document.getElementById("five").addEventListener('click', function () {result.innerHTML += "5";});
let keySix = document.getElementById("six").addEventListener('click', function () {result.innerHTML += "6";});
let keyMinus = document.getElementById("minus").addEventListener('click', function () {result.innerHTML += "-";});
let keyOne = document.getElementById("one").addEventListener('click', function () {result.innerHTML += "1";});
let keyTwo = document.getElementById("two").addEventListener('click', function () {result.innerHTML += "2";});
let keyThree = document.getElementById("three").addEventListener('click', function () {result.innerHTML += "3";});
let keyPlus = document.getElementById("plus").addEventListener('click', function () {result.innerHTML += "+";});
let keySign = document.getElementById("sign").addEventListener('click', function () {result.innerHTML += "-";});
let keyZero = document.getElementById("zero").addEventListener('click', function () {result.innerHTML += "0";});
let keySeparator = document.getElementById("separator").addEventListener('click', function () {result.innerHTML += ".";});
let keyEqual = document.getElementById("equal").addEventListener('click', function () {result.innerHTML = eval(result.innerHTML);});


