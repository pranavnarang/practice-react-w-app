import React from 'react';

import Titles from "./components/titles"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "3ae01fa0fbc8643e12a00c56cf570895";

class App extends React.Component{

    getWeather = async (e) => {
        e.preventDefault();
        e.persist();
        console.log(e.target.elements);
        const city = 'manchester'
        const country = 'uk'
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data)
    }

    render(){
        return(
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather />
            </div>
        )
    }
}

export default App;
