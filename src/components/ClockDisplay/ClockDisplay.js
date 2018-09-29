import React from 'react';

const ClockDisplay = (props) => {
    return (
        <div id="clock-display" className="w-85 mt3 flex flex-column justify-center items-center">
			<h2 id="timer-label">{props.label ? "Break" : "Session"}</h2>
			<h1 id="time-left" className="ma0 f1">{(props.min < 10 ? "0" + props.min : props.min) + ":" + (props.sec === 0 ? "00" : props.sec < 10 ? "0" + props.sec : props.sec)}</h1>
        </div>
    );
};

export default ClockDisplay;
