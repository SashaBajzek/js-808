import React, { Component } from 'react';
import styles from './App.scss';
import initialState from '../../initialState';
import Header from '../Header/Header';
import Loop from '../Loop/Loop';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  getPattern = (loop, sequence) => {
    let pattern = Object.assign({}, this.state.loops[loop].sequences[sequence].pattern);
    return pattern;
  }

  getBeat = (loop, sequence, beatNum) => {
    let beat = this.state.loops[loop].sequences[sequence].pattern[beatNum];
    return beat;
  }

  getInstrumentFromSequence = (loop, sequence) => {
    let instrumentId = this.state.loops[loop].sequences[sequence].instrument;
    let instrumentIndex = this.state.instruments.findIndex(x => x.id === instrumentId);
    let instrument = Object.assign({}, this.state.instruments[instrumentIndex]);
    return instrument;
  }

  getInstrumentFromId = (instrumentId) => {
    let instrumentIndex = this.state.instruments.findIndex(x => x.id === instrumentId);
    let instrument = Object.assign({}, this.state.instruments[instrumentIndex]);
    return instrument;
  }

  getSoundFromId = (soundId) => {
    let soundIndex = this.state.sounds.findIndex(x => x.id === soundId);
    let sound = this.state.sounds[soundIndex];
    return sound;
  }

  getSoundFromSequence = (sequence) => {
    let instrument = this.getInstrumentFromId(sequence.instrument);
    let soundId = instrument.sound;
    let soundIndex = this.state.sounds.findIndex(x => x.id === soundId);
    let sound = this.state.sounds[soundIndex];
    return sound;
  }

  changeBeat = (loop, sequence, beatNum) => {
    let newLoops = Object.assign({}, this.state.loops);
    let currentBeatVal = this.getBeat(loop, sequence, beatNum);

    console.log("before", this.state.loops[loop].sequences[sequence].pattern[beatNum]);

    newLoops[loop].sequences[sequence].pattern[beatNum] = !currentBeatVal;

    console.log("after newloops", this.state.loops[loop].sequences[sequence].pattern[beatNum]);

    this.setState({loops: newLoops});
    
    console.log("after setstate", this.state.loops[loop].sequences[sequence].pattern[beatNum]);
  }

  muteSound = (soundId) => {
    let newSounds = this.state.sounds;
    let soundToMute = this.getSoundFromId(soundId).sound;
    soundToMute.mute(!soundToMute.mute());
    this.setState({sounds: newSounds});
  }

  changeVolume = (soundId, event, increment) => {
    let newSounds = this.state.sounds;
    let soundToChange = this.getSoundFromId(soundId).sound;
    let newVolume = soundToChange.volume();
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
    soundToChange.volume(newVolume);
    soundToChange.mute(false);
    this.setState({sounds: newSounds});
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    const {currentBeat, currentLoop, loops} = this.state;
    //advance currentBeat number
    if (currentBeat < loops[currentLoop].maxBeats - 1) {
      this.setState({currentBeat: currentBeat + 1});
    } else {
      this.setState({currentBeat: 0});
    }
    //play sounds
    this.playSounds(currentLoop, this.state.currentBeat);
  }

  playSounds = (currentLoop, currentBeat) => {
    let sequences = this.state.loops[currentLoop].sequences;
    sequences.forEach((sequence, index)=> {
      let sequenceNum = index;
      let playBeat = this.getBeat(currentLoop, sequenceNum, currentBeat);
      if(playBeat) {
        let soundId = this.getInstrumentFromSequence(currentLoop, sequenceNum).sound;
        this.getSoundFromId(soundId).sound.play();
      }
    });
  }

  //Play/Pause
  playLoop = () => {
    //If playing, pause the loop
    if(this.state.playing) {
      this.setState({playing: false});
      clearInterval(this.state.intervalId);
    } else {
      //If paused, play the loop
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
        currentBeat: -1
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

  changePlayingLoop = (event) => {
    //Update loop number in the state
    //Set current frame back to beginning
    this.setState(
      {
        currentBeat: -1,
        currentLoop: parseInt(event.target.value, 0)
      }
    );
  }

  render() {

    return (
      <div className={styles.App}>
        <Header 
          bpm={this.state.bpm}
          changePlayingLoop={this.changePlayingLoop}
          loops={this.state.loops}
          play={this.playLoop} 
          playing={this.state.playing}
          stop={this.stop} 
          updateBPM={this.updateBPM} 
        />
        <Loop 
          changeBeat={this.changeBeat}
          changeVolume={this.changeVolume}
          currentLoopNum={this.state.currentLoop} 
          currentBeat={this.state.currentBeat}
          getInstrumentFromId={this.getInstrumentFromId}
          getSoundFromSequence={this.getSoundFromSequence}
          loop={this.state.loops[this.state.currentLoop]} 
          muteSound={this.muteSound}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
