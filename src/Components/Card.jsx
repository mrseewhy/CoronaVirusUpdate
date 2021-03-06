import React from 'react';

const Card = () => {
    return (
            <div className="col s12 m4">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title"><strong>Cases</strong></span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
    );
}

export default Card;
