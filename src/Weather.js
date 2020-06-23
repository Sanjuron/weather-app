import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    state = {
      }

      componentDidMount(){
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Lens&lang=fr&units=metric&appid=37fd8b997d98b661d0df22b2afdedd90') // get, récupère une liste
        .then(res => {
            console.log(res.data.city.name); //nom ville
            console.log(res.data.list[0].weather[0].description) //description climat
            console.log(res.data.list[0].main.temp) //température
            console.log(res.data.list[0].weather[0].icon) // icone

            this.setState({
                city : res.data.city.name,
                description: res.data.list[0].weather[0].description,
                temp : res.data.list[0].main.temp,
                icon: res.data.list[0].weather[0].icon,
            });
        }) }

    render() { 
        return ( 
            <div className= "Today">
            <h1>Météo du jour</h1>
            <p>{this.state.city}</p>
            <p>{this.state.description}</p>
            <p>{this.state.temp}</p>
            <p>{this.state.icon}</p>
            </div>
         );
    }
}
 
export default Weather;