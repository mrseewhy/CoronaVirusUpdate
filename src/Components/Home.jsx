import React from 'react';
import Cards from './Cards'

const Home = ({confirmed, recovered, deaths, time, date, image}) => {
    return (
        <div>
            <h4 className="center" style={{padding:20}}>World Updates On Covid-19 (Corona Virus)</h4>
            
            <Cards confirmed={confirmed} recovered={recovered} deaths={deaths} date={date} time={time} image ={image}/>

            
        </div>
    );
}

export default Home;
