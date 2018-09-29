import React from 'react';
import alarm from './alarm_beep_3.mp3';

const BelowClockControls = (props) => {
    return (
        <div className="w-100 mv4 flex justify-center items-center">
        	<i id="start_stop" className="mh2 fas fa-play fa-2x" onClick={props.play}>
				<i className="mh2 fas fa-pause" />
        	</i>
        	<i id="reset" className="mh2 fas fa-redo-alt fa-2x" onClick={props.reset} />
        	<audio id="beep" src={alarm} type="audio/mpeg" preload="auto"></audio>
        </div>
    );
};

export default BelowClockControls;
