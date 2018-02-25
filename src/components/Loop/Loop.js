// @flow

import React from 'react';
import SequenceContainer from "../Sequence/SequenceContainer";
import styles from "./Loop.scss";
import LoopHeaderContainer from '../LoopHeader/LoopHeaderContainer';

type Props = {
  loopName: string,
  maxBeats: number,
  currentBeat: number,
  numSequences: number,
  disableAddSequence: boolean,
  addSequence: () => void
}

class Loop extends React.Component<Props> {
  current = styles.current;

  renderSequences = () => {
    let sequenceList = [];

    for(let i=0; i<this.props.numSequences; i+=1) {
      sequenceList.push(
        <SequenceContainer 
          key={`sequence${i}`}
          sequenceId={i}
        />
      );
    }

    return sequenceList;
  }

  getClass = (i) => {
    return i-1 === this.props.currentBeat ? this.current : "";
  }

  render() {
    const { loopName, disableAddSequence } = this.props;
    return (
      <div className={styles.Loop}>
        <div className={styles.header}>
          <h2 className={styles.title}>{loopName}</h2>
          <LoopHeaderContainer />
        </div>
        <ul className={styles.sequencelist}>
            {this.renderSequences()}
        </ul>
        <button onClick={this.props.addSequence} className={styles.button} disabled={disableAddSequence} >{disableAddSequence ? "Out of available instruments" : "Add Sequence"}</button>
      </div>
    )
  }
}

export default Loop;