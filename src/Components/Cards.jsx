import React from 'react';


const Cards = ({confirmed, recovered, deaths, time, date, image}) => {
    return (
        <div>
            <main>
            <div style={{paddingTop:"30px"}} className="container">
    <h6 className="blue-grey white-text" style={{padding:"10px"}} >Last Update Time: {date} - {time}</h6>
            <div className="row">
                <div className="col s12 m4 z-depth-5">
                  <div className="card blue darken-4">
                    <div className="card-content white-text">
                    <span className="card-title center">
                        <p><strong> {confirmed}</strong></p> Confirmed Cases</span>
                        <div className='center divider' style={{margin: 15}}></div>
                    </div>
                    <div className="card-action center">
                      <a className="btn blue darken-3" href="#stats">More Statistics</a>
                    </div>
                  </div>
                </div>

                <div className="col s12 m4 z-depth-5">
                  <div className="card yellow darken-3">
                    <div className="card-content white-text">
                    <span className="card-title center">
                        <p><strong> {recovered}</strong></p> Recovery Cases</span>
                        <div className='center divider' style={{margin: 15}}></div>
                    </div>
                    <div className="card-action center">
                      <a className="btn yellow darken-4" href="#stats">More Statistics</a>
                    </div>
                  </div>
                </div>

                <div className="col s12 m4 z-depth-5">
                  <div className="card red">
                    <div className="card-content white-text">
                    <span className="card-title center">
                        <p><strong> {deaths}</strong></p> Death Cases</span>
                        <div className='center divider' style={{margin: 15}}></div>
                    </div>
                    <div className="card-action center">
                      <a className="btn red  darken-3" href="#stats">More Statistics</a>
                      
                    </div>
                  </div>
                </div>
            </div>

        {/* Image card */}

    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={image} alt="stats" id="stats"/>
    </div>
  </div>

        {/* end of image card */}

        </div>
    </main>
        </div>
    );
}

export default Cards;
