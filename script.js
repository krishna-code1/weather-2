// api key for calling -> http://api.weatherapi.com/v1/current.json?key=00aa31c4ad844bd8a99103758262803&q=pune&aqi=yes

const input = document.querySelector("input");
const search = document.querySelector("#search");


const takeLocation = async ()=>{
    const location = input.value;
   
    if(location == ""){
        alert("please enter a location");
    } 
    else{
         const  data =  await getData(location);
         if(data != null){
             updateResult(data);
         }
    }

    input.value = "";

}

search.addEventListener("click",takeLocation);

const tempEle = document.querySelector("#temprature");
const locationEle = document.querySelector("#city");
const currDate = document.querySelector("#date");
const currTime = document.querySelector("#time");
const emoji = document.querySelector(".icon-img");
const condition = document.querySelector("#sunny");

const updateResult  = (data)=>{

    /**extract reqiure data */
const temprature = data.current.temp_c;
const currlocation = data.location.name;
const timeData  = data.location.localtime;
const [date, time] = timeData.split(" ");
const iconLink = data.current.condition.icon;
const currCondition = data.current.condition.text;


/***updated the  dom */
tempEle.textContent = temprature + " °C";
locationEle.textContent = currlocation;
currDate.textContent = date;
currTime.textContent = time;
emoji.src = iconLink;
condition.textContent = currCondition;

}

const getData = async (location)=>{
    const url = `https://api.weatherapi.com/v1/current.json?key=00aa31c4ad844bd8a99103758262803&q=${location}&aqi=yes`;
   
    try{
        const resp = await fetch(url);
        return resp.json();
    } 
    catch(err){
        alert("error try after some time");
        return null;
    }
}


