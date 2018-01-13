import React from 'react';
import styles from "./Beat.scss";

class Beat extends React.Component {

  current = styles.current;
  selected = styles.selected;

  getClass = () => {
    var classes = [];
    if(this.props.index === this.props.currentFrame) {
      classes.push(this.current);
    }
    if(this.props.noteVal) {
      classes.push(this.selected);
    }
    return classes.join(' ');
  }

  render(){
    return(
      <li className={styles.Note} onClick={() => this.props.changeNote(this.props.sequenceNum, this.props.instrumentName, this.props.index)}>
        <button className={`${styles.button} ${styles["button"+this.props.instrumentName]} ${this.getClass()}`}>
        {this.props.noteVal ? <span onClick={this.playSound}>Note On</span> : <span>Note Off</span>}
        </button>
      </li>
    )
  }
}

export default Beat;