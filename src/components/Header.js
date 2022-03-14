import React, { useState } from 'react';
import axios from 'axios'; 

function Header() {

    // create states to keep track of user input, storing the text input into const location when button is clicked
    const [text, setText] = useState("");
    const [location, setLocation] = useState("");

    // updates the state of text each time a change occurs to the input of the text input
    function handleChange(event) {
        setText(event.target.value);
    }

    // when submit button clicked, current state of the text input is stored inside location constant 
    function handleClick() {
        setLocation(text);
        console.log(location);
    }

    // api call to GeoCoder to get the longitute and latitude of the inputted city for the Open Weather API call 
    const geoCoderURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + location + "&limit=5&appid={9f1df3f8c943ccc898f91bfaede7760d}";
    console.log(axios.get(geoCoderURL));

    return (
        <div>
            <h1>Five Day Forecast</h1> 
            <input onChange={handleChange} type="text" name="name"autoFocus placeholder="Enter location here."/>
            <button type="submit" onClick={handleClick}>Forecast</button> 
        </div>
    )
}

export default Header;