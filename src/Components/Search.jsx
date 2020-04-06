import React, { Component } from 'react';
import Cards from './Cards';
import axios from "axios"
import Axios from 'axios';

class Search extends Component {

    state= {countries:[],
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    date:"", 
    time:"",
    url:""
            }  
    
    componentDidMount(){
        axios.get('https://covid19.mathdro.id/api/countries').then(res => this.setState({
            country: res.data.countries
        }))
    }

    render() {
        return (
            <div>
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Search;





