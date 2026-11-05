import React from 'react';
import styles from "./VolumeButton.module.scss";

class VolumeButton extends React.Component {
  getClass = () => ['fa', this.props.icon, styles.icon].join(' ');

  volHandleClick = (e) => {
    // to access input instance use event.currentTarget
		//(event.currentTarget: HTMLInputElement);
    const { type, mute, sequenceId, volIncrement, changeVolume } = this.props;

    if(type === "mute") {
      mute(sequenceId);
    } else {
      let rangeVolume = parseFloat(e.currentTarget.value);

      if(!rangeVolume) {
        rangeVolume = 0;
      }

      changeVolume(sequenceId, rangeVolume, volIncrement);
    }
  };

  render(){
    const { text, extraClassName, type, instrumentColor } = this.props;
    return (
      <button className={`${styles.VolumeButton} ${styles[extraClassName]} ${styles[type + instrumentColor]}`} onClick={ (e) => this.volHandleClick(e) }>
        <i className={`${this.getClass()}`} aria-hidden="true"></i>
        <span className={styles.text}>{text}</span>
      </button>
    );
  }
}

export default VolumeButton;