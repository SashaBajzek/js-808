import React, { Component } from 'react';
import styles from './App.scss';
import initialState from '../../initialState';
import Header from '../Header/Header';
import Sequence from '../Sequence/Sequence';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  getFrame = (sequenceNum, instrument) => {
    return this.state.sequences[sequenceNum].frames[instrument].notes;
  }

  getNote = (sequenceNum, instrument, noteNum) => {
    return this.state.sequences[sequenceNum].frames[instrument].notes[noteNum];
  }

  changeNote = (sequenceNum, instrument, noteNum) => {
    var newSequences = this.state.sequences;
    var currentNoteVal = this.getNote(sequenceNum, instrument, noteNum);
    if(currentNoteVal === 0) {
      newSequences[sequenceNum].frames[instrument].notes[noteNum] = 1;
    } else {
      newSequences[sequenceNum].frames[instrument].notes[noteNum] = 0;
    }
    this.setState({sequences: newSequences})
  }

  muteSound = (sound) => {
    var newSounds = this.state.sounds;
    var instrument = newSounds[sound].sound;
    instrument.mute(!instrument.mute());
    this.setState({sounds: newSounds});
  }

  changeVolume = (sound, event, increment) => {
    var newSounds = this.state.sounds;
    var instrument = newSounds[sound].sound;
    var newVolume = instrument.volume();
    if(increment) {
      //if using buttons
      if(increment > 0){
        newVolume = newVolume + 0.1;
      } else {
        newVolume = newVolume - 0.1;
      }
    } else {
      //if dragging the range
      newVolume = parseFloat(event.target.value, 0);
    }
    instrument.volume(newVolume);
    instrument.mute(false);
    this.setState({sounds: newSounds});
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    const {currentFrame, currentSequence, sequences} = this.state;
    //advance frame number
    if (currentFrame < sequences[currentSequence].maxFrames - 1) {
      this.setState({currentFrame: currentFrame + 1});
    } else {
      this.setState({currentFrame: 0});
    }
    //play sounds
    this.playSounds(this.state.currentFrame, currentSequence, sequences);
  }

  playSounds = (currentFrame, currentSequence, sequences) => {
    let frames = sequences[currentSequence].frames;
    for (const prop in frames) {
      if(frames[prop].notes[currentFrame]) {
        this.state.sounds[frames[prop].sound].sound.play();
      }
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
      this.setState(
        {
          playing: true, 
          intervalId: setInterval(this.timer, 60/this.state.bpm*1000)
        });
    }
  }

  stop = () => {
    clearInterval(this.state.intervalId);
    //Set current frame back to beginning
    this.setState(
      {
        playing: false,
        currentFrame: -1
      }
    );
  }

  //make sure greater than 0
  updateBPM = (event) => {
    if(parseInt(event.target.value, 0) < 1 || !event.target.value) {
      //Set the new bpm in the state
      this.setState({bpm: event.target.value});
      //Clear the current interval
      clearInterval(this.state.intervalId);
    } else {
      //Clear the current interval
      clearInterval(this.state.intervalId);
      //Set the new bpm in the state
      //If playing, start interval again with new BPM
      if(this.state.playing) {
        this.setState(
          {
            bpm: event.target.value,
            intervalId: setInterval(this.timer, 60/event.target.value*1000)}
        );
      }
    }
  }

  updateSequence = (event) => {
    //Update sequence number in the state
    //Set current frame back to beginning
    this.setState(
      {
        currentFrame: -1,
        currentSequence: parseInt(event.target.value, 0)
      }
    );
  }

  render() {

    return (
      <div className={styles.App}>
        <Header play={this.playSequence} stop={this.stop} updateBPM={this.updateBPM} updateSequence={this.updateSequence} bpm={this.state.bpm} playing={this.state.playing}numSequences={this.state.sequences.length} />
        <Sequence sequence={this.state.sequences[this.state.currentSequence]} number={this.state.currentSequence} currentFrame={this.state.currentFrame} changeNote={this.changeNote} 
        sounds={this.state.sounds} muteSound={this.muteSound} changeVolume={this.changeVolume}/>
        <Footer />
      </div>
    );
  }
}

export default App;
