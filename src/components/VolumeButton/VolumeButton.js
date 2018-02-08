// @flow

import React from 'react';
import styles from "./VolumeButton.scss";
import fontAwesome from '../../../node_modules/font-awesome/css/font-awesome.min.css';

type Props = {
  type: string,
  mute: (number) => void,
  sequenceId: number,
  volIncrement: number,
  changeVolume: (number, number, number) => void,
  text: string,
  extraClassName: string,
  instrumentColor: string
}

class VolumeButton extends React.Component<Props> {
  fa = fontAwesome['fa'];
  fa_volume_off = fontAwesome['fa-volume-off'];
  fa_volume_up = fontAwesome['fa-volume-up'];
  fa_volume_down = fontAwesome['fa-volume-down'];
  icon = styles.icon;

  getClass = () => {
    var classes = [this.fa];
    classes.push(this.icon);
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

  volHandleClick = (e: SyntheticEvent<HTMLInputElement>) => {
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