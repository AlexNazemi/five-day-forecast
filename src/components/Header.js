import React, { useState } from 'react';
import axios from 'axios'; 

function Header() {

    // create states to keep track of user input, storing the text input into const location when button is clicked
    const [text, setText] = useState("");
    const [location, setLocation] = useState("");

    // updates the state of text each time a change occurs to the input of the text input
    function handleChange(event) {
        setText(event.target.value);
        console.log(text);
    }

    // when submit button clicked, current state of the text input is stored inside location constant 
    function handleClick() {
        setLocation(text);
        const geoCoderURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + location + "&limit=5&appid=feab629ddad64dc21d6412ebae467d79"
        function getCoordinates(url) {
            axios.get(url).then((response) => {
                const locationLat = response.data[0].lat;
                const locationLon = response.data[0].lon;
                console.log(locationLat, locationLon);
            });
        } 
        getCoordinates(geoCoderURL);        
    }

    // api call to GeoCoder to get the longitute and latitude of the inputted city for the Open Weather API call 
    

    return (
        <div>
            <h1>Five Day Forecast</h1> 
            <input onChange={handleChange} type="text" name="name"autoFocus placeholder="Enter location here."/>
            <button type="submit" onClick={handleClick}>Forecast</button> 
        </div>
    )
}

export default Header;