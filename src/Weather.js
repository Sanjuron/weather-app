import React, { Component } from 'react';
import axios from 'axios';
import './Weather.css';

// http://openweathermap.org/img/wn/{id}@2x.png

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
                description1: res.data.list[1].weather[0].description,
                temp1 : res.data.list[1].main.temp,
                icon1: res.data.list[1].weather[0].icon,
                description2: res.data.list[2].weather[0].description,
                temp2 : res.data.list[2].main.temp,
                icon2: res.data.list[2].weather[0].icon,
                description3: res.data.list[3].weather[0].description,
                temp3 : res.data.list[3].main.temp,
                icon3: res.data.list[3].weather[0].icon,
                description4: res.data.list[4].weather[0].description,
                temp4 : res.data.list[4].main.temp,
                icon4: res.data.list[4].weather[0].icon,
            });
        }) }

    render() { 
        return ( 
            <div>
                <div className= "Today">
                    <h1>Météo du jour</h1>
                    <p>{this.state.city}</p>
                    <p>{this.state.description}</p>
                    <p>{this.state.temp}</p>
                    
                    <img src="{http://openweathermap.org/img/wn/%{this.state.icon}@2x.png}" alt=""/>
                </div>
                <div className="futuredays">
                <div className="nextdays">
                    <p>{this.state.city}</p>
                    <p>{this.state.description1}</p>
                    <p>{this.state.temp1}</p>
                    <p>{this.state.icon1}</p>
                </div>
                <div className="nextdays">
                    <p>{this.state.city}</p>
                    <p>{this.state.description2}</p>
                    <p>{this.state.temp2}</p>
                    <p>{this.state.icon2}</p>
                </div>
                <div className="nextdays">
                <p>{this.state.city}</p>
                <p>{this.state.description3}</p>
                <p>{this.state.temp3}</p>
                <p>{this.state.icon3}</p>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Weather;