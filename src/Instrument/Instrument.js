import React from 'react';
import VolumeAdjuster from '../VolumeAdjuster/VolumeAdjuster';
import FramePattern from "../FramePattern/FramePattern";
import "./Instrument.scss";

class Instrument extends React.Component {
  render(){
    const { name, frames, currentFrame, changeNote, instrumentMute, muteSound, changeVolume, sequenceNum, instrumentNum, instrumentVolume } = this.props;

    return (
      <li className={`Instrument Instrument--${instrumentNum}`}>
        <div className="Instrument__details">
          <h2 className="Instrument__title">{name}</h2>
          <VolumeAdjuster instrumentMute={instrumentMute} muteSound={muteSound} changeVolume={changeVolume} instrumentNum={instrumentNum} instrumentVolume={instrumentVolume} />
        </div>
        <FramePattern frames={frames} currentFrame={currentFrame} changeNote={changeNote} sequenceNum={sequenceNum} instrumentNum={instrumentNum} />
      </li>
    );
  }
}

export default Instrument;