import React from 'react';
import styles from "./VolumeButton.scss";
import fontAwesome from '../../../node_modules/font-awesome/css/font-awesome.min.css';

class VolumeButton extends React.Component {
  fa = fontAwesome['fa'];
  fa_volume_off = fontAwesome['fa-volume-off'];
  fa_volume_up = fontAwesome['fa-volume-up'];
  fa_volume_down = fontAwesome['fa-volume-down'];

  getClass = () => {
    var classes = [this.fa];
    if(this.props.icon === 'fa-volume-off') {
      classes.push(this.fa_volume_off);
    }
    if(this.props.icon === 'fa-volume-up') {
      classes.push(this.fa_volume_up);
    }
    if(this.props.icon === 'fa-volume-down') {
      classes.push(this.fa_volume_down);
    }
    return classes.join(' ');
  }

  volHandleClick = (e) => {
    const { type, mute, sequenceId, volIncrement, changeVolume } = this.props;

    if(type === "mute") {
      mute(sequenceId);
    } else {
      let rangeVolume = parseFloat(e.target.value, 0);

      if(!rangeVolume) {
        rangeVolume = null;
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