import React from 'react';
import styles from "./VolumeButton.scss";
import fontAwesome from '../../node_modules/font-awesome/css/font-awesome.min.css';

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
    this.props.handleClick(this.props.instrumentNum, e, this.props.volIncrement);
  };

  render(){
    const { text, extraClassName } = this.props;
    console.log("class");
    console.log(extraClassName);
    return (
      <button className={`${styles.VolumeButton} ${styles[extraClassName]}`} onClick={ (e) => this.volHandleClick(e) }>
        <i className={`${this.getClass()}`} aria-hidden="true"></i>
        <span className={styles.text}>{text}</span>
      </button>
    );
  }
}

export default VolumeButton;