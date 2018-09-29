import React from 'react';

const AboveClockControls = (props) => {
    return (
        <div id="controls-titles" className="flex justify-between items-center">
        	<div className="w-45 flex flex-column">
        		<h2 id="break-label">Break<br />Length</h2>
        		<div className="above-controls mv3 w-100 flex justify-between item-center">
					<i id="break-decrement" className="fas fa-angle-down fa-2x" onClick={props.breakDecrement} />
					<p id="break-length">{props.break}</p>
					<i id="break-increment" className="fas fa-angle-up fa-2x" onClick={props.breakIncrement} />
				</div>
        	</div>
        	<div className="w-45 flex flex-column">
        		<h2 id="session-label">Session<br />Length</h2>
        		<div className="above-controls mv3 w-100 flex justify-between item-center">
					<i id="session-decrement" className="fas fa-angle-down fa-2x" onClick={props.sessionDecrement}/>
					<p id="session-length">{props.session}</p>
					<i id="session-increment" className="fas fa-angle-up fa-2x" onClick={props.sessionIncrement} />
				</div>
        	</div>
        </div>
    );
};

export default AboveClockControls;
