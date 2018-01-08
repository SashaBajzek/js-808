import React from 'react';
import styles from './FramePattern.scss';
import Note from "../Note/Note";

class FramePattern extends React.Component {
  render() {
    const { frames, currentFrame, changeNote, sequenceNum, instrumentName } = this.props;
    return (
      <ul className={styles.FramePattern}>
        {frames.map((frame, index) => (
          <Note noteVal={frame} key={`note${index}`} index={index} currentFrame={currentFrame} changeNote={changeNote} sequenceNum={sequenceNum} instrumentName={instrumentName}/>
        ))}
      </ul>
    );
  }
}

export default FramePattern;