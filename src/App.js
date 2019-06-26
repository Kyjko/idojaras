import React, { Component } from 'react';
import Forms from "./comps/Forms";
import Weather from "./comps/Weather";
import Titles from "./comps/Titles";
import "./App.css";

const API_KEY = "aa0ff5b720a73a21f4da8df217f13e94";

class App extends Component {
  


  state ={
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    err: undefined, 
  };  

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();

    if(city && country) {
      console.log(data);
      
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        desc: data.weather[0].desc,
        error: "",
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        desc: undefined,
        err: "Adj meg egy bemenetet!", 
      })
    }


  }

  render() { 
    return (
      <div class="mainContent">
        
        <Weather temp={this.state.temp} city = {this.state.city} 
        country = {this.state.country} humidity={this.state.humidity} desc={this.state.desc}
        err={this.state.err}/>
        <Forms getWeather={this.getWeather}/>

        <Titles />
      </div>
    );
  }
}
 
export default App;