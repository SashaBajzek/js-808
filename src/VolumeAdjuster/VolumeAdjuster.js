import React from 'react';
import styles from "./VolumeAdjuster.scss";
import VolumeButton from "../VolumeButton/VolumeButton";
import VolumeRange from "../VolumeRange/VolumeRange";

class VolumeAdjuster extends React.Component {
  render(){
    const { instrumentMute, muteSound, changeVolume, instrumentName, instrumentVolume, soundName } = this.props;

    return (
      <ul className={styles.list}>
        <li>
          <VolumeButton extraClassName={`${instrumentMute ? "muted": ""}`} text="Mute" icon="fa-volume-off" instrumentName={instrumentName} handleClick={muteSound}  volIncrement="0" soundName={soundName} />
        </li>
        <li className={styles.VolumeAdjuster}>
          <VolumeButton extraClassName={`increment${instrumentName}`} text="Volume Down" icon="fa-volume-down" instrumentName={instrumentName} handleClick={changeVolume} volIncrement="-1" soundName={soundName} />

          <VolumeRange instrumentName={instrumentName} instrumentVolume={instrumentVolume} changeVolume={changeVolume} soundName={soundName} />

          <VolumeButton extraClassName={`increment${instrumentName}`}  text="Volume Up" icon="fa-volume-up" instrumentName={instrumentName} handleClick={changeVolume} volIncrement="1" soundName={soundName} />
        </li>
      </ul>
    );
  }
}

export default VolumeAdjuster;