import React from 'react';

import Titles from "./components/titles"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "3ae01fa0fbc8643e12a00c56cf570895";

class App extends React.Component{
    
    state =  {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (event) => {
        event.preventDefault();
        const city = (event.target.elements[0].value);
        const country = (event.target.elements[1].value);
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data)
        
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,  
            }) 
        } else {
            this.setState({
                error: "Please enter the values"
            })
        }
    }

    render(){
        return(
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                 />
            </div>
        )
    }
}

export default App;
