import React, { useState } from 'react'
import search from './Assets/search.png'
import clear from './Assets/clear.png'
import cloud from './Assets/cloud.png'
import drizzle from './Assets/drizzle.png'
import rain from './Assets/rain.png'
import snow from './Assets/snow.png'
import wind from './Assets/wind.png'
import humidity from './Assets/humidity.png'
import './weather.css'
function Weather() {
    const [wicon,setWicon]=useState(cloud)
    const api_key='b42d8ff3e71afbf735af72b6a75763c0'
    const h=async()=>{
        const element=document.getElementsByClassName("box")
        if(element[0].value===""){
            return 0;
        }
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`
       let response = await fetch(url)
       let data= await response.json();
       const humidity=document.getElementsByClassName("humiditypercent");
       const windspeed =document.getElementsByClassName("windspeed");
       const temprature =document.getElementsByClassName("weathertemp");
       const loca=document.getElementsByClassName("weatherlocation");
       humidity[0].innerHTML=Math.floor(data.main.humidity)+"%";
       windspeed[0].innerHTML=data.wind.speed+"KMPH";
       temprature[0].innerHTML=data.main.temp+"°C";
       loca[0].innerHTML=data.name;
       if(data.weather[0].icon==="01d" ||data.weather[0].icon==="01n"){
         setWicon(clear)
       }
       else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n"){
        setWicon(cloud)
       }
       else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n"){
        setWicon(drizzle)
       }
       else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n"){
        setWicon(cloud)
       }
       else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n"){
        setWicon(drizzle)
       }
       else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n"){
        setWicon(cloud)
       }
       else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n"){
        setWicon(cloud)
       }
       else {
        setWicon(clear)
       }
    }
  return (
    <div className='container'>
<div className="topbar">

<input type="text" className="box"placeholder='city'/>
<div className="search" onClick={h}>
    <img src={search} alt=""/>
</div>
</div>
<div className="weatherimg">
    <img src={wicon}></img>
</div>
<div className="weathertemp">


</div>
<div className="weatherlocation">
london</div>
<div className="datacontainer">
    <div className="element">

<img src={humidity} alt="" />
<div className="data">
    <div className="humiditypercent"></div>
    <div className="v">humidity</div>
</div>

    
    <div className="element">

<img src={wind} alt="" />
<div className="data">
    <div className="windspeed"></div>
    <div className="v">windspeed</div>
</div>

    </div>
</div>
</div>
    </div>
  )
}

export default Weather