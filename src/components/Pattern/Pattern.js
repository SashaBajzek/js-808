// @flow
import React from 'react';
import styles from './Pattern.scss';
import BeatContainer from "../Beat/BeatContainer";

type Props = {
  pattern: Array<boolean>,
  sequenceId: number
}

class Pattern extends React.Component<Props> {
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