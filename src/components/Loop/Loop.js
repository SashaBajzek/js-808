import React from 'react';
import Sequence from "../Sequence/Sequence";
import styles from "./Loop.scss";

class Loop extends React.Component {
  current = styles.current;
  
  renderHeader = () => {
    let headerList = [];
    for(var i = 1; i <= this.props.loop.maxBeats; i += 1) {
      headerList.push(<li className={`${styles.headeritem} ${this.getClass(i)}`} key={`header${i}`}>{i}</li>)
    }
    return headerList;
  }

  renderSequences = () => {
    let sequenceList = [];
    var sequences = this.props.loop.sequences;
    const { changeBeat, changeVolume, currentBeat, currentLoopNum, getInstrumentFromId, getSoundFromSequence, muteSound } = this.props;

    sequences.forEach((sequence, index) => {
      sequenceList.push(<Sequence 
        key={`sequence${index}`} 
        changeBeat={changeBeat}
        changeVolume={changeVolume}
        color={getInstrumentFromId(sequence.instrument).color}
        currentBeat = {currentBeat}
        currentLoopNum={currentLoopNum}
        currentSequenceNum={index}
        getInstrumentFromId={getInstrumentFromId}
        getSoundFromSequence={getSoundFromSequence}
        sequence={sequence}
        muteSound={muteSound}
        instrumentVolume={getSoundFromSequence(sequence).sound.volume()} 
        instrumentMute={getSoundFromSequence(sequence).sound.mute()}
        />);
    });
    return sequenceList;
  }

  getClass = (i) => {
    return i-1 === this.props.currentBeat ? this.current : "";
  }

  render() {
    return (
      <div className={styles.Loop}>
        <div className={styles.header}>
          <h2 className={styles.title}>{this.props.loop.name}</h2>
          <ul className={styles.headerlist}>
            {this.renderHeader()}
          </ul>
        </div>
        <ul className={styles.sequencelist}>
          {this.renderSequences()}
        </ul>
      </div>
    )
  }
}

export default Loop;