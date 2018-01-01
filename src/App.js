import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Sequence from './Sequence';

import { Howl } from 'howler';
import * as bubbleSound from "./sounds/bubbles.mp3";
import * as claySound from "./sounds/clay.mp3";
import * as coronaSound from "./sounds/corona.mp3";
import * as moonSound from "./sounds/moon.mp3";

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
      currentFrame: -1,
      playing: false,
      bpm: 128,
      intervalId: 0,
      sounds: {
        kickSound: new Howl({
          src: [bubbleSound]
        }),
        snareSound: new Howl({
          src: [claySound]
        }),
        openHatSound: new Howl({
          src: [coronaSound]
        }),
        closedHatSound: new Howl({
          src: [moonSound]
        })
      }
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
    //advance frame number
    currentFrame < sequences[currentSequence].totalFrames - 1 ? 
    this.setState({currentFrame: currentFrame + 1}) : this.setState({currentFrame: 0});
    //play sounds
    this.playSounds(this.state.currentFrame, currentSequence, sequences);
  }

  playSounds = (currentFrame, currentSequence, sequences) => {
    if(sequences[currentSequence].frames[0][currentFrame]){
      this.state.sounds.kickSound.play();
    }
    if(sequences[currentSequence].frames[1][currentFrame]){
      this.state.sounds.snareSound.play();
    }
    if(sequences[currentSequence].frames[2][currentFrame]){
      this.state.sounds.openHatSound.play();
    }
    if(sequences[currentSequence].frames[3][currentFrame]){
      this.state.sounds.closedHatSound.play();
    }
  }

  //Play/Pause
  playSequence = () => {
    //If playing, pause the sequence
    if(this.state.playing) {
      this.setState({playing: false});
      clearInterval(this.state.intervalId);
    } else {
      //If paused, play the sequence
      this.setState({playing: true});
      this.setState({intervalId: setInterval(this.timer, 60/this.state.bpm*1000)});
    }
  }

  stop = () => {
    this.setState({playing: false});
    clearInterval(this.state.intervalId);
    //Set current frame back to beginning
    this.setState({currentFrame: -1});
  }

  //make sure greater than 0
  updateBPM = (event) => {
    if(parseInt(event.target.value, 0) < 1 || !event.target.value) {
      //Set the new bpm in the state
      this.setState({bpm: event.target.value});
      //Clear the current interval
      clearInterval(this.state.intervalId);
    } else {
      //Set the new bpm in the state
      this.setState({bpm: event.target.value});
      //Clear the current interval
      clearInterval(this.state.intervalId);
      //If playing, start interval again with new BPM
      if(this.state.playing) {
      this.setState({intervalId: setInterval(this.timer, 60/event.target.value*1000)});
    }
    }
    
  }

  updateSequence = (event) => {
    //Update sequence number in the state
    this.setState({currentSequence: parseInt(event.target.value, 0)});
    //Set current frame back to beginning
    this.setState({currentFrame: -1});
  }

  render() {

    return (
      <div className="App">
        <Header play={this.playSequence} stop={this.stop} updateBPM={this.updateBPM} updateSequence={this.updateSequence} bpm={this.state.bpm}/>
        <Sequence sequence={this.state.sequences[this.state.currentSequence]} number={this.state.currentSequence} currentFrame={this.state.currentFrame} changeNote={this.changeNote}/>
      </div>
    );
  }
}

export default App;
