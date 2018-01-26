import React from 'react';
import VolumeAdjusterContainer from '../VolumeAdjuster/VolumeAdjusterContainer';
import PatternContainer from "../Pattern/PatternContainer";
import styles from "./Sequence.scss";

class Sequence extends React.Component {
  render(){
    const {
      instrumentName,
      instrumentColor,
      sequenceId
    } = this.props;
    return (
      <li className={`${styles.Sequence} ${styles["Sequence"+instrumentColor]}`}>
        <div className={styles.details}>
          <h2 className={styles.title}>{instrumentName}</h2>
          <VolumeAdjusterContainer
            sequenceId={sequenceId}
          />
        </div>
        <PatternContainer sequenceId={sequenceId}/>
      </li>
    );
  }
}

export default Sequence;





/*
import React from 'react';
import VolumeAdjuster from '../VolumeAdjuster/VolumeAdjuster';
import Pattern from "../Pattern/Pattern";
import styles from "./Sequence.scss";

class Sequence extends React.Component {
  render(){
    const { 
      changeBeat, 
      changeVolume, 
      color, 
      currentBeat, 
      currentLoopNum, 
      currentSequenceNum, 
      getInstrumentFromId, 
      getSoundFromSequence,
      instrumentMute,
      instrumentVolume,
      muteSound, 
      sequence} = this.props;

    return (
      <li className={`${styles.Sequence} ${styles["Sequence"+color]}`}>
        <div className={styles.details}>
          <h2 className={styles.title}>{getInstrumentFromId(sequence.instrument).displayName}</h2>
          <VolumeAdjuster 
            changeVolume={changeVolume}
            color={color}
            instrumentMute={instrumentMute} 
            instrumentName={sequence.instrument} 
            instrumentVolume={instrumentVolume}
            muteSound={muteSound} 
            soundId={getSoundFromSequence(sequence).id} 
          />
        </div>
        <Pattern 
          changeBeat={changeBeat}
          color={color} 
          currentBeat={currentBeat} 
          currentLoopNum={currentLoopNum} 
          currentSequenceNum={currentSequenceNum}
          pattern={sequence.pattern}
        />
      </li>
    );
  }
}

export default Sequence;

*/