import React, { Component } from 'react';
import axios from "axios"

class Search extends Component {

    state = {
        countries: [],
        country: ""
      } 

    getCountries = () => {
        axios.get('https://covid19.mathdro.id/api/countries').then(res => this.setState({countries : res.data.countries}))

    }
    

    getCountriesName = () => {
    this.state.countries.map(country => <p>{country.name}</p>)
    }
    
    componentDidMount(){
        this.getCountries()
        console.log(this.state)
        
    }

    
    render() {
        return (
            <div>
                        <div>
                            {this.getCountriesName() }
                        </div>
            </div>
        );
    }
}

export default Search;





