import * as React from 'react';
import Note from "./Note";
import "./Instrument.css";

const Instrument = ({ name, frames, currentFrame, changeNote, changeVolume, sequenceNum, instrumentNum }) => (
  <li className="Instrument">
    <section className="Instrument__controls">
      <h2>{name}</h2>
      <ul className="Instrument__volume-controls">
        <li><button onClick={() => changeVolume(instrumentNum, 0)}><i className="fa fa-volume-off" aria-hidden="true"></i> Mute</button></li>
        <li><button onClick={() => changeVolume(instrumentNum, -1)}><i className="fa fa-volume-down" aria-hidden="true"></i> Volume Down</button></li>
        <li><button onClick={() => changeVolume(instrumentNum, 1)}><i className="fa fa-volume-up" aria-hidden="true"></i> Volume Up</button></li>
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