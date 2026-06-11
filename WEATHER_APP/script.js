const API_KEY = "fd41cb78fca65516b5d188a4a21077e8";  //define the API KEYS 

function renderDataInUI(data) {

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp?.toFixed(2)} °C`
    document.body.appendChild(newPara);

}


async function showWeather() {
    try {

        // let latitude = 15.3333;
        // let longitude = 74.0833; it is a weather app to find out the only city weather then dont need to definne lat and long
        let city = "Goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json(); // convert the data into json formate
        console.log("weather data: ->", data);

        // now it time to show in UI 
        renderDataInUI(data);   //use can write diretly but the best prectise is that make functions and call the function here


    }

    catch (error) {
        console.log("Error Found", error);

    }
}

function switchTab(clickedTab) {
    apiErrorContainer.classList.remove("active");

    if (clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if (!searchFrom.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            searchForm.classList.add("active");

        }
        else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("NO geolocation support");
    }

}

function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
}
