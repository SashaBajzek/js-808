import * as React from 'react';
import Note from "../Note/Note";
import "./Instrument.css";

const Instrument = ({ name, frames, currentFrame, changeNote, muteSound, changeVolume, sequenceNum, instrumentNum, instrumentVolume }) => (
  <li className="Instrument">
    <section className="Instrument__controls">
      <h2>{name}</h2>
      <ul className="Instrument__volume-controls">
        <li><button onClick={() => muteSound(instrumentNum)}><i className="fa fa-volume-off" aria-hidden="true"></i> Mute</button></li>
        <li className="Instrument__volume-range">
          <button instrument={instrumentNum} onClick={(e) => {changeVolume(e, -1)}}>
            <i instrument={instrumentNum} className="fa fa-volume-down"></i>
          </button>
          <input type="range" min="0" max="1" step="0.1" instrument={instrumentNum} value={instrumentVolume} onChange={(e) => {changeVolume(e)}}/>
          <button instrument={instrumentNum} onClick={(e) => {changeVolume(e, 1)}}>
            <i instrument={instrumentNum} className="fa fa-volume-up"></i>
          </button>
        </li>
      </ul>
    </section>
    <ul>
      {frames.map((frame, index) => (
        <Note noteVal={frame} key={`note${index}`} index={index} currentFrame={currentFrame} changeNote={changeNote} sequenceNum={sequenceNum} instrumentNum={instrumentNum}/>
      ))}
    </ul>
  </li>
);

export default Instrument;