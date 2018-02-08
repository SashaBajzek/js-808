// @flow

import React from 'react';
import styles from "./VolumeRange.scss";

type Props = {
  sequenceId: number,
  rangeVolume: number,
  instrumentName: string,
  instrumentVolume: number,
  instrumentColor: string,
  changeVolume: (number, number, null) => void
}

class VolumeRange extends React.Component<Props> {

  volHandleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { sequenceId, changeVolume } = this.props;

    let rangeVolume = parseFloat(e.currentTarget.value);

    changeVolume(sequenceId, rangeVolume, null);
  };

  render(){
    const { instrumentName, instrumentVolume, instrumentColor} = this.props;

    return (
      <div className={styles.VolumeRange}>
        <label htmlFor={`VolumeRange--${instrumentName}`} className={styles.label}>Adjust Volume</label>
        <input type="range" id={`VolumeRange--${instrumentName}`} className={styles["input"+instrumentColor]} min="0" max="1" step="0.1" instrument={instrumentName} value={instrumentVolume} onChange={(e) => {this.volHandleChange(e)}}/>
      </div>
    );
  }
}

export default VolumeRange;