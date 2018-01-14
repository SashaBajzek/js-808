import React from 'react';
import styles from "./VolumeAdjuster.scss";
import VolumeButton from "../VolumeButton/VolumeButton";
import VolumeRange from "../VolumeRange/VolumeRange";

class VolumeAdjuster extends React.Component {
  render(){
    const { 
      changeVolume,
      color,
      instrumentMute, 
      instrumentVolume,
      muteSound, 
      soundId } = this.props;

    return (
      <ul className={styles.list}>
        <li>
          <VolumeButton 
            extraClassName={`${instrumentMute ? "muted": ""}`} 
            handleClick={muteSound} 
            icon="fa-volume-off" 
            soundId={soundId}
            text="Mute" 
            volIncrement="0"
          />
        </li>
        <li className={styles.VolumeAdjuster}>
          <VolumeButton 
            extraClassName={`increment${color}`} 
            handleClick={changeVolume} 
            icon="fa-volume-down" 
            soundId={soundId}
            text="Volume Down"
            volIncrement="-1" 
          />

          <VolumeRange 
            changeVolume={changeVolume} 
            color={color} 
            instrumentVolume={instrumentVolume} 
            soundId={soundId}
          />

          <VolumeButton 
            extraClassName={`increment${color}`} 
            handleClick={changeVolume} 
            icon="fa-volume-up" 
            soundId={soundId}
            text="Volume Up" 
            volIncrement="1" 
          />
        </li>
      </ul>
    );
  }
}

export default VolumeAdjuster;