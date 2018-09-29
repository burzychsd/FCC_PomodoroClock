import React, { Component, Fragment } from 'react';
import AboveClockControls from '../components/AboveClockControls/AboveClockControls';
import ClockDisplay from '../components/ClockDisplay/ClockDisplay';
import BelowClockControls from '../components/BelowClockControls/BelowClockControls';

let start;

Audio.prototype.stop = function() {
    this.pause();
    this.currentTime = 0;
};

class App extends Component {

  state = {
    break: 5,
    session: 25,
    min: 25,
    sec: 0,
    play: false,
    breakStart: false
  }

  breakIncrementHandle = () => this.setState((state) => { return { break: state.break !== 60 ? state.break + 1 : 60 } })
  breakDecrementHandle = () => this.setState((state) => { return { break: state.break !== 1 ? state.break - 1 : 1 } })
  sessionIncrementHandle = () => this.setState((state) => { return { session: state.session !== 60 ? state.session + 1 : 60, min: state.session !== 60 ? state.session + 1 : 60 } })
  sessionDecrementHandle = () => this.setState((state) => { return { session: state.session !== 1 ? state.session - 1 : 1, min: state.session !== 1 ? state.session - 1 : 1 } })

  resetHandle = () => { 
    const beep = document.querySelector('#beep');
    this.setState({ break: 5, session: 25, min: 25, sec: 0, play: false, breakStart: false });
    clearInterval(start);
    beep.stop();
  }

  playHandle = () => {
    const beep = document.querySelector('#beep');
    this.setState((state) => { return { play: !state.play } });
    if(!(this.state.play)) {
      start = setInterval(() => {
        if(this.state.sec === 0 && this.state.min !== 0) {
          this.setState((state) => { return { min: state.min - 1, sec: 59 } });
        } else if(this.state.sec !== 0){
          this.setState((state) => { return { sec: state.sec - 1 } });
        }
        else {
          beep.play();
          this.setState((state) => { return { min: state.breakStart ? this.state.session : this.state.break, sec: 0,  breakStart: !state.breakStart } });
        }
      }, 1000);
    } else {
      clearInterval(start);
    }
  }

  render() {
    return (
      <Fragment>
        <h1 id="title">Pomodoro Clock</h1>
        <AboveClockControls 
        break={this.state.break} 
        session={this.state.session} 
        sessionDecrement={!(this.state.play) ? this.sessionDecrementHandle : null}
        sessionIncrement={!(this.state.play) ? this.sessionIncrementHandle : null}
        breakDecrement={!(this.state.play) ? this.breakDecrementHandle : null}
        breakIncrement={!(this.state.play) ? this.breakIncrementHandle : null} />
        <ClockDisplay min={this.state.min} sec={this.state.sec} label={this.state.breakStart}/>
        <BelowClockControls reset={this.resetHandle} play={this.playHandle}/>
      </Fragment>
    );
  }
}

export default App;
