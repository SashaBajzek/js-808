import React from 'react';
import styles from './Pattern.scss';
import BeatContainer from "../Beat/BeatContainer";

class Pattern extends React.Component {
  render() {
    const { 
      pattern,
      sequenceId } = this.props;
    return (
      <ul className={styles.Pattern}>
        {pattern.map((beat, index) => (
          <BeatContainer 
            key={`beat${index}`}
            sequenceId={sequenceId}
            beatId={index}
          />
        ))}
      </ul>
    );
  }
}

export default Pattern;