import React from 'react';
import Confetti from 'react-confetti'
import {nanoid} from "nanoid";
import Die from "./Die";

function App() {
    const [dice, setDice] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);
    const width = window.innerWidth;
    const height = window.innerHeight;

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const sameValue = dice.every(die => die.value === dice[0].value)
        if (allHeld && sameValue) {
            setTenzies(true);
        }
    }, [dice]);

    const diceElements = dice.map(actualDice =>
        <Die key={actualDice.id} value={actualDice.value} isHeld={actualDice.isHeld} holdDice={() => holdDice(actualDice.id)}/>);

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }

    function rollDice() {
        if (tenzies){
            setDice(allNewDice)
            setTenzies(false)
        } else {
            setDice(oldDice => oldDice.map(actualDie =>
                    actualDie.isHeld ?
                        actualDie :
                        generateNewDie()
                )
            )
        }
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(actualDie =>
            actualDie.id === id ? {...actualDie, isHeld: !actualDie.isHeld} : actualDie)
        );
    }
    return (
        <div className="App">
            <h1 className="title">Tenzies</h1>
            <p className="game-description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die--container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="btn--roll">{tenzies ? "New Game" : "Roll"}</button>
            {tenzies && <Confetti
                width={width}
                height={height}
            />}
        </div>
    );
}

export default App;
