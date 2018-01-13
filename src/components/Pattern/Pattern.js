import React from 'react';
import styles from './Pattern.scss';
import Beat from "../Beat/Beat";

class Pattern extends React.Component {
  render() {
    const { frames, currentFrame, changeNote, sequenceNum, instrumentName } = this.props;
    return (
      <ul className={styles.Pattern}>
        {frames.map((frame, index) => (
          <Beat noteVal={frame} key={`note${index}`} index={index} currentFrame={currentFrame} changeNote={changeNote} sequenceNum={sequenceNum} instrumentName={instrumentName}/>
        ))}
      </ul>
    );
  }
}

export default Pattern;