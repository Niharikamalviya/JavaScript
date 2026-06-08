const inputSlider = document.querySelector("[data-slider]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const lengthDisplay = document.querySelector("[data-length]");
const copyBtn = document.querySelector("[data-Copy]");
const copiedData = document.querySelector("[data-copied]");
const dataSlider = document.querySelector("[data-slider]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#Lowercase");
const numbersCheck = document.querySelector("#Numbers");
const symbolsCheck = document.querySelector("#Symbols");
const indicatorCircle = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generatePassword");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_+=-{}|[]\:;"<,.>?/'

let password = "";
let passwardLength = 10;
let checkCount = 1;
handleSlider();
// strength circle color to gray 


// set passwarLength
function handleSlider() {
    inputSlider.value = passwardLength;
    lengthDisplay.innerText = passwardLength;

}

// set indicator color using css in js
function setIndicator(color) {
    indicator.style.background = color;
}


function getRandomInteger(min, max) {
    return math.floor(math.random() * (max - min)) + min;
    // floor for around of krne ke liye hota h to avoid decimal value only return interger value 
}

function generateRandomNumber() {
    return getRandomInteger(0, 9);
}

function generateLowerCase() {
    return String.fromCharCode(getRandomInteger(97, 123)) //string fromCharCode will convert the integer value into alphabates
}

function generateUpperCase() {
    return String.fromCharCode(getRandomInteger(65, 91))
}

function generateSymbols() {
    const randomNum = getRandomNum(0, symbols.length);
    return symbols.chartAt(randomNum);  //symbolChartAt used to generate rendom symbols from the hard coded strings 
}

// conditions for colors strengths 

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSum = false;
    if (upperCaseCheck.checked) hasUpper = true;
    if (lowerCaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checkked) hasSym = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    }
    else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}


// copy content
async function copyContent() {
    // write text used to copied text work as a promise funnction it can be resolved or rejecte
    try {
        await navigator.clipboard.write(passworDisplay.value);
        copiedData.innerText = "copied";
    }
    catch (e) {
        copiedData.innerText = "Failed";
    }

    // to make copy wala span visible 
    copiedData.classList.add("active");

    setTimeout(() => {
        copiedData.classList.remove("active");
    }, 2000);

}

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlidder();
})