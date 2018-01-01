import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sequence from './Sequence';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sequences: [
        {
          totalFrames: 8,
          instruments: ["Kick", "Snare", "Open Hat", "Closed Hat"],
          frames: [
            [1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1]
          ]
        },
        {
          totalFrames: 8,
          instruments: ["Kick", "Snare", "Open Hat", "Closed Hat"],
          frames: [
            [0, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0]
          ]
        },
        { 
          totalFrames: 16,
          instruments: ["Kick", "Snare", "Open Hat", "Closed Hat"],
          frames: [
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
          ]
        }
      ],
      currentSequence: 0,
      currentFrame: 0,
      playing: false,
      bpm: 128,
      intervalId: 0
    }
  }

  changeNote = (sequenceNum, instrumentNum, frameNum) => {
    var newSequences = this.state.sequences;
    var currentNoteVal = newSequences[sequenceNum].frames[instrumentNum][frameNum];
    if(currentNoteVal === 0) {
      newSequences[sequenceNum].frames[instrumentNum][frameNum] = 1;
    } else {
      newSequences[sequenceNum].frames[instrumentNum][frameNum] = 0;
    }
    this.setState({sequences: newSequences})
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    const {currentFrame, currentSequence, sequences} = this.state;
    currentFrame < sequences[currentSequence].totalFrames - 1 ? 
    this.setState({currentFrame: currentFrame + 1}) : this.setState({currentFrame: 0});
  }

  play = () => {
    this.setState({playing: true});this.setState({intervalId: setInterval(this.timer, 60/this.state.bpm*1000)});
  }

  stop = () => {
    this.setState({playing: false});
    clearInterval(this.state.intervalId);
  }

  updateBPM = (event) => {
    this.setState({bpm: event.target.value});
  }

  updateSequence = (event) => {
    this.setState({currentSequence: parseInt(event.target.value, 0)});
  }

  render() {

    return (
      <div className="App">
        <Header play={this.play} stop={this.stop} updateBPM={this.updateBPM} updateSequence={this.updateSequence} bpm={this.state.bpm}/>
        <Sequence sequence={this.state.sequences[this.state.currentSequence]} number={this.state.currentSequence} currentFrame={this.state.currentFrame} changeNote={this.changeNote}/>
      </div>
    );
  }
}

export default App;
