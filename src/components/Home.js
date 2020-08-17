import React from 'react';

import './Home.css'

const Home = ({history}) => (
    <div className="home">
        <div className="home__content">
            <h1 className="home__main-title">Guess the Flag</h1>
            <p className="home__tag-line">How well do you know your flags?</p>
            <button 
                onClick={() => history.push('/game')}
                className="home__button">Find out!</button>
        </div>
    </div>
)

export default Home;