import React from 'react';
import './FramePattern.scss';
import Note from "../Note/Note";

class FramePattern extends React.Component {
  render() {
    const { frames, currentFrame, changeNote, sequenceNum, instrumentNum } = this.props;
    return (
      <ul className="FramePattern">
        {frames.map((frame, index) => (
          <Note noteVal={frame} key={`note${index}`} index={index} currentFrame={currentFrame} changeNote={changeNote} sequenceNum={sequenceNum} instrumentNum={instrumentNum}/>
        ))}
      </ul>
    );
  }
}

export default FramePattern;