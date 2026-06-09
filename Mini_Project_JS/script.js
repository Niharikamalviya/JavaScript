const inputSlider = document.querySelector("[data-slider]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const lengthDisplay = document.querySelector("[data-length]");
const copyBtn = document.querySelector("[data-Copy]");
const copiedData = document.querySelector("[data-copied]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#Lowercase");
const numbersCheck = document.querySelector("#Numbers");
const symbolsCheck = document.querySelector("#Symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generatePassword");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_+=-{}|[]\:;"<,.>?/'

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// strength circle color to gray 


// set passwardLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

}

// set indicator color using css in js
function setIndicator(color) {
    indicator.style.background = color;
}


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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
    const randomNum = getRandomInteger(0, symbols.length);
    return symbols.charAt(randomNum);  //symbolChartAt used to generate rendom symbols from the hard coded strings 
}

// conditions for colors strengths 

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (upperCaseCheck.checked) hasUpper = true;
    if (lowerCaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;

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
        await navigator.clipboard.writeText(passwordDisplay.value);
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

function shufflePassword(array) {
    // fisher yates method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach((el) => (str += el));
    return str;
}
// function for suffle 

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked)
            checkCount++;
    });

    // special condition mini 4 length ka password hona chaiye 
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
}
)

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value)
        copyContent();


})

generateBtn.addEventListener('click', () => {
    // none of the checkbox are selected
    if (checkCount == 0)
        return;

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password

    // remove old password
    password = "";

    // let's put the stuff mentioned by checkbox
    // if (upperCaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if (lowerCaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if (numbersCheck.checked) {
    //     password += generateRandomNumber();

    // }

    // if (symbolsCheck.checked) {
    //     password += generateSymbols();

    // }

    let funcArr = [];
    if (upperCaseCheck.checked)
        funcArr.push(generateUpperCase);

    if (lowerCaseCheck.checked)
        funcArr.push(generateLowerCase);


    if (numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if (symbolsCheck.checked)
        funcArr.push(generateSymbols);

    // compulsory addition

    for (let i = 0; i < funcArr.length; i++) {
        password += funcArr[i]();

    }

    // remaining addition

    for (let i = 0; i < passwordLength - funcArr.length; i++) {
        let randIndex = getRandomInteger(0, funcArr.length);
        password += funcArr[randIndex]();
    }

    // suffle the password 
    password = shufflePassword(Array.from(password));

    passwordDisplay.value = password;

    // calculate strength

    calcStrength();

});