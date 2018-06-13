import React from 'react';

const Player = (props) => {
    return <input
        type="text"
        onChange={props.changed}
        value={props.currentName}/>;
};

export default Player;
