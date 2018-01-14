import React from 'react';
import styles from './Pattern.scss';
import Beat from "../Beat/Beat";

class Pattern extends React.Component {
  render() {
    const { 
      changeBeat,
      color, 
      currentBeat,
      currentLoopNum,
      currentSequenceNum,
      pattern } = this.props;
    return (
      <ul className={styles.Pattern}>
        {pattern.map((beat, index) => (
          <Beat 
            key={`beat${index}`}
            beatNum={index}
            beatOn = {beat}
            changeBeat={changeBeat}
            color={color}
            currentBeat={currentBeat}
            currentLoopNum={currentLoopNum} 
            currentSequenceNum={currentSequenceNum}
          />
        ))}
      </ul>
    );
  }
}

export default Pattern;