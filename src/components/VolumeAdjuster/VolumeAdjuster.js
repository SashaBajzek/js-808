import React from 'react';
import styles from "./VolumeAdjuster.scss";
import VolumeButtonContainer from "../VolumeButton/VolumeButtonContainer";
import VolumeRangeContainer from "../VolumeRange/VolumeRangeContainer";

class VolumeAdjuster extends React.Component {

  muteSound = () => {
    this.props.mute(this.props.sequenceId);
  }
  
  render(){
    const { 
      sequenceId,
      instrumentMute
    } = this.props;
  
    return (
      <ul className={styles.list}>
        <li>
          <VolumeButtonContainer 
            extraClassName={`${instrumentMute ? "muted": ""}`} 
            icon="fa-volume-off" 
            text="Mute" 
            volIncrement="0"
            sequenceId={sequenceId}
            type="mute"
          />
        </li>
        <li className={styles.VolumeAdjuster}>
          <VolumeButtonContainer 
            sequenceId={sequenceId}
            icon="fa-volume-down" 
            text="Volume Down"
            volIncrement="-1"
            type="increment"
          />

          <VolumeRangeContainer 
            sequenceId={sequenceId} 
          />

          <VolumeButtonContainer 
            sequenceId={sequenceId}
            icon="fa-volume-up" 
            text="Volume Up" 
            volIncrement="1"
            type="increment"
          />
        </li>
      </ul>
    );
  }
}

export default VolumeAdjuster;