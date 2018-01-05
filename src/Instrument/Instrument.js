import * as React from 'react';
import Note from "../Note/Note";
import "./Instrument.scss";

class Instrument extends React.Component {
  render(){
    const { name, frames, currentFrame, changeNote, instrumentMute, muteSound, changeVolume, sequenceNum, instrumentNum, instrumentVolume } = this.props;

    return (
      <li className={`Instrument Instrument--${instrumentNum}`}>
        <div className="Instrument__details">
          <h2 className="Instrument__title">{name}</h2>
          <ul className="Instrument__vol-controls-list">
            <li><button className={`Instrument__vol-button Instrument__mute ${instrumentMute ? "Instrument__mute--muted": ""}`} onClick={() => muteSound(instrumentNum)}><i className="fa fa-volume-off" aria-hidden="true"></i><span className="Instrument__vol-button-text">Mute</span></button></li>
            <li className="Instrument__vol-adjuster">
              <button className="Instrument__vol-button Instrument__vol-button--gold" instrument={instrumentNum} onClick={(e) => {changeVolume(e, -1)}}>
                <i instrument={instrumentNum} className="fa fa-volume-down" aria-hidden="true"></i><span className="Instrument__vol-button-text">Volume Down</span>
              </button>
              <label htmlFor={`Volume--${instrumentNum}`} className="Instrument__label">Adjust Volume</label>
              <input type="range" id={`Volume--${instrumentNum}`} min="0" max="1" step="0.1" instrument={instrumentNum} value={instrumentVolume} onChange={(e) => {changeVolume(e)}}/>
              <button className="Instrument__vol-button Instrument__vol-button--gold" instrument={instrumentNum} onClick={(e) => {changeVolume(e, 1)}}>
                <i instrument={instrumentNum} className="fa fa-volume-up" aria-hidden="true"></i><span className="Instrument__vol-button-text">Volume Up</span>
              </button>
            </li>
          </ul>
        </div>
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