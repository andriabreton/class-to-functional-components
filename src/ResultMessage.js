import React from 'react';

const ResultMessage = (props) => {
    const getResult = (dice1, dice2) => {
        if (!dice1) {
            return 'nothing yet';
        }
        if (dice1 === 1 && dice2 === 1) {
            return 'snake eyes';
        }
        return dice1 + dice2;
    };

    const { dice1, dice2 } = props;
    const result = getResult(dice1, dice2);
    return <div>You rolled... {result}!</div>;
};

export default ResultMessage;
