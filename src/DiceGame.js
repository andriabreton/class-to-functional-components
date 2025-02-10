import React, { useState } from 'react';
import ResultMessage from './ResultMessage';

const DiceGame = () => {
    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    const [maxRoll] = useState(6);

    const rollDice = () => {
        const roll1 = Math.floor(Math.random() * maxRoll) + 1;
        const roll2 = Math.floor(Math.random() * maxRoll) + 1;
        setDice1(roll1);
        setDice2(roll2);
    };

    return (
        <>
            <div>
                <button onClick={rollDice}>Roll!</button>
            </div>
            <ResultMessage dice1={dice1} dice2={dice2} />
            <div>
                <span className={`dice dice-${dice1}`} />
                <span className={`dice dice-${dice2}`} />
            </div>
        </>
    );
};

export default DiceGame;
