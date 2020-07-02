import React, { Component } from 'react';
import "./CitySearch.css";

class CitySearch extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="citySearch">
                <label htmlFor="city"></label>
                <input type="text" name="city" id="city" placeholder="Entrer le nom de la ville"/>
            </div>
         );
    }
}
 
export default CitySearch;