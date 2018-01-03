import * as React from 'react';
import Note from "../Note/Note";
import "./Instrument.scss";

class Instrument extends React.Component {
  render(){
    const { name, frames, currentFrame, changeNote, instrumentMute, muteSound, changeVolume, sequenceNum, instrumentNum, instrumentVolume } = this.props;

    return (
      <li className={`Instrument Instrument--${instrumentNum}`}>
        <section className="Instrument__controls">
          <h2>{name}</h2>
          <ul className="Instrument__volume-controls">
            <li><button className={`Instrument__mute ${instrumentMute ? "Instrument__mute--muted": ""}`} onClick={() => muteSound(instrumentNum)}><i className="fa fa-volume-off" aria-hidden="true"></i><span className="Instrument__volume-button-text">Mute</span></button></li>
            <li className="Instrument__volume-range">
              <button className="Instrument__volume" instrument={instrumentNum} onClick={(e) => {changeVolume(e, -1)}}>
                <i instrument={instrumentNum} className="fa fa-volume-down" aria-hidden="true"></i><span className="Instrument__volume-button-text">Volume Down</span>
              </button>
              <input type="range" min="0" max="1" step="0.1" instrument={instrumentNum} value={instrumentVolume} onChange={(e) => {changeVolume(e)}}/>
              <button className="Instrument__volume" instrument={instrumentNum} onClick={(e) => {changeVolume(e, 1)}}>
                <i instrument={instrumentNum} className="fa fa-volume-up" aria-hidden="true"></i><span className="Instrument__volume-button-text">Volume Up</span>
              </button>
            </li>
          </ul>
        </section>
        <ul className="Instrument__notes-list">
          {frames.map((frame, index) => (
            <Note noteVal={frame} key={`note${index}`} index={index} currentFrame={currentFrame} changeNote={changeNote} sequenceNum={sequenceNum} instrumentNum={instrumentNum}/>
          ))}
        </ul>
      </li>
    );
  }
}

export default Instrument;