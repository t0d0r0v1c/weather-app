import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "df7e494d032aaac3b4fded69c671342d";
class App extends Component {

state = {
  
}

  getWeather = async (e) =>{
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
