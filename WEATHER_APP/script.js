
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const searchForm = document.querySelector(".grant-location-container");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");


// initially varibles need ?

let currentTab = userTab;
const API_KEY = "fd41cb78fca65516b5d188a4a21077e8";
currentTab.classList.add("current-tab");


function switchTab(clickedTab) {
    if (clickedTab != currentTab) { //old tab new tab ke  equal nhi hai toh
        currentTab.classList.remove("current-tab"); // old tab se bg color hatao
        currentTab = clickedTab;   // old tab ko ab new ke equal karo 
        currentTab.classList.add("current-tab");  // ab old tab me color laga do jab dono tab equal ho jaye

        if (!searchForm.classList.contains("active")) {  // invisible hai then make it search visible search tab here to visible this first invisible other tab
            userInfoContainer.classList.remove("active"); // try to invisible both tab user nd grant
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");

        }
        else {
            searchForm.classLIst.remove("active");
            userInfoContainer.classList.remove("active");
            //ab me your weather tab me hu , toh weather bhi display  karna padega , so let's check local storage first
            // for coordites, if we haved saved there.
            getfromSessionStorage();

        }

    }
}
userTab.addEventListener("click", () => {
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});


function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordintes");
    if (!localCoordinates) {
        //ager local coordinates nhi mile then show the grant local container
        grantAccesssContainer.classList.add("active");


    }
    else {
        const Coordinates = json.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const { lat, long } = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.add("active");
    //make loader visible
    loadingScreen.classList.add("active");

    // API CALL

    try {
        const responce = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        const data = await responce.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        // call to function to show real data 
        renderWeatherInfo.add(data);


    }

    catch (error) {
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.remove("active"); // HW

        console.log("Error Found", error)

    }

}

function renderWeatherInfo(weatherInfo) {
    // fistly we have to fetch the elements

    const cityName = document.querySelector("[data-cityName]");
    const countryFlag = document.querySelector("[data-countryFlag]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[ data-temp]");
    const windSpeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloud = document.querySelector("[data-cloud]");


    // fetch values from weatherInfo object and put it UI elements 

    cityName.innerText = weathrInfo?.name;
    countryFlag.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.counttry.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;;
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`
    temp.innerText = weatherInfo?.main?.temp;
    windSpeed.innerText = weatherInfo?.wind?.speed;
    humidity.innerText = weatherInfo?.main?.humidity;
    cloud.innerText = weatherInfo?.clouds?.all;
}

function getLocation() {
    if (navigator.geolaction) {
        navigation.geolocation.getCurrentPostion(showPosition);

    }
    else {
        alert("doesnot support geolocation");
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);


const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.ariaValueMax;

    if (cityname === "")
        return;

    else
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo.add(data);
    }
    catch (error) {
        console.log("Error found", error);

    }
}































// const API_KEY = "fd41cb78fca65516b5d188a4a21077e8";  //define the API KEYS

// function renderDataInUI(data) {

//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp?.toFixed(2)} °C`
//     document.body.appendChild(newPara);

// }


// async function showWeather() {
//     try {

//         // let latitude = 15.3333;
//         // let longitude = 74.0833; it is a weather app to find out the only city weather then dont need to definne lat and long
//         let city = "Goa";

// const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

//         const data = await response.json(); // convert the data into json formate
//         console.log("weather data: ->", data);

//         // now it time to show in UI
//         renderDataInUI(data);   //use can write diretly but the best prectise is that make functions and call the function here


//     }

//     catch (error) {
//         console.log("Error Found", error);

//     }
// }

// function switchTab(clickedTab) {
//     apiErrorContainer.classList.remove("active");

//     if (clickedTab != currentTab) {
//         currentTab.classList.remove("current-tab");
//         currentTab = clickedTab;
//         currentTab.classList.add("current-tab");

//         if (!searchFrom.classList.contains("active")) {
//             userInfoContainer.classList.remove("active");
//             searchForm.classList.add("active");

//         }
//         else {
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             getFromSessionStorage();
//         }
//     }
// }

// function geolocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         console.log("NO geolocation support");
//     }

// }

// function showPosition(position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;

//     console.log(lat);
//     console.log(long);
// }
