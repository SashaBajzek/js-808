import * as React from 'react';
import Note from "./Note";

const Instrument = ({ name, frames, currentFrame, changeNote, sequenceNum, instrumentNum }) => (
  <li className="Instrument">
    <h1>{name}</h1>
    <ul>
      {frames.map((frame, index) => (
        <Note noteVal={frame} key={`note${index}`} index={index} currentFrame={currentFrame} changeNote={changeNote} sequenceNum={sequenceNum} instrumentNum={instrumentNum}/>
      ))}
    </ul>
  </li>
);

export default Instrument;