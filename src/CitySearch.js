import React, { Component } from 'react';
import "./CitySearch.css";

class CitySearch extends Component {
    state = { 
        city : null
     }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            city : e.target.value
        })

    }

    render() { 


        return ( 
            <div className="citySearch" onSubmit={this.handleSubmit}>
                <label htmlFor="city"></label>
                <input type="text" name="city" id="city" placeholder="Entrer le nom de la ville" onChange={this.handleChange}/>
            </div>
         );
    }
}
 
export default CitySearch;