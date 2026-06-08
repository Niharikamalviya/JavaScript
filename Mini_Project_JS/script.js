const inputSlider = document.querySelector("[data-slider]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const lenghtDisplay = document.querySelector("[data-length]");
const copyBtn = document.querySelector("[data-Copy]");
const copiedData = document.querySelector("[data-copied]");
const dataSlider = document.querySelector("[data-slider]");
const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#Lowercase");
const numbersCheck = document.querySelector("#Numbers");
const symbolsCheck = document.querySelector("#Symbols");
const indicatorCircle = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generatePassword");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = "";
let passwardLength = 10;
let checkCount = 1;
// strength circle color to gray 