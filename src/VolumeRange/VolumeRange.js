import React from 'react';
import styles from "./VolumeRange.scss";

class VolumeRange extends React.Component {
  render(){
    const { changeVolume, instrumentNum, instrumentVolume } = this.props;

    return (
      <div className={styles.VolumeRange}>
        <label htmlFor={`VolumeRange--${instrumentNum}`} className={styles.label}>Adjust Volume</label>
        <input type="range" id={`VolumeRange--${instrumentNum}`} className={styles["input"+instrumentNum]} min="0" max="1" step="0.1" instrument={instrumentNum} value={instrumentVolume} onChange={(e) => {changeVolume( instrumentNum, e, null)}}/>
      </div>
    );
  }
}

export default VolumeRange;