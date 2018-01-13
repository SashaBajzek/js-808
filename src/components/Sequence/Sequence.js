import React from 'react';
import VolumeAdjuster from '../VolumeAdjuster/VolumeAdjuster';
import Pattern from "../Pattern/Pattern";
import styles from "./Sequence.scss";

class Sequence extends React.Component {
  render(){
    const { name, frames, currentFrame, changeNote, instrumentMute, muteSound, changeVolume, sequenceNum, instrumentName, instrumentVolume, soundName } = this.props;

    return (
      <li className={`${styles.Sequence} ${styles["Sequence"+instrumentName]}`}>
        <div className={styles.details}>
          <h2 className={styles.title}>{name}</h2>
          <VolumeAdjuster instrumentMute={instrumentMute} muteSound={muteSound} changeVolume={changeVolume} instrumentName={instrumentName} instrumentVolume={instrumentVolume} soundName={soundName} />
        </div>
        <Pattern frames={frames} currentFrame={currentFrame} changeNote={changeNote} sequenceNum={sequenceNum} instrumentName={instrumentName} />
      </li>
    );
  }
}

export default Sequence;