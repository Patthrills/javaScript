let mode =document.getElementById('check'),
    search = document.getElementById('btn'),
    search_location = document.getElementById('city'),
    display_location = document.getElementById('locate'),
    get_temp =document.getElementById("get_temp"),
    get_temp_text = document.getElementById("get_temp_text"),
    get_city_name = document.getElementById("get_city_name"),
    get_location_img = document.getElementById("location_img"),
    get_hour_forecast = document.getElementById("hour_forecast"),
    get_day_forecast = document.getElementById("day_forecast"),
    get_backdrop = document.querySelector(".frame"),
    DIS = document.querySelector(".location_container");

//dark and light theme
mode.addEventListener('click', ()=>{
    if(mode.checked){
        document.body.classList.add("light-theme");
    }else{
        document.body.classList.remove("light-theme");
    }
});

//fetch  weather data
search.addEventListener('click', async()=> {
    const city = search_location.value;
    if(city !== ''){
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=7b93119c2cfb4cb6ae875952232310&q=${await city}&days=7&aqi=yes&alerts=yes`)
        .then(response => response.json())
        .then(data => { 
            const {location, current, forecast} = data;
             //get images from unsplash.com
             const  state_search =`${location.country}`
            fetch(`https://api.unsplash.com/search/photos?query=${state_search}&per_page=20`,{
                headers: {
                    "Authorization": `Client-ID mhiDFQYOXk7PZNkPTIShb2hxgR0G65PEve-JD7qxb30`,
                }
            })
            .then(res => res.json())
            .then(data =>{
                const bgURL = data.results[Math.floor(Math.random()*20)].urls.full;
                const imgUrl = data.results[Math.floor(Math.random()*20)].urls.full;
                const images = {
                    bg: bgURL, 
                    img:imgUrl
                };
                //stored in local storage
                localStorage.setItem("images", JSON.stringify(images));
            })
            .catch(error => console.log(`Error:`, error));
            //getting current data=
            let currentData = {
                geoPoint:{
                    state:`${location.name}`,
                    country: `${location.country}`,
                    // date: date()
                },
                geoCast:{
                    report: `${current.condition.text}`,
                    icon: `${current.condition.icon}`,
                    temp: `${current.temp_c}`,
                    humidity: `${current.humidity}`
                }
            };
            //getting day data
            let forecastResult ="",
                forecastHour = "",
                forecastDay = forecast.forecastday.length; 
            for(let i = 0; i < forecastDay; i++){
                let  d = new Date(forecast.forecastday[i].date);
                switch (d.getDay()) {
                    case 0:
                        day = "Sunday";
                        break;
                    case 1:
                        day = "Monday";
                        break;
                    case 2:
                        day = "Tuesday";
                        break;
                    case 3:
                        day = "Wednesday";
                        break;
                    case 4:
                        day = "Thursday";
                        break;
                    case 5:
                        day = "Friday";
                        break;
                    case  6:
                        day = "Saturday";
                    };
                forecastResult += `<div class="day_flex" >
                                        <p>${day}</p>
                                        <div class="info">
                                            <img src="${forecast.forecastday[i].day.condition.icon}" alt="">
                                            <p>${forecast.forecastday[i].day.maxtemp_c}°C</p>
                                        </div>
                                    </div>`;
                for(let j=0; j < forecast.forecastday[i].hour.length; ++j){
                    let  d = new Date(forecast.forecastday[i].hour[j].time);
                    let hour = d.getHours();
                    let format = hour >= 12? 'PM' : 'AM';
                    hour =  (hour % 12) || 12;
                    forecastHour += `   <div class="time">
                                            <p class="hours">${hour}:00 ${format}</p>
                                            <img src="${forecast.forecastday[i].hour[j].condition.icon}" alt="icon">
                                            <p><i class="fa-solid fa-temperature-quarter droplet"></i>${forecast.forecastday[i].hour[j].temp_c}°C</p>
                                            <p>${forecast.forecastday[i].hour[j].condition.text}</p>
                                            <div class="humidity">
                                                <p><i class="fa-solid fa-droplet droplet"></i>${forecast.forecastday[i].hour[j].chance_of_rain}%</p>
                                            </div>
                                        </div>`    
                }
            };
            //stores data to local storage
            localStorage.setItem("current", JSON.stringify(currentData));
            localStorage.setItem("forecastday", JSON.stringify(forecastResult));
            localStorage.setItem("forecastHour", JSON.stringify(forecastHour));
            // //loading data to webpage
            let current_dat =  JSON.parse(localStorage.getItem("current")),
            forecast_day =  JSON.parse(localStorage.getItem("forecastday")),
            forecast_hour =  JSON.parse(localStorage.getItem("forecastHour")),
            img_data =  JSON.parse(localStorage.getItem("images"));
            
            const {geoCast, geoPoint} = current_dat;
            display_location.style.display ="flex";
            get_temp.innerHTML = `<h1>${geoCast.temp}°</h1>
                                <img src="${geoCast.icon}" alt="img" class="temp_icon" id="get_temp_icon">`;
            get_temp_text.innerHTML = `${geoCast.report}<br>Day ${forecast.forecastday[0].hour[8].temp_c}°. 
                                        Night ${forecast.forecastday[0].hour[19].temp_c}°`;
            get_city_name.innerHTML = `<h3 class="city">${geoPoint.state}, ${geoPoint.country} Forecast.</h3>`;
            get_hour_forecast.innerHTML = `${forecast_hour}`;
            get_day_forecast.innerHTML = `${forecast_day}`;
    })
    .catch(error => {
        display_location.innerHTML = error;
    });

    search_location.value = '';
    }else{
        search_location.placeholder = 'field cannot be empty';
    };
});

let expand = document.getElementById("expand"),
    removed_elements= document.querySelectorAll(".remove"),
    readMore = document.querySelector(".moreBtn");

readMore.addEventListener("click", ()=>{
    expand.classList.toggle("expand");
    setTimeout(()=>{
        for(let i = 0; i < removed_elements.length; i++){
            removed_elements[i].classList.toggle("remove");
            img_data =  JSON.parse(localStorage.getItem("images"));
            if(expand.classList.contains("expand")){
                get_location_img.innerHTML = `<img src="${img_data.img}" alt="img" class="location_img remove">`;
                expand.style.backgroundImage = `url("${img_data.bg}")`;
                readMore.innerHTML = `Search <i class="fa-solid fa-magnifying-glass-location"></i>`;
                get_backdrop.classList.add("backdrop");
                readMore.classList.add("cancel");
            }else{
                get_location_img.innerHTML ="";
                expand.style.background =`linear-gradient(to right, #1b9bee,  #05558a)`;
                readMore.innerHTML = "More info";
                get_backdrop.classList.remove("backdrop");
                readMore.classList.remove("cancel");
            }
        }
    }, 500);
});


//passing data to  webpage
//get illustration
// const testing  = "sunny afternoon";
// const key = "BQAGc87HUhvhI7H2IJOPiFxaoMM7LKvcXHro5RCT";

// fetch(`https://api-illustrations.icons8.com/api/v2/illustrations/search?query=${testing}&token=${key}`)
// .then(res => res.json())
// .then(data => {console.log(data);
//     const vectorUrl = data.illustrations[0].urls.medium.url;
//     const vector = document.getElementById("location_img");
//     vector.src = vectorUrl;
// })
// .catch(Error => console.log(`Error: `, Error));