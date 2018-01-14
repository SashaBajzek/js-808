import React from 'react';
import styles from "./Beat.scss";

class Beat extends React.Component {

  current = styles.current;
  selected = styles.selected;

  getClass = () => {
    const {
      beatOn, 
      beatNum, 
      currentBeat} = this.props;
    var classes = [];
    if(beatNum === currentBeat) {
      classes.push(this.current);
    }
    if(beatOn) {
      classes.push(this.selected);
    }
    return classes.join(' ');
  }

  render(){
    const { 
      beatNum, 
      beatOn, 
      changeBeat, 
      color,
      currentLoopNum,
      currentSequenceNum} = this.props;
    return(
      <li className={styles.Beat} onClick={() => changeBeat(currentLoopNum, currentSequenceNum, beatNum)}>
        <button className={`${styles.button} ${styles["button"+color]} ${this.getClass()}`}>
        {beatOn ? <span>Beat On</span> : <span>Beat Off</span>}
        </button>
      </li>
    )
  }
}

export default Beat;