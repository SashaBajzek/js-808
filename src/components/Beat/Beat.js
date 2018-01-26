import React from 'react';
import styles from "./Beat.scss";

class Beat extends React.Component {

  current = styles.current;
  selected = styles.selected;

  getClass = () => {
    const {
      beatOn, 
      beatId, 
      currentBeat} = this.props;
    var classes = [];
    if(beatId === currentBeat) {
      classes.push(this.current);
    }
    if(beatOn) {
      classes.push(this.selected);
    }
    return classes.join(' ');
  }

  render(){
    const { 
      sequenceId,
      beatId, 
      beatOn, 
      toggleBeat, 
      color
    } = this.props;
    return(
      <li className={styles.Beat} onClick={() => toggleBeat(beatId, sequenceId)}>
        <button className={`${styles.button} ${styles["button"+color]} ${this.getClass()}`}>
        {beatOn ? <span>Beat On</span> : <span>Beat Off</span>}
        </button>
      </li>
    )
  }
}

export default Beat;