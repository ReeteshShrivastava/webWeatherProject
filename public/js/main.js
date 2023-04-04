const cityName = document.getElementById("cityName")
const btn = document.getElementById("submitBtn")
const city_name = document.getElementById("city_name");
const temp = document.getElementById("curr_temp")
const temp_status = document.getElementById("temp_status")
const day = document.getElementById("day");
const today_date = document.getElementById("today_date");

const getInfo = async (event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Plz write the name before you search"
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=23acdc864d23ad5129a0e4997a4f6927`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp.innerText = arrData[0].main.temp;
            let country = arrData[0].sys.country
            city_name.textContent = `${cityVal},${country}`;
        } catch (error) {
            city_name.innerText = "Please enter the city name correctly"
        }
    }


}
btn.addEventListener("click",getInfo);

// day.innerText="Tuesday";
// today_date.innerText = "1/1/2001";

const currentDay = ()=>{
    let today = new Date().toLocaleDateString();
    today_date.innerText = today;
    var objToday = new Date();
    let weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
    day.innerText = weekday[objToday.getDay()]; 
    // console.log();
}
currentDay()