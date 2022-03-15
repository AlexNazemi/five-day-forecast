import React, { useState } from 'react';
import axios from 'axios'; 

function Header() {

    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleClick() {
        const geoCoderURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + text + "&limit=5&appid=42ae8518a5c0a2ba38f261f30c5161ea"
        function getCoordinates(url) {
            axios.get(url).then((response) => {
                const locationLat = response.data[0].lat;
                const locationLon = response.data[0].lon;
                console.log(locationLat, locationLon);
            });
        } 
        getCoordinates(geoCoderURL);        
    }

    return (
        <div>
            <h1>Five Day Forecast</h1> 
            <input onChange={handleChange} type="text" name="name" autoFocus placeholder="Enter location here."/>
            <button type="submit" onClick={handleClick}>Forecast</button> 
        </div>
    )
}

export default Header;