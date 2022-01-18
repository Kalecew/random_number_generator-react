import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const RandomNumber = ({ number, random }) => (
    <div className="random-number">
        <h1 className="random-number__title">Генератор<br/>рандомных чисел</h1>
        <div className="random-number__value">{number}</div>
        <div className="random-number__footer">
            <button className="random-number__btn" type="button" onClick={random}>Сгенерировать</button>
        </div>
    </div>
)

class App extends Component{
    state = {
        number: 0
    }

    random = () => this.setState({ number: Math.round(Math.random()*100) })

    render(){
        const { number } = this.state
        return(
            // Header
            <main className="main">
                <RandomNumber number={number} random={this.random}/>
            </main>
            // Footer
        )
    }
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
);
