import React from 'react'
import './Game.css'
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game__flag">
                <img className="game__flag__image" src={this.props.flag} alt=""></img>
                </div>
                <div className="game__buttons" onClick={this.props.handleClick}>
                    <button className="game__buttons__button" value={this.props.answers[0]}>{this.props.answers[0]}</button>
                    <button className="game__buttons__button" value={this.props.answers[1]}>{this.props.answers[1]}</button>
                    <button className="game__buttons__button" value={this.props.answers[2]}>{this.props.answers[2]}</button>
                    <button className="game__buttons__button" value={this.props.answers[3]}>{this.props.answers[3]}</button>
                </div>
            </div>
            
        )
    }
}

export default Game