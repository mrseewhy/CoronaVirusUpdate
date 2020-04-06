import React, { Component } from 'react';
import './App.css';
import Heading from './Components/Heading'
import Search from './Components/Search'
import Home from './Components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from "axios"



class App extends Component {

  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    date:"", 
    time:"",
    image: ""
  }

  getWorldUpdate = ()=>{
    axios.get('https://covid19.mathdro.id/api').then(res=> this.setState({
      confirmed: res.data.confirmed.value,
      recovered: res.data.recovered.value,
      deaths: res.data.deaths.value,
      date: res.data.lastUpdate.substr(0,10),
      time: res.data.lastUpdate.substr(11, 5),
      image: res.data.image
    }))
  }


  componentDidMount(){
    this.getWorldUpdate();
  }

  

  render() {
    return (
      <Router>
      <div>
        <Heading />
        <Route exact path="/" component={() => <Home confirmed= {this.state.confirmed} recovered={this.state.recovered } deaths = {this.state.deaths} date = {this.state.date} time = {this.state.time} image={this.state.image} />} />
        <Route path="/search" component={Search} />
      </div>
      </Router>
    );
  }
}

export default App;
