import React from 'react';
import styles from "./VolumeRange.scss";

class VolumeRange extends React.Component {
  render(){
    const { changeVolume, instrumentName, instrumentVolume, soundName } = this.props;

    return (
      <div className={styles.VolumeRange}>
        <label htmlFor={`VolumeRange--${instrumentName}`} className={styles.label}>Adjust Volume</label>
        <input type="range" id={`VolumeRange--${instrumentName}`} className={styles["input"+instrumentName]} min="0" max="1" step="0.1" instrument={instrumentName} value={instrumentVolume} onChange={(e) => {changeVolume( soundName, e, null)}}/>
      </div>
    );
  }
}

export default VolumeRange;