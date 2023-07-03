import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import moment from "moment/moment";
import '../Style.css'
import axios from "axios";
export default function Weather({weatherData, change})
{
    const [query, setQuery] = useState("");
    const refresh = () => {
        window.location.reload();
    }

    const handleInput = (e)=> {
        setQuery(e.target.value);
    }

    
    const search = (city) => {
        axios
            .get(
            `${process.env.REACT_APP_API_URL}/weather?q=${
                city != "[object Object]" ? city : query
            }&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                
            change(response.data);
            setQuery("");
            })
            .catch(function (error) {
            
            //change("");
            setQuery("");
            alert('No Data found')
            //setError({ message: "Not Found", query: query });
            });
        };
                    
  
  return(
        <div className="main">
        <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
        </div>
        <input  type="text" value={query} onChange={handleInput}/>
        <button type="button" onClick={search}>Search</button>
       
        {/* <p className="header">{weatherData.name}</p> */}
        <div className="flex">
            <p className="day">Day: {moment().format('dddd')}</p>
            <p className="day">{moment().format('LL')}</p>
        </div>

        <div className="flex">
            <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
            <p className="temp">Humidity: {weatherData.main.humidity} %</p>
        </div>
      
      
  </div>
  )
}

// const refresh = () => {
//     window.location.reload();
//   }

  
// const CardExampleCard = ({weatherData}) => (
    
//     <div className="main">
//         <div className="top">
//         <p className="header">{weatherData.name}</p>
//         <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
//         </div>
//         <p className="header">{weatherData.name}</p>
//         <div className="flex">
//             <p className="day">Day: {moment().format('dddd')}</p>
//             <p className="day">{moment().format('LL')}</p>
//         </div>

//         <div className="flex">
//             <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
//             <p className="temp">Humidity: {weatherData.main.humidity} %</p>
//         </div>
      
      
//   </div>
//   )
  
//   export default CardExampleCard;