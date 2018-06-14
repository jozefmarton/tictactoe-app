import React from 'react';

const PlayerOutput = (props) => {
    return (
        <div>
            <p>Player X: {props.currentName}</p>
            <p>Player O: {props.currentName}</p>
        </div>
    );
};

export default PlayerOutput;
