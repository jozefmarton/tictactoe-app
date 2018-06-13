import React from 'react';

const PlayerOutput = (props) => {
    return (
        <div>
            <p>Player X: {props.playerName}</p>
            <p>Player O: {props.playerName}</p>
        </div>
    );
};

export default PlayerOutput;
