import React from 'react'

import Game from './Game'
import Header from './components/Header'
import Footer from './components/Footer'

import './GameScreen.css'



class GameScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            loading: true,
            answers: [],
            currFlag: {},
            totalGuesses: 0,
            correctGuesses: 0

        }
        this.createNewQuestion = this.createNewQuestion.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    createNewQuestion() {
        if(this.state.data === undefined) console.log('data is the problem');
        const arrLength = 4;
        const randomNumbers = this.generateRandomNumbers(arrLength, 250);
        const number = Math.floor(Math.random() * arrLength)
        const nextFlag = randomNumbers[number];
        const nextAnswers = [];
        for(let i = 0; i < randomNumbers.length; i++) {
            nextAnswers.push(this.state.data[randomNumbers[i]].name);
        }
        this.setState({
            answers: nextAnswers,
            currFlag: this.state.data[nextFlag],
        })
    }

    handleClick(event) {
        this.setState({
            totalGuesses: this.state.totalGuesses + 1,
            correctGuesses: this.state.correctGuesses + (event.target.value === this.state.currFlag.name ? 1 : 0)

        })
        this.createNewQuestion();
    }
    generateRandomNumbers(n, max) {
        let arr = [];
        while(arr.length < n) {
            let next = Math.floor(Math.random() * max);
            if(arr.indexOf(next) === -1) arr.push(next);
        }
        return arr;
    }

    async componentDidMount() {  
        const url = "https://restcountries.eu/rest/v2/all"
        const response = await fetch(url)
        const newdata = await response.json(); 
        this.setState({
            data: newdata,
            loading: false
        })
        this.createNewQuestion();
    }

    render() {
        return (
            <div className="game__screen">
                <Header />
                <div className="page-content">
                    <h1 className="game__title">Guess The Flag</h1>
                    <div className="game__body">
                        <h2 className="game__body__title">Which country has this flag?</h2>
                        {this.state.loading ? <p>loading..</p> : <Game handleClick={this.handleClick}flag={this.state.currFlag.flag} answers={this.state.answers}/>}
                        <div className="game__body__points">
                            <p>Correct Answers: {this.state.correctGuesses}</p>
                            <p>Wrong Answers: {this.state.totalGuesses - this.state.correctGuesses}</p>
                            <p>Total Number of Answers: {this.state.totalGuesses}</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default GameScreen